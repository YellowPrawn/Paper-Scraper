var bayes = require('bayes');
var classifier = bayes();
var difficulty = bayes();
const getFiles = require(`./getFiles.js`);
const fs = require('fs');

module.exports.sort = function(sentences, fileName){
	for(var i = 0; i < getFiles.getTestSize(); i++){//learning functions
		data = getFiles.getTestData(i);
		classifier.learn(data.question,data.classification);
		difficulty.learn(data.question,data.difficulty);
	}

	for(var i = 0; i < getFiles.getDataSize(fileName); i++){//adding new data into test set
			console.log(classifier.categorize(sentences[i]));
			console.log(difficulty.categorize(sentences[i]));
			var jsonData = 
		    {
		    	"classification": `${classifier.categorize(sentences[i])}`,//classifying data
				"question": `${sentences[i]}`,
				"root": `${fileName}`,
				"difficulty": `${difficulty.categorize(sentences[i])}`//classifying difficulty
			};
		    jsonContent = JSON.stringify(jsonData);

			fs.writeFile(`./papers/test/test_${i+parseInt(getFiles.getTestSize())}.json`, jsonContent, 'utf8', function (err) {
		  		if (err) throw err;
			});	
	}
	getFiles.setTestSize();
}	