const { app, BrowserWindow } = require('electron')

let mainWindow = null

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    })
    // mainWindow.webContents.openDevTools()
    require('./main/menu')
    mainWindow.loadFile('index2.html')
    mainWindow.on('closed', () => {
        mainWindow = null
    })
})