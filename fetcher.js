// It should take two command line arguments:

// a URL
// a local file path

const request = require('request');
const fs = require("fs");
let sourcePage = process.argv[2]
let target = process.argv[3]

request(sourcePage, function (error, response, body) {
  fs.writeFile(target, body, 'utf8', err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${target}`)
  });
});






