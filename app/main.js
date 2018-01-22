const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600})

   const {app, Menu} = require('electron') 
 
const template = [ 
  { 
    label: 'File', 
    submenu: [ 
      {role: 'quit'}, 
    ] 
  }, 
  { 
    label: 'View', 
    submenu: [ 
      {label: 'New Channel'}, 
      {label: 'Channel Properties'}, 
      {label: 'Delete Channel'}, 
      {type: 'separator'}, 
      {label: 'Start Channel'}, 
      {label: 'Stop Channel'}, 
      {type: 'separator'}, 
      {label: 'Run Channel Now'} 
    ] 
  }, 
  { 
    label: 'Logging', 
    submenu: [ 
      {label: 'Log File Options'} 
    ] 
  }, 
  { 
    role: 'help', 
    submenu: [ 
      { 
        label: 'Hakkında', 
        click () { require('electron').shell.openExternal('https://electron.atom.io') } 
      } 
    ] 
  } 
] 
 
if (process.platform === 'darwin') { 
  template.unshift({ 
    label: app.getName(), 
    submenu: [ 
      {role: 'about'}, 
      {type: 'separator'}, 
      {role: 'services', submenu: []}, 
      {type: 'separator'}, 
      {role: 'hide'}, 
      {role: 'hideothers'}, 
      {role: 'unhide'}, 
      {type: 'separator'}, 
      {role: 'quit'} 
    ] 
  }) 
 
  // Edit menu 
  template[1].submenu.push( 
    {type: 'separator'}, 
    { 
      label: 'Speech', 
      submenu: [ 
        {role: 'startspeaking'}, 
        {role: 'stopspeaking'} 
      ] 
    } 
  ) 
 
  // Window menu 
  template[3].submenu = [ 
    {role: 'close'}, 
    {role: 'minimize'}, 
    {role: 'zoom'}, 
    {type: 'separator'}, 
    {role: 'front'} 
  ] 
} 
 
const menu = Menu.buildFromTemplate(template) 
Menu.setApplicationMenu(menu)  

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', startApi)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
const os = require('os');
var apiProcess = null;

function startApi() {
  var proc = require('child_process').spawn;
  //  run server
  var apipath = path.join(__dirname, '..\\api\\bin\\dist\\win\\api.exe')
  if (os.platform() === 'darwin') {
    apipath = path.join(__dirname, '..//api//bin//dist//osx//Api')
  }
  else if(os.platform() === 'linux')
  {
    apipath = path.join(__dirname, '..//api//bin//Release//netcoreapp2.0//ubuntu.16.04-x64//api')



  }
  apiProcess = proc(apipath)

  apiProcess.stdout.on('data', (data) => {
    writeLog(`stdout: ${data}`);
    if (mainWindow == null) {
      createWindow();
    }
  });
}

//Kill process when electron exits
process.on('exit', function () {
  writeLog('exit');
  apiProcess.kill();
});

function writeLog(msg){
  console.log(msg);
}