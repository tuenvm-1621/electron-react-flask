const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600, title: 'Todo App' })
  mainWindow.loadURL('http://localhost:3000');
  mainWindow.on('closed', () => mainWindow = null)
}

app.on('ready', createWindow)

app.on('window-all-closed', () => app.quit())

app.on('activate', () => {if (mainWindow) { createWindow(); }})