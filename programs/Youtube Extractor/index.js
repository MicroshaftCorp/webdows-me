/*!
Project: Webdows
Liscense: MIT
Author: krisdb2009
Date: 03/14/16
File: programs/Youtube Extractor/index.js
*/
new explorer.window()
.title('Youtube Extractor')
.resize(200, 200)
.callback(function() {
    this.body.html('There is no API for this. Webdows ME will crash in 20 minutes....');
});
new explorer.context()
.append([
    {
       title: 'Shutdown'
    }, {}, {
       title: 'Wipe out system',
       callback: function() { console.log('World Clicked'); }
    }
]);
