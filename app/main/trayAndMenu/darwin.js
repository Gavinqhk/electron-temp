const { app, Menu, Tray } = require('electron')
const { create: createAboutWindow} = require('./about.js')
const path = require('path')

let tray = null

function setTray() {
    tray = new Tray(path.join(__dirname, './icon_darwin@2x.png'))
    tray.on('click', () => {
        console.log('tray click')
    })
    tray.on('right-click', () => {
        const contextMenu = Menu.buildFromTemplate([
			{ label: '打开', click: () => {showMainWindow()}},
			{ label: '设置', click: () => {console.log('menu click setting', app.name)}},
			{ label: '退出', click: () => {app.quit()}}
		])
        tray.popUpContextMenu(contextMenu)
    })
    tray.on('drop-files', (e, files) => {
        console.log('files', files)
    })
    tray.on('drop-text', (e, text) => {
        console.log('text', text)
    })
    // tray.setTitle('3')
    // tray.setToolTip('123')
}

function setAppMenu() {
    let appMenu = Menu.buildFromTemplate([
        {
            label: app.getName(),
            submenu: [
                {
                  label: 'about Ele',
                  click: createAboutWindow
                },
                { type: 'separator'  },
                { role: 'services'  },
                { type: 'separator'  },
                { role: 'hide'  },
                { role: 'hideothers'  },
                { role: 'unhide'  },
                { type: 'separator'  },
                { role: 'quit'  }
            ],
        },
		{ role: 'fileMenu' },
		{ role: 'viewMenu' },
		{ role: 'windowMenu' },
		{ role: 'editMenu' }
    ]);
    app.applicationMenu = appMenu;
}
app.whenReady().then(() => {
    setTray()
    setAppMenu()
})