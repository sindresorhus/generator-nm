import path from 'path';
import test from 'ava';
import helpers from 'yeoman-test';
import assert from 'yeoman-assert';
import pify from 'pify';

let generator;

test.beforeEach(async () => {
	await pify(helpers.testDirectory)(path.join(__dirname, 'temp'));
	generator = helpers.createGenerator('nm:app', ['../app'], null, {skipInstall: true});
});

test.serial('generates expected files', async () => {
	helpers.mockPrompt(generator, {
		moduleName: 'test',
		githubUsername: 'test',
		website: 'test.com',
		cli: false
	});

	await pify(generator.run.bind(generator))();

	assert.file([
		'.editorconfig',
		'.git',
		'.gitattributes',
		'.gitignore',
		'.travis.yml',
		'index.js',
		'license',
		'package.json',
		'readme.md',
		'test.js'
	]);

	assert.noFile('cli.js');
});

test.serial('CLI option', async () => {
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

test.serial('nyc option', async () => {
	helpers.mockPrompt(generator, {
		moduleName: 'test',
		githubUsername: 'test',
		website: 'test.com',
		cli: false,
		nyc: true,
		coveralls: false
	});

	await pify(generator.run.bind(generator))();

	assert.noFile('cli.js');
	assert.fileContent('.gitignore', /\.nyc_output/);
	assert.fileContent('.gitignore', /coverage/);
	assert.fileContent('package.json', /"xo && nyc ava"/);
	assert.fileContent('package.json', /"nyc": "/);
	assert.noFileContent('package.json', /"coveralls":/);
	assert.noFileContent('package.json', /"lcov"/);
	assert.noFileContent('.travis.yml', /coveralls/);
});

test.serial('coveralls option', async () => {
	helpers.mockPrompt(generator, {
		moduleName: 'test',
		githubUsername: 'test',
		website: 'test.com',
		cli: false,
		nyc: true,
		coveralls: true
	});

	await pify(generator.run.bind(generator))();

	assert.noFile('cli.js');
	assert.fileContent('.gitignore', /\.nyc_output/);
	assert.fileContent('.gitignore', /coverage/);
	assert.fileContent('package.json', /"xo && nyc ava"/);
	assert.fileContent('package.json', /"nyc": "/);
	assert.fileContent('package.json', /"coveralls":/);
	assert.fileContent('package.json', /"lcov"/);
	assert.fileContent('.travis.yml', /coveralls/);
});
