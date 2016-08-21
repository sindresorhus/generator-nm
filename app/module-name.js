const _s = require('underscore.string');

const scopedRegex = /^(?:@([^/]+?)[/])([^/]+?)$/;

exports.isScoped = name => scopedRegex.test(name);
exports.repoName = name => exports.isScoped(name) ? name.match(scopedRegex)[2] : name;
exports.slugify = name => exports.isScoped(name) ? name : _s.slugify(name);
