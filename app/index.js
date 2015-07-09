'use strict';
var superb = require('superb');
var normalizeUrl = require('normalize-url');
var humanizeUrl = require('humanize-url');
var yeoman = require('yeoman-generator');
var _s = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
	init: function () {
		var cb = this.async();

		this.prompt([{
			name: 'moduleName',
			message: 'What do you want to name your module?',
			default: this.appname.replace(/\s/g, '-'),
			filter: function (val) {
				return _s.slugify(val);
			}
		}, {
			name: 'moduleDescription',
			message: 'What is your module description?'
		}, {
			name: 'githubUsername',
			message: 'What is your GitHub username?',
			store: true,
			validate: function (val) {
				return val.length > 0 ? true : 'You have to provide a username';
			}
		}, {
			name: 'website',
			message: 'What is the URL of your website?',
			store: true,
			validate: function (val) {
				return val.length > 0 ? true : 'You have to provide a website URL';
			},
			filter: function (val) {
				return normalizeUrl(val);
			}
		}, {
			name: 'cli',
			message: 'Do you need a CLI?',
			type: 'confirm',
			default: false
		}], function (props) {
			var tpl = {
				moduleName: props.moduleName,
				moduleDescription: props.moduleDescription,
				camelModuleName: _s.camelize(props.moduleName),
				githubUsername: props.githubUsername,
				name: this.user.git.name(),
				email: this.user.git.email(),
				website: props.website,
				humanizedWebsite: humanizeUrl(props.website),
				superb: superb(),
				cli: props.cli
			};

			var mv = function (from, to) {
				this.fs.move(this.destinationPath(from), this.destinationPath(to));
			}.bind(this);

			this.fs.copyTpl([
				this.templatePath() + '/**',
				'!**/cli.js'
			], this.destinationPath(), tpl);

			if (props.cli) {
				this.fs.copyTpl(this.templatePath('cli.js'), this.destinationPath('cli.js'), tpl);
			}

			mv('editorconfig', '.editorconfig');
			mv('gitattributes', '.gitattributes');
			mv('gitignore', '.gitignore');
			mv('jshintrc', '.jshintrc');
			mv('travis.yml', '.travis.yml');
			mv('_package.json', 'package.json');

			cb();
		}.bind(this));
	},
	install: function () {
		this.installDependencies({bower: false});
	}
});
