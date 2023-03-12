// 关于app 展示信息
const openAboutWindow = require('about-window').default
const path = require('path')

const create = () => openAboutWindow({
    icon_path: path.join(__dirname, 'icon.png'),
    package_json_dir: path.resolve(__dirname, '../../../'),
    copyright: 'Copyright (c) 2020 ele',
})

module.exports = { create }