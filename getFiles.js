const fs = require('fs');

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

module.exports.getDataSize = function(){//get size of actual data
	const data = fs.readFileSync('./papers/dataSize.txt','utf8');
	return data;
}

module.exports.setDataSize = function(i){//set size of actual data
	fs.writeFile('./papers/dataSize.txt', i, 'utf8', function (err) {
  		if (err) throw err;
	});
}

module.exports.getData = function(fileName, i){//get actual data
	const data = fs.readFileSync(`./papers/${fileName}_Q${i}.txt`,'utf8'); 
	return data;
	
}