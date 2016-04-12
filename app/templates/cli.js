#!/usr/bin/env node
<% if (babel) { %>
import meow from 'meow';
import <%= camelModuleName %> from './';

const cli = meow([<% } else { %>'use strict';
var meow = require('meow');
var <%= camelModuleName %> = require('./');

var cli = meow([<% } %>
	'Usage',
	'  $ <%= moduleName %> [input]',
	'',
	'Options',
	'  --foo  Lorem ipsum. [Default: false]',
	'',
	'Examples',
	'  $ <%= moduleName %>',
	'  unicorns & rainbows',
	'  $ <%= moduleName %> ponies',
	'  ponies & rainbows'
]);

console.log(<%= camelModuleName %>(cli.input[0] || 'unicorns'));
