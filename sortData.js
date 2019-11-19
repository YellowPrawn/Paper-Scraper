var bayes = require('bayes');
var classifier = bayes();
const getFiles = require(`./getFiles.js`);
const fs = require('fs');

module.exports.sort = function(sentences, fileName){
	for(var i = 0; i < getFiles.getTestSize(); i++){//learning functions
		var contents = fs.readFileSync(`./papers/test/test_${i}.json`, 'utf8');
		var jsonContent = JSON.parse(contents);
		
		classifier.learn(jsonContent.question,jsonContent.classification);
	}
	
	for(var i = 0; i < getFiles.getDataSize(); i++){//classifying data using AI
		console.log(classifier.categorize(sentences[i]));//TODO: cleanup or remove chunk
	}

	for(var i = 0; i < getFiles.getDataSize(); i++){//adding new data into test set
			var jsonData = 
		    {
		    	"classification": `${classifier.categorize(sentences[i])}`,
				"question": `${sentences[i]}`,
				"root": `${fileName}`
			};
		    jsonContent = JSON.stringify(jsonData);

			fs.writeFile(`./papers/test/test_${i+parseInt(getFiles.getTestSize())}.json`, jsonContent, 'utf8', function (err) {
		  		if (err) throw err;
			});	
	}
	getFiles.setTestSize();
}	