const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const ipcMain = require('electron').ipcMain;

const sudo = require('sudo-prompt'),
  J5Instance = require('../src/resources/libs/johnnyFive/instance-program'),
  childProcess = require('../src/resources/libs/handler-child-process'),
  chalk = require('chalk'),
  log = console.log;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
      nodeIntegrationInWorker: true,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL(
    isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`,
  );
  // Open the DevTools.
  if (isDev) {
    const { default: installExtension, REDUX_DEVTOOLS } = require('electron-devtools-installer');
    installExtension(REDUX_DEVTOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err));

    mainWindow.webContents.openDevTools({ mode: 'detach' });
  }
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

function reset() {
  log(chalk.black.bgYellow.bold('Cerrando instancia ...'));
  J5Instance.killnodes();
}

// Instalacion de entorno
ipcMain.on('setup', (event, device) => {
  log(chalk.black.bgYellow.bold('Dispositivo para configurar: ', device));
  if (device) {
    childProcess.setupDevice(sudo, device);
  }
});

// Ejecucion del codigo del entorno
ipcMain.on('execute', (event, data) => {
  log(chalk.black.bgWhite.bold('Código: \n', data.code));
  log(chalk.black.bgWhite.bold('Dispositivo: \n', data.device));
  J5Instance.killnodes();

  J5Instance.executeProgram(
    data.code,
    data.device,
    event,
    data.validate_code.variable,
    data.channel,
  );
});

ipcMain.on('clean', (event, data) => {
  log(chalk.black.bgWhite.bold('Código: \n', data.code));
  log(chalk.black.bgWhite.bold('Dispositivo: \n', data.device));
  J5Instance.killnodes();
  J5Instance.cleanProgram(data.code, data.device, event);
});

ipcMain.on('kill-instances', (event, code) => {
  reset();
});

ipcMain.on('list', (event, data) => {
  childProcess.execute();
});

ipcMain.on('devices', (event, data) => {
  childProcess.devices((devices) => {
    event.reply('devices-reply', devices);
  });
});
