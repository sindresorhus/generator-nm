#!/usr/bin/env node
'use strict';
var meow = require('meow');
var <%= camelModuleName %> = require('./');

var cli = meow([
	'Usage',
	'  $ <%= repoName %> [input]',
	'',
	'Options',
	'  --foo  Lorem ipsum. [Default: false]',
	'',
	'Examples',
	'  $ <%= repoName %>',
	'  unicorns & rainbows',
	'  $ <%= repoName %> ponies',
	'  ponies & rainbows'
]);

console.log(<%= camelModuleName %>(cli.input[0] || 'unicorns'));
