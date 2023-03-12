const { app, BrowserWindow, ipcMain, Notification } = require ('electron')
const path = require('path')

let win
let willQuitApp = false

function create() {
    win = new BrowserWindow({
        width: 1200,
        height: 1600,
        icon: path.join(__dirname, '../icon.png'),
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, '../preload.js')
        },
        show: false,
    })
    if (process.platform === 'darwin') {
        app.dock.setIcon(path.join(__dirname, '../icon.png'))
    }
    // app.setBadgeCount(3)
    win.on('close', (e) => {
        if (willQuitApp) {
            win = null;
        } else {
            e.preventDefault();
            win.hide();
        }
    })

    win.on('ready-to-show', () => {
        win.show()
    })

    ipcMain.on('set-title', (event, title) => {
        new Notification({
            title: '新消息提示',
            body: 'nihaonihaonihao',
            icon: '../icon.png'
        }).show()
        app.setBadgeCount(title)
    })

    win.loadFile(path.join(__dirname, '../../../vue_dist/index.html'))
    // win.loadURL('http://localhost:8080/')
    //打开开发者工具
    win.webContents.openDevTools()
}

function show () {
    if (win.isMinimized()) {
        win.restore()
    }
    win.show();
}
function close () {
    willQuitApp = true;
    win.close();
}
function send(channel, ...args) {
    win.webContents.send(channel, ...args)
}

module.exports = {
    create,
    show,
    close,
    send,
}