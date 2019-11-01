var bayes = require('bayes')
var classifier = bayes()
const getFiles = require(`./getFiles.js`);

module.exports.sort = function(sentences){
	
	for(var i = 0; i < getFile.getTestSize(); i++){//learning functions
		fs.readFile(`./papers/test_${i}.txt`, function(err, data){
			data.split(\n<^>);//append this to the end of every test file (unique identifier)
			classifier.learn(data[0],data[1]);
		}
	}

	for(var i =0; i < sentences.length; i++){
		console.log(classifier.categorize(sentences))
	}

	getFile.updateTestSize();
}	