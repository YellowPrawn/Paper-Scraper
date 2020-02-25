const fs = require('fs');
const getFiles = require(`./getFiles.js`);

var sortedData;

module.exports.convert = function(fileName){//public module to split raw data into individual questions
    let data = fs.readFileSync(`./papers/${fileName}.txt`);
    sortedData = [data.toString()];
    var temp;
    var i = 1;

    while(true){//split everytime a question identifier is found
        const num = [`${i.toString()}. `,`${i.toString()}) `];//an array of common question identifiers
        if (sortedData[sortedData.length-1].includes(num[0])){//split by n. where n is the question number
            temp = sortedData[sortedData.length-1].split(num[0]);
            sortedData.pop();
            sortedData.push(temp[0]);
            sortedData.push(temp[1]);
        } else if (sortedData[sortedData.length-1].includes(num[1])){//split by n) where n is the question number
            temp = sortedData[sortedData.length-1].split(num[1]);
            sortedData.pop();
            sortedData.push(temp[0]);
            sortedData.push(temp[1]);   
        } else{
            break;
        }
        i++;
    }
    for(var i = 0; i<sortedData.length;i++){ //writing questions into file
        for(var i = 0; i<sortedData.length;i++){ //writing questions into file
        fs.writeFileSync(`./papers/${fileName}_Q${i}.txt`, sortedData[i]);
    }
    }
    getFiles.setDataSize(sortedData.length); //amount of data which needs to be sorted
}

module.exports.getDataSize = function(fileName){//public module to get data size
    let data = fs.readFileSync(`./papers/${fileName}.txt`);
    sortedData = [data.toString()];
    var temp;
    var i = 1;

    while(true){//split everytime a question identifier is found
        const num = [`${i.toString()}. `,`${i.toString()}) `];//an array of common question identifiers
        if (sortedData[sortedData.length-1].includes(num[0])){//split by n. where n is the question number
            temp = sortedData[sortedData.length-1].split(num[0]);
            sortedData.pop();
            sortedData.push(temp[0]);
            sortedData.push(temp[1]);
        } else if (sortedData[sortedData.length-1].includes(num[1])){//split by n) where n is the question number
            temp = sortedData[sortedData.length-1].split(num[1]);
            sortedData.pop();
            sortedData.push(temp[0]);
            sortedData.push(temp[1]);   
        } else{
            break;
        }
        i++;
    }
    return(sortedData.length);
}