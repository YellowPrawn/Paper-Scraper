const scraper = require('./scraper.js');
const sortData = require('./sortData.js');
const getFiles = require('./getFiles.js');
const main = require('./main.js');

module.exports.convert = function() {//public module to convert raw data into trainable data
	const readline = require('readline').createInterface({//instantiates a readline record
		input: process.stdin,
		output: process.stdout
	})

	readline.question(`Input file name\n`,
		(fileName) => {
			parse(fileName);//parses given file
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

function parse(fileName) {
	  	const data = scraper.convert(fileName);//convert the file into individual questions
		const sentences = [];	

		for(var i = 0; i < getFiles.getDataSize(fileName); i++){//parse individual questions through classifier
		  	sentences[i] = getFiles.getData(fileName,i);
		}
		const item = sortData.sort(sentences,fileName);
}