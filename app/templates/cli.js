#!/usr/bin/env node
import meow from 'meow';
import <%= camelModuleName %> from './index.js';

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
`, {
	flags: {
		foo: {
			type: 'boolean'
		}
	}
});

console.log(<%= camelModuleName %>(cli.input[0] || 'unicorns'));
