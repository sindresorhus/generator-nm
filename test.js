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
			website: 'test.com'
		});

		this.generator.run(function () {
			assert.file(expected);
			cb();
		});
	});

	it('generates eslint config if set linter to eslint', function (cb) {
		var expected = [
			'.eslintrc'
		];

		helpers.mockPrompt(this.generator, {
			moduleName: 'test',
			githubUsername: 'test',
			website: 'test.com',
			linter: 'eslint'
		});

		this.generator.run(function () {
			assert.file(expected);
			cb();
		});
	});
});
