
const state = { data: undefined }
const LOCALSTORAGE_DB_KEY = 'yupaydb'

const storageContent = localStorage.getItem(LOCALSTORAGE_DB_KEY)

if (storageContent) {
  state.data = JSON.parse(storageContent)
} else {
  localStorage.setItem(LOCALSTORAGE_DB_KEY, '[]')
  state.data = []
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
    return true
  },
  edit(doc) {
    const otherDoc = state.data.find(doc => doc.id === id)
    if (otherDoc) {
      Object.assign(otherDoc, doc)
      return true
    }
    return false
  },
}
