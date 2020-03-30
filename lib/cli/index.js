/**
* Copyright © 2019 contains code contributed by Orange SA, authors: Denis Barbaron - Licensed under the Apache license 2.0
**/

var yargs = require('yargs')
var Promise = require('bluebird')

Promise.longStackTraces()

var _argv = yargs.usage('Usage: $0 <command> [options]')
  .strict()
  .command(require('./device'))
  .command(require('./provider'))
  .demandCommand(1, 'Must provide a valid command.')
  .help('h', 'Show help.')
  .alias('h', 'help')
  .argv
