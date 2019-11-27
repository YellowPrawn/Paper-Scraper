const getFiles = require(`./getFiles.js`);


module.exports.create = function(){
	const readline = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout
	})
	readline.question(`Input topic(s) (seperate the values by spaces)\n`,
		(topic) => {
			readline.question(`Input paper length (number of questions)\n`,
				(num) => {
					readline.question(`Input ratio of topics (between 0 and 1)\n`,
						(ratio) => {
							readline.question(`Input difficulty of questions (easy, medium, hard). If you want an authentic paper, input nothing\n`,
								(difficulty) => {
									var topics = topic.split(" ");
									var questions = [];
									var balTemp = false;
									for(var i = 0; i < getFiles.getTestSize(); i++){//check difficulty for each question
										data = getFiles.getTestData(i);
										if(check(topics, data)){ //check if question matches topic requested
											if(difficulty=="easy" && data.difficulty=="easy"){ 
												questions.push(data);
											} else if(difficulty=="medium" && data.difficulty=="medium"){
												questions.push(data);
											} else if (difficulty=="hard" && data.difficulty=="hard"){
												questions.push(data);
											} else if (difficulty==""){ //"authentic" difficulty creator
												balTemp = true;
											} else {
												console.log("error: not a difficulty");
											}
										} 
									}
									console.log(balance(questions, ratio, topics, balTemp, num));//TODO: implement concating data into a PDF file.
									readline.close();
								}
							);
						}
					);
				}
			);
		}
	);
}

function check(topics, data){//check if question matches topic.
	for(var i = 0; i < topics.length; i++){
		if(data == topics[i]){
			return(true);
		} else {
			return(false);
		}
	}
}

function balance(questions, ratio, topics, balTemp, num){//returns appropriate number of questions
	var final = [];
	var count = {0.5*(Number(num),0.2*(Number(num)),0.3*(Number(num))};

	for(var i = 0; i < ratio.length; i++){
		var list = [];
		for(var j = 0; j < questions.length; j++){//obtaining questions matching topic
			if(question[j].classification==topic[i]){
				list.push(question[j].question);
			}
		}
		while(final.length!=num*ratio[i]){
			const add = Math.floor(Math.random() * 10);//choose random integer
			var check = false;
			for(var j = 0; j < final.length; j++){//check if question has been added to final array
				if(list[add]!=final[j] && balanceCheck(list[add].data, count, balance)){
					check = true;
				}
			}
			if(check==true){
				final.push(list[add]);
			}
		}
	}
	return final;
}

function balanceCheck(data, count, balance){
	if(balance==true){
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

function compile(){//TODO: fix thing
	const doc = new PDFDocument;
	doc.pipe(fs.createWriteStream('/path/to/file.pdf')); 
	doc.end();

}