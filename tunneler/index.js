#!/usr/bin/env node

const logger = require('../log')
const config = require('config')

class Tunneler {
    constructor(){

    }

    start() {
        logger.info(`Starting tunnel server at [${config.get('server.host')}:${config.get('server.listen')}]`);
    }
}

module.exports = new Tunneler();