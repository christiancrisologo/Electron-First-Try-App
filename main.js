const {app,BrowserWindow} = require('electron'),
 path = require('path'),
 url = require('url');

let win;

 createWindow = function(){
    
    // create browser window
    win = new BrowserWindow({width:800,height:600,icon:__dirname +'assets/img/favicon.ico'});

    // load age
    win.loadURL(url.format({
        pathname: path.join(__dirname,'index.html'),
        protocol: 'file:',
        slashes:true
    }));

    // open devtools
    win.webContents.openDevTools();

    //
    win.on('closed', ()=>{
        win = null;
    });

    
}

 // run create window
app.on('ready', createWindow);

/// quire when all windows are closed
app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin'){
        app.quit();
    }
});