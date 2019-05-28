const app = require('electron').app;
const BrowserWindow = require('electron').BrowserWindow;
const path = require('path');
const url = require('url');
require('../build/main');

let win = undefined;

app.on('ready', createWindow);

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
});

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });

  // win.loadURL(
  //   url.format({
  //     pathname: path.join(__dirname, `../build/client/index.html`),
  //     protocol: 'file:',
  //     slashes: true,
  //   })
  // );
  win.loadURL('http://localhost:8081/');

  win.webContents.openDevTools();
}

// Defines the behavior on close.
app.on('window-all-closed', function() {
  app.quit();
});
