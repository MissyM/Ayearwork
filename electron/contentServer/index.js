const express = require('express')
const fs = require('fs')
const path = require('path')
const cors = require('cors')
const ip = require('ip')
const bodyParser = require('body-parser')
const isDev = require('electron-is-dev')
const uuidV4 = require('uuid/v4')
// const PouchDB = require('pouchdb/dist/pouchdb')
const db = require('./db')
const logger = require('../logger')
const mime = require('mime')

const electron = require('electron') 
const app = electron.app

const userPath = app.getPath('userData')
const yupayLogsFile = path.join(userPath, 'yupay-logs.txt')

var createContentServer = function () {

  var app = express()

  app.use(cors())

  app.use(bodyParser.json())

  app.use(express.static(path.join(__dirname, '../student-app-compiled')))

  app.get('/api', (req, res) => {
    res.json({
      msg: 'Yupay API running',
    })
  })

  app.use('/api/thumbnails/:id', (req, res) => {
    const filePath = path.join(__dirname, `../assets/thumbnails`) + `/${req.params.id}`
    logger.log(req.params.id + ' id params')
    const stat = fs.statSync(filePath)
    const fileSize = stat.size
    const mimeType = mime.getType(filePath)
    logger.log(mimeType + ' mimetype')
    const head = {
      'Content-Length': fileSize,
      'Content-Type': mimeType,
    }
    res.writeHead(200, head)
    fs.createReadStream(filePath).pipe(res)
  })
  app.use('/api/pdf/:id', (req, res) => {
    const filePath = path.join(__dirname, `../assets/pdf`) + `/${req.params.id}`
    const stat = fs.statSync(filePath)
    const fileSize = stat.size
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'application/pdf',
    }
    res.writeHead(200, head)
    fs.createReadStream(filePath).pipe(res)
  })

  app.get('/api/video/:id', (req, res) => {
    const filePath = path.join(__dirname, `../assets/video`) + `/${req.params.id}`
    const stat = fs.statSync(filePath)
    const fileSize = stat.size
    const range = req.headers.range
    if (range) {
      const parts = range.replace(/bytes=/, "").split("-")
      const start = parseInt(parts[0], 10)
      const end = parts[1] 
        ? parseInt(parts[1], 10)
        : fileSize-1
      const chunksize = (end-start) + 1
      const file = fs.createReadStream(filePath, {start, end})
      const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4',
      }
      res.writeHead(206, head);
      file.pipe(res);
    } else {
      const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
      }
      res.writeHead(200, head)
      fs.createReadStream(filePath).pipe(res)
    }
  })

  app.post('/api/log', (req, res) => {
    const log = req.body
    if (isDev) {
      logger.log(log)
    }
    // Se adjunta el log al archivo yupay-logs.txt
    fs.appendFileSync(yupayLogsFile, JSON.stringify(log) + '\n', 'utf8')
    res.json({ msg: 'success' })
  })

  app.post('/api/register', (req, res) => {
    const data = req.body
    if (isDev) {
      logger.log(data)
    }
    const id = uuidV4()
    const user = {
      ...data,
      id,
      type: 'user',
      timestamp: Date.now(),
    }
    const result = db.put(user)
    if (result) {
      res.json({ msg: 'success', user: ({ ...user, password: undefined }) })
    } else {
      res.status(401).json({ msg: 'unauthorized' })
    }
  })

  app.post('/api/login', (req, res) => {
    const data = req.body
    if (isDev) {
      logger.log(data)
    }
    const result = db.find('user', user => user.username === data.username)
    if (result.length > 0) {
      res.json({ msg: 'success', id: result[0].id })
    } else {
      res.status(401).json({ msg: 'unauthorized' })
    }
  })

  app.use(function(err, req, res, next) {
    if (err) {
      logger.log('error', err)
    }
  })

  app.listen(8080, isDev ? 'localhost' : ip.address(), function () {
    logger.log('Listening on port 8080!')
  })
}

module.exports = createContentServer
