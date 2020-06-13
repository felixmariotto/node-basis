#!/usr/bin/env node

const chalk = require('chalk');
const path = require('path');
const execFile = require('child_process').execFile;

let args = process.argv;
args.splice( 0, 2 );

const exePath = path.join(__dirname, 'basisu.exe');

console.log( chalk.green( 'basisu executing with arguments ' + args.join(' ') ) )

execFile( exePath, args, { cwd: process.cwd() }, function( err, data ) {

	console.log( err )

	console.log( data.toString() );

});
