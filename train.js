const scraper = require('./scraper.js');
const sortData = require('./sortData.js');
const getFiles = require(`./getFiles.js`);

const fileName = 'M154COMSCHP1ENGTZ0XX';//TODO: change to function parameter

const data = scraper.convert(fileName);
const sentences = [];
for(var i = 0; i < getFiles.getDataSize(); i++){
	sentences[i] = getFiles.getData(fileName,i);
}//DO NOT INCLUDE THIS CHUNK IN OFFICIAL IA

const item = sortData.sort(sentences,fileName);