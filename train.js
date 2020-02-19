const scraper = require('./scraper.js');
const sortData = require('./sortData.js');
const getFiles = require('./getFiles.js');
const main = require('./main.js');

module.exports.convert = function() {
	const readline = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout
	})

	readline.question(`Input file name\n`,
		(fileName) => {
			parse(fileName);
			readline.question('Train more data? (Y/N)\n',
				(additional) => {
					if(additional=="Y"){
						readline.close();
						input();
					} else {
						readline.close();
						main.main();
					}
				}
			);	
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
	try {
	  	if(await scrape(fileName)){
			const sentences = [];	

		  	for(var i = 0; i < getFiles.getDataSize(); i++){
		  		sentences[i] = getFiles.getData(fileName,i);
		  	}
		  	const item = sortData.sort(sentences,fileName);
	  	}
	} catch (e) {
		parse(fileName);
	}
}