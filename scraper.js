const fs = require('fs');
const pdf = require('pdf-parse');

var sortedData;

module.exports.convert = function(fileName){
    let dataBuffer = fs.readFileSync(`./papers/${fileName}.pdf`);

    pdf(dataBuffer).then(function(data) {
       	sortedData = [data.text];

        var temp;

        var i = 1;
        while(true){
        	const num = `\n${i.toString()}.`;
        	if (sortedData[sortedData.length-1].includes(num)){
        		temp = sortedData[sortedData.length-1].split(num);
        		sortedData.pop();
        		sortedData.push("\n"+temp[0]);
        		sortedData.push("\n"+temp[1]);
        	} else{
        		fs.writeFile(`./papers/${fileName}.txt`, sortedData, function (err) {
        			if (err) throw err;
        		});
        		
        		break;
        	}
        	i++;
        }
    });
}

