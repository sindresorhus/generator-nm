'use strict';
const _s = require('underscore.string');
const isScoped = require('is-scoped');

exports.repoName = name => isScoped(name) ? name.split('/')[1] : name;
exports.slugifyPackageName = name => isScoped(name) ? name : _s.slugify(name);
