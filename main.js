const { app, BrowserWindow } = require('electron')
const windowStateKeeper = require('electron-window-state')

const createWindow =() =>{

  let state = windowStateKeeper({
    defaultHeight: 950, defaultWidth: 1200
  })
  const mainWindow = new BrowserWindow({
    x: state.x, y: state.y,
    width: state.width,
    height: state.height,

    minWidth: 500, maxWidth: 800, minHeight: 400,

    webPreferences: { nodeIntegration: true }
  })

  mainWindow.loadFile("Views/index.html");

  state.manage(mainWindow)

  mainWindow.webContents.openDevTools();
}

app.on('ready', createWindow)