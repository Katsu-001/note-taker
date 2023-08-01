const fs = require('fs');
const util = require('util');
const readFromFile = util.promisify(fs.readFile);
/**
 function to write to json given destination and content
  @param {string} destination
  @param {object} content
 */
const writeToFile = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
        err ? console.error(err) : console.info(`\nData written to ${destination}`)
    );
/**
  read data given destination, then append it to file
  @param {object} content
  @param {string} file

 */
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData);
        }
    });
};

module.exports = { readFromFile, writeToFile, readAndAppend };