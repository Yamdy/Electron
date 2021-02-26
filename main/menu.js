const { Menu, BrowserWindow, remote }  = require('electron');

let template = [
    {
        label: '文件',
        submenu: [
            { 
                label: '新建',
                accelerator: 'ctrl+n',
                click: () => {
                    var win = new BrowserWindow({
                        width: 500,
                        height: 500,
                        webPreferences: {
                            nodeIntegration: true
                        }
                    });

                    win.loadFile('yellow.html');
                    win.on('closed', () => {
                        win = null;
                    })
                }
            },
            { label: '打开' },
        ]
    },
    {
        label: '编辑',
        submenu: [
            { label: '撤销' },
            { label: '恢复' },
        ]
    },

]

let m = Menu.buildFromTemplate(template);

Menu.setApplicationMenu(m);