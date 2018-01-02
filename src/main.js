import url from 'url'
import { app, BrowserWindow } from 'electron'

let win = null

app.on('ready', () => {

    BrowserWindow.addDevToolsExtension('/Users/ianhardgrove/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/2.5.2_0')
    BrowserWindow.addDevToolsExtension('/Users/ianhardgrove/Library/Application Support/Google/Chrome/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.15.1_0')

    win = new BrowserWindow({width: 800, height: 600})
    
    win.loadURL(url.format({
        protocol: 'http:',
        hostname: 'localhost',
        port: 9000,
        slashes: true
    }))
    
    win.webContents.openDevTools()
    
    win.on('closed', () => { win = null })
})

app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit() })