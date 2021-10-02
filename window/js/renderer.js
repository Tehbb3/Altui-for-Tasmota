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




// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const electron = require('electron');
const remote = electron.remote;
const globalShortcut = electron.globalShortcut









const win = remote.getCurrentWindow(); /* Note this is different to the
html global `window` variable */

// When document has loaded, initialise
document.onreadystatechange = (event) => {
    if (document.readyState == "complete") {
        handleWindowControls();

        document.getElementById('electron-ver').innerHTML = `${process.versions.electron}`
    }
};

window.onbeforeunload = (event) => {
    /* If window is reloaded, remove win event listeners
    (DOM element listeners get auto garbage collected but not
    Electron win listeners as the win is not dereferenced unless closed) */
    win.removeAllListeners();
}

function handleWindowControls() {
    // Make minimise/maximise/restore/close buttons work when they are clicked
    document.getElementById('min-button').addEventListener("click", event => {
        win.minimize();
    });

    document.getElementById('max-button').addEventListener("click", event => {
        win.maximize();
    });

    document.getElementById('restore-button').addEventListener("click", event => {
        win.unmaximize();
    });

    document.getElementById('close-button').addEventListener("click", event => {
        win.close();
    });

    // Toggle maximise/restore buttons when maximisation/unmaximisation occurs
    toggleMaxRestoreButtons();
    win.on('maximize', toggleMaxRestoreButtons);
    win.on('unmaximize', toggleMaxRestoreButtons);

    function toggleMaxRestoreButtons() {
        if (win.isMaximized()) {
            document.body.classList.add('maximized');
        } else {
            document.body.classList.remove('maximized');
        }
    }
}











function reloadWindow () {
    mainWindow.reload()
    console.log("reloadWindow Called");
}
