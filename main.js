// # DON'T BE A DICK PUBLIC LICENSE

// > Version 1.1, December 2016

// > Copyright (C) [2021] [Tehbb]

// Everyone is permitted to copy and distribute verbatim or modified
// copies of this license document.

// > DON'T BE A DICK PUBLIC LICENSE
// > TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

// 1. Do whatever you like with the original work, just don't be a dick.

//    Being a dick includes - but is not limited to - the following instances:

//  1a. Outright copyright infringement - Don't just copy this and change the name.
//  1b. Selling the unmodified original with no work done what-so-ever, that's REALLY being a dick.
//  1c. Modifying the original work to contain hidden harmful content. That would make you a PROPER dick.

// 2. If you become rich through modifications, related works/services, or supporting the original work,
// share the love. Only a dick would make loads off this work and not buy the original work's
// creator(s) a pint.

// 3. Code is provided with no warranty. Using somebody else's code and bitching when it goes wrong makes
// you a DONKEY dick. Fix the problem yourself. A non-dick would submit the fix back.



// Compile: electron-packager TTI TTI --platform=win32 --arch=x64

// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron');
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow () {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 400,
        height: 480,
        frame: false,
        backgroundColor: '#FFF',
        webPreferences: {
            nodeIntegration: true
        },
        resizable: false,
    });

    // and load the index.html of the app.
    mainWindow.loadFile('window/index.html');

    // Open the DevTools.
    // mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
