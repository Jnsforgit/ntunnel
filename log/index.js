#!/usr/bin/env node

var path = require("path");
const log4js = require('log4js');

var output_type = 'dateFile';

if ("development" === process.env.NODE_ENV) {
    output_type = 'console';
}

log4js.configure({
    replaceConsole: true,
    appenders: {
        ntunnel: {
            type: output_type,
            filename: 'appdata/logs/ntunnel',
            pattern: "yyyy-MM-dd.log",
            alwaysIncludePattern: true,
            category: 'normal'
        }
    },
    categories: { default: { appenders: ['ntunnel'], level: 'info' } }
});

const logger = log4js.getLogger('ntunnel');

module.exports = logger