const { app, BrowserWindow } = require('electron')
const { create: createMainWindow, show: showMainWindow, close: closeMainWindow } = require('./windows/main.js')

// 创建 myWindow, 加载应用的其余部分, etc...
app.on('ready', () => {
    createMainWindow()
    require('./trayAndMenu')
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) showMainWindow()
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
app.on('before-quit', () => {
    closeMainWindow()
})