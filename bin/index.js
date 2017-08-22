#!/usr/bin/env node

const program = require('commander');
const chalk   = require('chalk');
chalk.red('you ordered a pizza with:');
program
    .version('0.1.0')
    .option('-p, --peppers', 'Add peppers')
    .option('-P, --pineapple', 'Add pineapple')
    .option('-b, --bbq-sauce', 'Add bbq sauce')
    .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
    .parse(process.argv);

chalk.red('you ordered a pizza with:');

if (program.peppers) chalk.blue('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbqSauce) console.log('  - bbq');

chalk.red('  - %s cheese', program.cheese);