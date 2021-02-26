const fs = require('fs');

window.onload = function() {
    var chess = this.document.querySelector('#chess');
    var btn = this.document.querySelector('#btn');

    btn.onclick = function() {
        fs.readFile('chess.json', (err, data) => {
            chess.innerHTML = data;
        })
    }
}