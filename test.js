'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-assert');

describe('generator', function () {
	beforeEach(function (cb) {
		var deps = ['../app'];

		helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
			if (err) {
				cb(err);
				return;
			}

			this.generator = helpers.createGenerator('nm:app', deps, null, {skipInstall: true});
			cb();
		}.bind(this));
	});

	it('generates expected files', function (cb) {
		var expected = [
			'.editorconfig',
			'.gitattributes',
			'.gitignore',
			'.jshintrc',
			'.travis.yml',
			'index.js',
			'license',
			'package.json',
			'readme.md',
			'test.js'
		];

		helpers.mockPrompt(this.generator, {
			moduleName: 'test',
			githubUsername: 'test',
			website: 'test.com',
			cli: false
		});

		this.generator.run(function () {
			assert.file(expected);
			cb();
		});
	});

	it('CLI option', function (cb) {
		helpers.mockPrompt(this.generator, {
			moduleName: 'test',
			githubUsername: 'test',
			website: 'test.com',
			cli: true
		});

		this.generator.run(function () {
			assert.file('cli.js');
			assert.fileContent('package.json', /"bin":/);
			assert.fileContent('package.json', /"bin": "cli.js"/);
			assert.fileContent('package.json', /"meow"/);
			cb();
		});
	});
});
