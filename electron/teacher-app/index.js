const ip = require('ip')
const opn = require('opn')
const path = require('path')

const electron = require('electron').remote
const app = electron.app

const userPath = app.getPath('userData')
const yupayLogsFile = path.join(userPath, 'yupay-logs.txt')

// student app

const link = `http://${ip.address()}:8080`

const addressBtn = document.getElementById('testAddressBtn')
addressBtn.onclick = () => {
  opn(link)
}

const addressSpan = document.getElementById('address')
addressSpan.innerText = link

// logs

const openLogsBtn = document.getElementById('openLogsBtn')
openLogsBtn.onclick = () => {
  opn(yupayLogsFile)
}

const logsSpan = document.getElementById('logs')
logsSpan.innerText = yupayLogsFile
