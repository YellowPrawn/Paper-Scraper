const getFiles = require('./getFiles.js');
const fs = require('fs');
const main = require('./main.js');

module.exports.amend = function(){//public module which prints a UI header and calls input function
	for(var i = 0; i < getFiles.getTestSize(); i++){//prints data from all categorized data
		const data = getFiles.getTestData(i);
		console.log(`\n\n\n------------\n     ${i}     \n------------\n`);
		console.log(`root file:   ${data.root}\n\ntopic:   ${data.classification}\n\ndifficulty:   ${data.difficulty}\n\nquestion:${data.question}`);
	}
	input();
}

function input(){//function to make amendments to all pieces of data
	const readline = require('readline').createInterface({//instantiate a readline record
		input: process.stdin,
		output: process.stdout
	})
	readline.question('\n\n\nInput number to amend\n',
		(i) => {
			readline.question('Input item to amend (classification (topic), difficulty, question)\n',
				(item) => {
					readline.question('Input amendment\n',
						(amendment) => {
							const data = getFiles.getTestData(i);
							switch(item){//switch to determine element to amend
								case "classification":
									var jsonData = {"classification": `${amendment}`,"question": `${data.question}`,"root": `${data.root}`,"difficulty": `${data.difficulty}`};
								    jsonContent = JSON.stringify(jsonData);

									fs.writeFile(`./papers/test/test_${i}.json`, jsonContent, 'utf8', function (err) {
								  		if (err) throw err;
									});	
									break;

								case "topic":
									var jsonData = {"classification": `${amendment}`,"question": `${data.question}`,"root": `${data.root}`,"difficulty": `${data.difficulty}`};
								    jsonContent = JSON.stringify(jsonData);

									fs.writeFile(`./papers/test/test_${i}.json`, jsonContent, 'utf8', function (err) {
								  		if (err) throw err;
									});	
									break;

								case "difficulty":
									var jsonData = {"classification": `${data.classification}`,"question": `${data.question}`,"root": `${data.root}`,"difficulty": `${amendment}`};
								    jsonContent = JSON.stringify(jsonData);

									fs.writeFile(`./papers/test/test_${i}.json`, jsonContent, 'utf8', function (err) {
								  		if (err) throw err;
									});	
									break;
								case "question":
									var jsonData = {"classification": `${data.classification}`,"question": `${amendment}`,"root": `${data.root}`,"difficulty": `${data.difficulty}`};
								    jsonContent = JSON.stringify(jsonData);

									fs.writeFile(`./papers/test/test_${i}.json`, jsonContent, 'utf8', function (err) {
								  		if (err) throw err;
									});	
									break;
							}
							readline.question('Make additional amendments? (Y/N)\n',//if user requires further edits, make a recursive call
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
			);
		}
	);
}