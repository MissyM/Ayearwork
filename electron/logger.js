let win

module.exports = {
  init: mainWin =>  {
    win = mainWin
  },
  log: (...data) => {
    win.webContents.executeJavaScript("console.log('%cFROM MAIN', 'color: #800', '" + data + "');")
  },
}
