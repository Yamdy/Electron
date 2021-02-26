const btn = this.document.querySelector('#btn');

const { BrowserWindow,Menu,getCurrentWindow } = require('electron').remote;

const { shell } = require('electron')

window.onload = function() {
    btn.onclick = () => {
        newWindow = new BrowserWindow({
            width: 500,
            height: 500
        })

        newWindow.loadFile('yellow.html')
        newWindow.on('close', () => {
            newWindow = null
        })
    }
}

const { remote } = require('electron')
let rightTemplate = [
    {
        label: '复制',
        accelerator: 'ctrl+c',
    },
    {
        label: '粘贴',
        accelerator: 'ctrl+v',
    },
]

let m = remote.Menu.buildFromTemplate(rightTemplate);

window.addEventListener('contextmenu', function(e) {
    e.preventDefault();

    m.popup({
        window: remote.getCurrentWindow()
    })
})

window.addEventListener('keydown', e => {
    e.preventDefault();
    const {keyCode} = e;
    if(keyCode === 123){
        currentWindow = getCurrentWindow();
        currentWindow && currentWindow.toggleDevTools();
        
    }
},false);

let aHref = document.querySelector('#aHref');
aHref.onclick = function(e) {
    e.preventDefault();
    let href = this.getAttribute('href');
    shell.openExternal(href)
}