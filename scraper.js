const fs = require('fs');
const pdf = require('pdf-parse');
const getFiles = require(`./getFiles.js`);

var sortedData;

module.exports.convert = function(fileName){
    let dataBuffer = fs.readFileSync(`./papers/${fileName}.pdf`);

    pdf(dataBuffer).then(function(data) {
       	sortedData = [data.text];

        var temp;

        var i = 1;
        while(true){
        	const num = `\n${i.toString()}.`;//sorting the data by question number
        	if (sortedData[sortedData.length-1].includes(num)){
        		temp = sortedData[sortedData.length-1].split(num);
        		sortedData.pop();
        		sortedData.push("\n"+temp[0]);
        		sortedData.push("\n"+temp[1]);
        	} else{
                break;
        	}
        	i++;
        }
        for(var i = 0; i<sortedData.length;i++){ //writing questions into file
            fs.writeFile(`./papers/${fileName}_Q${i}.txt`, sortedData[i], function (err) {
                if (err) throw err;
            });
        }
        getFiles.setSortSize(sortedData.length); //amount of data which needs to be sorted
    });
}

