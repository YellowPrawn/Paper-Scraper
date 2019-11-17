const scraper = require('./scraper.js');
const sortData = require('./sortData.js');
const getFiles = require(`./getFiles.js`);

const fileName = 'M154COMSCHP1ENGTZ0XX';

const data = scraper.convert(fileName);

const sentences = [];
for(var i = 0; i < getFiles.getDataSize(); i++){
	sentences[i] = getFiles.getData(fileName,i);
}

const item = sortData.sort(sentences,fileName);