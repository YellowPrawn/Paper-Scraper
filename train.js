const scraper = require('./scraper.js');
const sortData = require('./sortData.js');
const getFiles = require('./getFiles.js');

<<<<<<< HEAD
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
=======
const fileName = 'M154COMSCHP1ENGTZ0XX';//TODO: change to function parameter

const data = scraper.convert(fileName);
const sentences = [];
for(var i = 0; i < getFiles.getDataSize(); i++){
	sentences[i] = getFiles.getData(fileName,i);
}//DO NOT INCLUDE THIS CHUNK IN OFFICIAL IA
>>>>>>> fb79728e47d15b965c2331616ae478b809df49d9

async function parse(fileName) {
  	if(await scrape(fileName)){
		const sentences = [];
	  	for(var i = 0; i < getFiles.getDataSize(); i++){
	  		sentences[i] = getFiles.getData(fileName,i);
	  	}
	  	const item = sortData.sort(sentences,fileName);
  	}
}