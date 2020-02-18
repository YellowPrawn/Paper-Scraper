const getFiles = require('./getFiles.js');
const fs = require('fs');
const main = require('./main.js');

module.exports.amend = function(){
	for(var i = 0; i < getFiles.getTestSize(); i++){
		const data = getFiles.getTestData(i);
		console.log(`\n\n\n------------\n     ${i}     \n------------\n`);
		console.log(`root file:   ${data.root}\n\ntopic:   ${data.classification}\n\ndifficulty:   ${data.difficulty}\n\nquestion:${data.question}`);
	}
	input();
}

function input(){
	const readline = require('readline').createInterface({
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
							switch(item){
								case "classification":
									var jsonData = 
								    {
								    	"classification": `${amendment}`,//classifying data
										"question": `${data.question}`,
										"root": `${data.root}`,
										"difficulty": `${data.difficulty}`//classifying difficulty
									};
								    jsonContent = JSON.stringify(jsonData);

									fs.writeFile(`./papers/test/test_${i}.json`, jsonContent, 'utf8', function (err) {
								  		if (err) throw err;
									});	
									break;

								case "topic":
									var jsonData = 
								    {
								    	"classification": `${amendment}`,//classifying data
										"question": `${data.question}`,
										"root": `${data.root}`,
										"difficulty": `${data.difficulty}`//classifying difficulty
									};
								    jsonContent = JSON.stringify(jsonData);

									fs.writeFile(`./papers/test/test_${i}.json`, jsonContent, 'utf8', function (err) {
								  		if (err) throw err;
									});	
									break;

								case "difficulty":
									var jsonData = 
								    {
								    	"classification": `${data.classification}`,//classifying data
										"question": `${data.question}`,
										"root": `${data.root}`,
										"difficulty": `${amendment}`//classifying difficulty
									};
								    jsonContent = JSON.stringify(jsonData);

									fs.writeFile(`./papers/test/test_${i}.json`, jsonContent, 'utf8', function (err) {
								  		if (err) throw err;
									});	
									break;
								case "question":
									var jsonData = 
								    {
								    	"classification": `${data.classification}`,//classifying data
										"question": `${amendment}`,
										"root": `${data.root}`,
										"difficulty": `${data.difficulty}`//classifying difficulty
									};
								    jsonContent = JSON.stringify(jsonData);

									fs.writeFile(`./papers/test/test_${i}.json`, jsonContent, 'utf8', function (err) {
								  		if (err) throw err;
									});	
									break;
							}
							readline.question('Make additional amendments? (Y/N)\n',
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