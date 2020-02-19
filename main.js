const create = require('./create.js');
const train = require('./train.js');
const amend = require('./amend.js');
start();

function start(){
	const readline = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout
	})

	readline.question(`Please input mode \n Create test (C) \n Amend categorization (A) \n Train model (T)\n`,
		(mode) => {
			switch(mode){
				case "C":
					console.log("creating test...");
					create.create();
				case "A":
					console.log("retrieving test data...");
					amend.amend();
				case "T":
					console.log("training model...");
					train.convert();
				default:
					console.log(`invalid choice: ${mode} entered`);
			}
			readline.question('Make additional amendments? (Y/N)\n',
				(additional) => {
					if(additional=="Y"){
						readline.close();
						start();
					} else {
						readline.close();
					}
				}
			);	
		}
	);
}
start();

module.exports.main = function(){
	start();
}

function start(){

	const readline = require('readline').createInterface({//calls readline for console input
		input: process.stdin,
		output: process.stdout
	})

	readline.question(`Please input mode: \n - Create test (C) \n - Amend categorization (A) \n - Train model (T)\n`,
		(mode) => {
			switch(mode){
				case "C":
					readline.close();
					create.create();
					break;
				case "A":
					readline.close();
					amend.amend();

					break;
				case "T":
					readline.close();
					train.convert();
					break;
				default:
					console.log(`invalid choice: ${mode} entered`);
					readline.close();
					break;
			}
		}
	);
}
