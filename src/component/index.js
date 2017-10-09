var path = require('path');
var fs = require('fs');
var chalk = require('chalk');
var { writeComponent } = require('./writeComponent');
var { writeTests } = require('./writeTests');
var { writeCSS } = require('./writeCSS');

function error(message) {
    let shellOptions = '\n\n' + 'Shell options:'
        + '\n' + '  -n (required) specify the component\s name'
        + '\n' + '  -d specify the component\s directory'
        + '\n' + '      components without a specified directory'
        + '\n' + '      will default to src/components';

    let operationAborted = '\n\n' + 'Operation aborted' + '\n';
    console.error(message + shellOptions + operationAborted);
}

function error(message) {
    let shellOptions = '\n\n' + 'Shell options:'
        + '\n' + '  Specify a name'
        + '\n' + chalk.bold.green('    ex: rtcli c Form')

        + '\n' + '  Specify a name and directory'
        + '\n' + chalk.bold.green('    ex: rtcli c Form pages/Home/components/Form');

    let operationAborted = '\n\n' + 'Operation aborted' + '\n\n';
    console.error('\n' + chalk.bold.blue(message) + chalk.yellow(shellOptions) + chalk.bold.red(operationAborted));
}

function ensureDirectoryExistence(filePath) {
    var dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
}

function createComponentBundle(fileName, directory) {

    if (!fileName) {
        error('Error: please specify a name for the component bundle');
        return;
    }

    if (!directory) {
        directory = 'components/' + fileName;
    }

    var filePath = './src/' + directory + '/' + fileName;
    ensureDirectoryExistence(filePath);

    let existingFileNames = [];
    if (fs.existsSync(filePath + '.tsx')) existingFileNames.push('  ' + fileName + '.tsx');
    if (fs.existsSync(filePath + '.test.tsx')) existingFileNames.push('  ' + fileName + '.test.tsx');
    if (fs.existsSync(filePath + '.css')) existingFileNames.push('  ' + fileName + '.css');

    if (existingFileNames.length > 0) {
        let errorString = 'Error: the following file(s) already exist...';
        existingFileNames.forEach(function (fileName) {
            errorString += '\n' + fileName;
        });
        error(errorString);
        return;
    }

    writeComponent(filePath, fileName);
    writeTests(filePath, fileName);
    writeCSS(filePath, fileName);

}

module.exports = {
    createComponentBundle
}

