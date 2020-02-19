const getFiles = require(`./getFiles.js`);
const officegen = require('officegen');
const fs = require('fs');
const main = require('./main.js');

module.exports.create = function(){ //calls readline for console input
	const readline = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout
	})
	readline.question(`Input topic(s) (seperate the values by comma)\n`,
		(topic) => {
			readline.question(`Input paper length (number of questions)\n`,
				(num) => {
					readline.question(`Input ratio of topics (between 0 and 1, seperate the values by comma)\n`,
						(ratios) => {
							readline.question(`Input difficulty of questions (easy, medium, hard). If you want an authentic paper, input nothing\n`,
								(difficulty) => {
									var topics = topic.split(",");
									var ratio = ratios.split(",");
									var questions = [];
									var balTemp = false;
									for(var i = 0; i < getFiles.getTestSize(); i++){//check difficulty for each question
										data = getFiles.getTestData(i);
										if(difficulty=="easy" && data.difficulty=="easy"){ 
											questions.push(data);
										} else if(difficulty=="medium" && data.difficulty=="medium"){
											questions.push(data);
										} else if (difficulty=="hard" && data.difficulty=="hard"){
											questions.push(data);
										} else if (difficulty==""){ //"authentic" difficulty creator
											questions.push(data);
											balTemp = true;
										}
									}
									compile(balance(questions, ratio, topics, balTemp, num)); //calls compile() function
									readline.close();
									main.main();
								}
							);
						}
					);
				}
			);
		}
	);
}

function balance(questions, ratio, topic, balTemp, num){//returns appropriate number of questions
	var final = [];
	var list = [];
	var count = [Number.parseInt(0.4*num,10), Number.parseInt(0.4*num,10), Number.parseInt(0.2*num,10)];

	console.log("\n\n\nQuestion origin files:");

	for(var i = 0; i < ratio.length; i++){
		for(var j = 0; j < questions.length; j++){//obtaining questions matching topic
			if(questions[j].classification==topic[i]){
				list.push(questions[j]);
			}
		}

		if(list.length==0){
			console.log("no questions availiable, try again");
			break;
		}
		while(Number.parseInt(final.length*ratio[i],10) != Number.parseInt(num*ratio[i],10) && list.length > final.length) {
			const add = getRandomInt(list.length);//choose random integer TODO: fix range
			var check = true;
			for(var j = 0; j < final.length; j++){//check if question has been added to final array
				if(list[add].question!=final[j] && balanceCheck(list[add], count, balTemp)){
					check = true;
				}else{
					check = false;
				}
			}
			if(check==true){
				final.push(list[add].question);
				console.log(list[add].root);
			}
		}
	}
	return final;
}

function balanceCheck(data, count, balTemp){
	if(balTemp==true){
		if(count[0] != 0 && data.difficulty=="easy"){
			return true;
		} else if(count[1] != 0 && data.difficulty=="medium"){
			return true;
		} else if (count[2] != 0 && data.difficulty=="hard"){
			return true;
		} else {
			return false;
		}
	} else {
		return true;
	}
}

function compile(final){
	// Create an empty Word object:
	var d = new Date();
	let docx = officegen('docx')

	// Officegen calling this function after finishing to generate the docx document:
	docx.on('finalize', function(written) {
	  console.log('\n\n\nPaper compiled\n\n');
	});

	// Officegen calling this function to report errors:
	docx.on('error', function(err) {
	  console.log(err);
	});

	// Create a new paragraph:
	for(var i = 0; i<final.length;i++){
		let pObj = docx.createP();
		pObj.addText(`${i+1}) \n  ${final[i]}\n\n\n`);
	}
	// Let's generate the Word document into a file:

	let out = fs.createWriteStream(`./files/${d.getFullYear()}_${d.getMonth()+1}_${d.getDate()}_${d.getMinutes()}_paper.docx`);

	out.on('error', function(err) {
	  console.log(err);
	});

	// Async call to generate the output file:
	docx.generate(out);
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

