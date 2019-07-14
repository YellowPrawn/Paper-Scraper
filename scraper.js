const fs = require('fs');
const pdf = require('pdf-parse');

module.exports convert = function(fileName){
    let dataBuffer = fs.readFileSync(`././papers/${fileName}.pdf`);

    pdf(dataBuffer).then(function(data) {
        fs.writeFile(`././papers/${fileName}.txt`, data.text, function (err) {
            if (err) throw err;
        }
        );     
    });
}