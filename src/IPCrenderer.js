const { ipcRenderer } = require('electron')

function setIPC() {
  ipcRenderer.on('pong', (event, arg)=>{
    console.log(`pong ecived-> ${arg}`)
  })
}

function sendIPC() {
  ipcRenderer.send('ping', new Date())
}

module.exports = {
  setIPC,
  sendIPC
}