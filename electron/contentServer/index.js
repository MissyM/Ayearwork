const express = require('express')
const fs = require('fs')
const path = require('path')
const cors = require('cors')
const ip = require('ip')
const bodyParser = require('body-parser')
const isDev = require('electron-is-dev')

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
      console.log(log )
    }
    //Se adjunta el log al archivo yupay-logs.txt
    fs.appendFileSync(yupayLogsFile, JSON.stringify(log) + '\n', 'utf8')
    res.json({ msg: 'success' })
  })

  app.listen(8080, isDev ? 'localhost' : ip.address(), function () {
    console.log('Listening on port 8080!')
  })
}

module.exports = createContentServer
