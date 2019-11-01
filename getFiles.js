const fs = require('fs');

module.exports.getTestSize = function(){
	var elements
	fs.readFile('./papers/size.txt', function(err, data){
		var elements = data.split(\n);
		elements[1] += elements[0];
		fs.writeFile('./papers/size.txt', elements, function (err) {
  			if (err) throw err;
		});
		return elements[1];
	}
}

module.exports.updateTestSize = function(){
	fs.readFile('./papers/size.txt', function(err, data){
		var elements = data.split(\n);
		elements[1] += elements[0];
		fs.writeFile('./papers/size.txt', elements, function (err) {
  			if (err) throw err;
		});
	}
}

module.exports.setSortSize = function(i){
	fs.readFile('./papers/size.txt', function(err, data){
		var elements = data.split(\n);
		elements[0] = i;
		fs.writeFile('./papers/size.txt', elements, function (err) {
  			if (err) throw err;
		});
	}
}