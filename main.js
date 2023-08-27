#!/usr/bin/env node
 
/**
 * Module dependencies.
 */
 
const program = require('commander');

var logger = require('./log')

function parseCmdArgs(){
    program
        .version('0.0.1')
        .option('-p, --peppers', 'Add peppers')
        .option('-P, --pineapple', 'Add pineapple')
        .option('-b, --bbq', 'Add bbq sauce')
        .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
        .parse(process.argv);
}

function main(){
    logger.info("Strating ntunnel ......");
    parseCmdArgs();
}

main()