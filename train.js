const scraper = require('./scraper.js');
const sortData = require('./sortData.js');
const getFiles = require('./getFiles.js');

module.exports.convert = function() {
	const readline = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout
	})

	readline.question(`Input file name\n`,
		(fileName) => {
			parse(fileName);
		}
	);	
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