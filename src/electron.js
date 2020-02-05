const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const { is } = require('electron-util');
const isDev = require('electron-is-dev');
const unhandled = require('electron-unhandled');
unhandled();

if (isDev) {
  const contextMenu = require('electron-context-menu');
  contextMenu();
}

const debug = require('electron-debug');
debug({ showDevTools: false });

let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({ width: 900, height: 680 });
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3456'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  mainWindow.on('closed', () => (mainWindow = null));
}
app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (!is.macos) {
    app.quit();
  }
});
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
