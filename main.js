/*
Author: shaack (https://shaack.com)
License: MIT
 */

const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const url = require('url')

class Main {

    constructor() {
        app.on('ready', () => {
            this.createWindow()
            this.createMenu()
        })
        app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') {
                app.quit()
            }
        })
        app.on('activate', () => {
            if (this.browserWindow === null) {
                this.createWindow()
            }
        })
    }

    createMenu() {
        const template = [{
            label: "Application",
            submenu: [
                {label: "About Inboxinator", selector: "orderFrontStandardAboutPanel:"},
                {type: "separator"},
                {
                    label: "Quit", accelerator: "Command+Q", click: function () {
                        app.quit()
                    }
                }
            ]
        }, {
            label: "Edit",
            submenu: [
                {role: 'undo'},
                {role: 'redo'},
                {type: 'separator'},
                {role: 'cut'},
                {role: 'copy'},
                {role: 'paste'},
                {role: 'pasteandmatchstyle'},
                {role: 'delete'},
                {role: 'selectall'}
            ]
        }, {
            label: "View",
            submenu: [
                {role: "reload"}
            ]
        }
        ]
        Menu.setApplicationMenu(Menu.buildFromTemplate(template))
    }

    createWindow() {
        this.browserWindow = new BrowserWindow({width: 1024, height: 768, minWidth: 320, minHeight: 240})
        this.browserWindow.loadURL(url.format({
            pathname: path.join(__dirname, './index.html'),
            protocol: 'file:',
            slashes: true
        }))
        this.browserWindow.on('closed', () => {
            this.browserWindow = null
        })
    }

}

const main = new Main()