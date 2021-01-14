const { fstat } = require('fs');
const request = require('request');
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const args = process.argv.slice(2);


request(args[0], (error, response, body) => {
  fs.writeFile(args[1], body, (error) => {
    fs.stat(args[1], function(error, stats) {
      console.log("file saved ", stats.size);
    })
  });
});