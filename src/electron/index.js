'use strict'

const { app, BrowserWindow } = require('electron')

let url
if (process.env.NODE_ENV === 'DEV') {
  url = 'http://localhost:8080/'
} else {
  url = `file://${process.cwd()}/dist/index.html`
}

app.on('ready', () => {
  let windowOptions = {
    'title': 'WhatsApp',
    'center': true,
    'show': false,
    'titleBarStyle': 'hidden'
  }
  let loader = new BrowserWindow({
    "center": true,
    "frame": false,
    "width":180,
    "height":180
  })
  loader.loadURL(`file://${__dirname}/loader.html`)
  let win = new BrowserWindow(windowOptions)
  win.on('close', () => {
    win = null
  })

  win.loadURL(url)
  win.once('ready-to-show', () => {
    win.show()
    loader.close()
    loader = null
  })
})

app.on('before-quit', () => {
  console.log('Goodbye')
})

app.on('window-all-closed', () => {
  app.quit()
})
// In main process.
const {ipcMain} = require('electron')
ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg) // prints "ping"
  event.sender.send('asynchronous-reply', 'pong')
})

ipcMain.on('synchronous-message', (event, arg) => {
  console.log(arg) // prints "ping"
  event.returnValue = 'pong'
})