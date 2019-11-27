const create = require('./create.js');
const train = require('./train.js');
const amend = require('./amend.js');

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
})

readline.question(`Please input mode \n Create test (C) \n Amend categorization (A) \n Train model (T)\n`,
	(mode) => {
		if (mode == "C"){
			console.log("creating test...");
			create.create();
		} else if (mode == "A"){
			console.log("retrieving test data...");
			amend.amend();
		} else if (mode == "T"){
			console.log("training model...");
			train.convert();
		} else {
			console.log(`invalid choice: ${mode} entered`);
		}
		readline.close();
	}
);