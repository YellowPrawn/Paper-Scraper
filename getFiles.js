const fs = require('fs');
const scraper = require('./scraper.js');

module.exports.setTestSize = function(){//get size of test data
	var i = 0;
	while(true){
		try{
			var test = fs.readFileSync(`./papers/test/test_${i}.json`);
			i++;
		}
		catch (e){
			i--;
			break;
		}
	}
	fs.writeFile('./papers/testSize.txt', i, 'utf8', function (err) {
  		if (err) throw err;
	});
}

module.exports.getTestSize = function(){//get size of actual data
	const data = fs.readFileSync('./papers/testSize.txt','utf8');
	return data;
}

module.exports.getTestData = function(i){
	var contents = fs.readFileSync(`./papers/test/test_${i}.json`, 'utf8');
	var jsonContent = JSON.parse(contents);
	return jsonContent;
}

module.exports.getDataSize = function(fileName){//get size of actual data
	data = scraper.getDataSize(fileName);
	return data;
}

module.exports.setDataSize = function(i){//set size of actual data
	fs.writeFileSync('./papers/dataSize.txt', i, 'utf8', function (err) {
  		if (err) throw err;
	});
}

module.exports.getData = function(fileName, i){//get actual data
	const data = fs.readFileSync(`./papers/${fileName}_Q${i}.txt`,'utf8'); 
	return data;
}