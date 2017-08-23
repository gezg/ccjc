#!/usr/bin/env node

const program = require('commander');
const chalk   = require('chalk');


program
    .version('1.0.0')
    .option('-u, --users', '查看前端所有用户')
    .option('-l, --list', '查看前端所有产品')
    .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
    .parse(process.argv);



if (program.users){
	console.log('  ');
	console.log(' 您查看了用户 ');
}
if (program.list){
	console.log('  ');
	console.log('您查看了产品');
}


if(program.cheese == 'marble'){

	console.log('  ');
	console.log('  ');
	console.log('    ````````         ``');
	console.log('    ````````       ``');
	console.log('       ``        ``');
	console.log('       ``       ``');
	console.log('       ``      ``');
	console.log('       ``      ``');
	console.log('       ``      ``');
	console.log('       ``       ``');
	console.log('       ``        ``');
	console.log('  ``   ``         ``');
	console.log('  ```````           ``');

}else{
	console.log('  - %s cheese', program.cheese);
}


