const scraper = require('./scraper.js');
const sortData = require('./sortData.js');
const getFiles = require('./getFiles.js');

module.exports.convert = function train() {
	const fileName = 'N18TZ0P1HL';
	parse(fileName);	
}

function scrape(fileName) { 
  return new Promise(resolve => {
    const data = scraper.convert(fileName);
    resolve(true);
  });
}

async function parse(fileName) {
  	if(await scrape(fileName)){
		const sentences = [];
	  	for(var i = 0; i < getFiles.getDataSize(); i++){
	  		sentences[i] = getFiles.getData(fileName,i);
	  	}
	  	const item = sortData.sort(sentences,fileName);
  	}
}