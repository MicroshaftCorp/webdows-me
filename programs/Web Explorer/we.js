/*!
Project: Webdows
Liscense: MIT
Author: krisdb2009
Date: 05/05/16
File: programs/Web Explorer/we.js
*/
new explorer.window()
.title('WE does not exist')
.resize(200, 200)
.callback(function() {
    this.body.html('Go download chrom!');
});
