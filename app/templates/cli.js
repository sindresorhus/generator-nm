#!/usr/bin/env node
'use strict';
const meow = require('meow');
const <%= camelModuleName %> = require('.');

const cli = meow(`
	Usage
	  $ <%= repoName %> [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ <%= repoName %>
	  unicorns & rainbows
	  $ <%= repoName %> ponies
	  ponies & rainbows
`);

console.log(<%= camelModuleName %>(cli.input[0] || 'unicorns'));
