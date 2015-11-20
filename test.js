import path from 'path';
import test from 'ava';
import {test as helpers} from 'yeoman-generator';
import assert from 'yeoman-assert';
import pify from 'pify';

let generator;

test.beforeEach(async t => {
	await pify(helpers.testDirectory)(path.join(__dirname, 'temp'));
	generator = helpers.createGenerator('nm:app', ['../app'], null, {skipInstall: true});
});

test.serial('generates expected files', async t => {
	helpers.mockPrompt(generator, {
		moduleName: 'test',
		githubUsername: 'test',
		website: 'test.com',
		cli: false
	});

	await pify(generator.run.bind(generator))();

	assert.file([
		'.editorconfig',
		'.gitattributes',
		'.gitignore',
		'.git',
		'.travis.yml',
		'index.js',
		'license',
		'package.json',
		'readme.md',
		'test.js'
	]);

	assert.noFile('cli.js');
});

test.serial('CLI option', async t => {
	helpers.mockPrompt(generator, {
		moduleName: 'test',
		githubUsername: 'test',
		website: 'test.com',
		cli: true
	});

	await pify(generator.run.bind(generator))();

	assert.file('cli.js');
	assert.fileContent('package.json', /"bin":/);
	assert.fileContent('package.json', /"bin": "cli.js"/);
	assert.fileContent('package.json', /"meow"/);
});
