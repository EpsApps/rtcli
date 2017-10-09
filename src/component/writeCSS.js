var fs = require('fs');

function writeCSS(filePath, fileName) {

    let decapitalizedFileName = fileName.charAt(0).toLowerCase() + fileName.slice(1);

    let data = "";
    data += "." + decapitalizedFileName + " {\n";
    data += "}\n";   

    fs.writeFile(filePath + '.css', data, 'utf8', function (err) {
        if (err) return console.log(err);
    });

}

module.exports = {
    writeCSS
};