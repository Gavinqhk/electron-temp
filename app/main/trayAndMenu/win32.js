const {app, Menu, Tray} = require('electron')
const path = require('path')
const {create: createAboutWindow} = require('./about.js')

let tray = null

app.whenReady().then(() => {
    tray = new Tray(path.join(__dirname, './icon_win32.png'))
    const contextMenu = Menu.buildFromTemplate([
        { label: `打开${app.name}`, click: showMainWindow},
        { label: `关于${app.name}`, click: createAboutWindow},
        { type: 'separator' },
        { label: '退出', click: () => {app.quit()}}
    ])
    tray.setToolTip('This is my APP.')
    tray.setContextMenu(contextMenu)
    menu = Menu.buildFromTemplate([])
    app.applicationMenu = menu;
})

