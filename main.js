const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
})

readline.question(`Please input mode \n Create test (C) \n Ammend categorization (A) \n Retrieve question origins (O)\n`,
	(mode) => {
		if (mode == "C"){
			console.log("creating test...");	
		} else if (mode == "A"){
			console.log("retrieving test data...");
		} else if (mode == "O"){
			console.log("retrieving question origins...");
		} else {
			console.log(`invalid choice (${mode})`);
		}
	}
);