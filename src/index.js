#! /usr/bin/env node

var program = require('commander');
var chalk = require('chalk');
var { createComponentBundle } = require('./component');

function error(message) {
    let shellOptions = '\n\n' + 'Shell options:'
        + '\n' + '  c creates a component bundle'
        + '\n' + chalk.bold.green('    ex: rtcli c Form')
        + '\n' + '  p creates a page bundle'
        + '\n' + chalk.bold.green('    ex: rtcli p Home')
        + '\n' + '  r creates a redux bundle'
        + '\n' + chalk.bold.green('    ex: rtcli r GetData');

    let operationAborted = '\n\n' + 'Operation aborted' + '\n';
    console.error('\n' + chalk.bold.blue(message) + chalk.yellow(shellOptions) + chalk.bold.red(operationAborted));
}

function runProgram() {
    
    program
        .action(function () {
            var action = program.args[0];
            var fileName = (program.args[1] && typeof(program.args[1]) === 'string') ? program.args[1] : "";
            var directory = (program.args[2] && typeof(program.args[2]) === 'string'  ) ? program.args[2] : "";
            console.log(directory);            
            switch (program.args[0]) {
                case 'c':
                    createComponentBundle(fileName, directory);
                    break;
                case 'p':
                    error('Sorry, this feature isn\'t supported yet');
                    break;
                case 'r':
                    error('Sorry, this feature isn\'t supported yet');
                    break;
                default:
                    error('Please specify an action');
            }
        })
        .parse(process.argv);

}

runProgram();