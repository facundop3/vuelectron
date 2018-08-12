'use strict'

const { app, BrowserWindow } = require('electron')


app.on('ready', () => {
  let windowOptions = {
    'title': 'WhatsApp',
    'center': true,
    'show': false,
    'titleBarStyle': 'hidden'
  }
  let win = new BrowserWindow(windowOptions)
  win.on('close', () => {
    win = null
  })

  win.loadURL(`http://localhost:8080/`)
  win.once('ready-to-show', () => {
    win.show()
  })
})

app.on('before-quit', () => {
  console.log('Goodbye')
})

app.on('window-all-closed', () => {
  app.quit()
})
