const electron = require('electron')
const fs = require('fs')
const path = require('path')
const app = electron.app

const userPath = app.getPath('userData')
const dbFile = path.join(userPath, 'yupay-db.json')

const state = { data: undefined }

let storageContent

if (fs.existsSync(dbFile)) {
  storageContent = fs.readFileSync(dbFile, 'utf-8')
}

if (storageContent) {
  state.data = JSON.parse(storageContent)
} else {
  fs.writeFileSync(dbFile, '[]', 'utf-8')
  state.data = []
}

function save() {
  fs.writeFileSync(dbFile, JSON.stringify(state.data, null, 2), 'utf-8')
}

module.exports = {
  find(type, fn) {
    if (fn) {
      return state.data.filter(doc => doc.type === type && fn(doc))
    } else {
      return state.data.filter(doc => doc.type === type)
    }
  },
  get(id) {
    state.data.find(doc => doc.id === id)
  },
  put(doc) {
    const otherDoc = state.data.find(doc => doc.id === id)
    if (otherDoc) {
      return false
    }
    state.data.push(doc)
    save()
    return true
  },
  edit(doc) {
    const otherDoc = state.data.find(doc => doc.id === id)
    if (otherDoc) {
      Object.assign(otherDoc, doc)
      return true
    }
    save()
    return false
  },
}
