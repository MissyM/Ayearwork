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

  app.use(express.static('./student-app-compiled'))

  app.use('/api/pdf', express.static('./assets/pdf'))

  // app.get('/api/video', (req, res) => {
  //   res.json([
  //     { title: 'Video 1', id: '1.mp4' },
  //     { title: 'Video 2', id: '2.mp4' },
  //   ])
  // })

  app.get('/api/video/:id', (req, res) => {
    const path = `assets/video/${req.params.id}`
    const stat = fs.statSync(path)
    const fileSize = stat.size
    const range = req.headers.range
    if (range) {
      const parts = range.replace(/bytes=/, "").split("-")
      const start = parseInt(parts[0], 10)
      const end = parts[1] 
        ? parseInt(parts[1], 10)
        : fileSize-1
      const chunksize = (end-start) + 1
      const file = fs.createReadStream(path, {start, end})
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
      fs.createReadStream(path).pipe(res)
    }
  })

  app.post('/api/log', (req, res) => {
    const log = req.body
    if (isDev) {
      console.log(log)
    }
    fs.appendFileSync(yupayLogsFile, JSON.stringify(log) + '\n', 'utf8')
    res.json({ msg: 'success' })
  })

  app.listen(8080, isDev ? 'localhost' : ip.address(), function () {
    console.log('Listening on port 8080!')
  })
}

module.exports = createContentServer
