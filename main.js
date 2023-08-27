#!/usr/bin/env node
 
const config = require('config')
const program = require('commander');
const logger = require('./log')
const tunneler = require('./tunneler')

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
    logger.info(`Strating ntunnel app [${config.get('appname')}] with ${process.env.NODE_ENV} ......`);
    parseCmdArgs();
    tunneler.start();
}

main()