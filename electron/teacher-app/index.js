const ip = require('ip')
const opn = require('opn')

const link = `http://${ip.address()}:8080`

const addressBtn = document.getElementById('testAddressBtn')
addressBtn.onclick = () => {
  opn(link)
}

const addressSpan = document.getElementById('address')
addressSpan.innerText = link
