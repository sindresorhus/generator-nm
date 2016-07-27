const _s = require('underscore.string');

const scopedRegex = /^(?:@([^/]+?)[/])?([^/]+?)$/;

exports.isScoped = function (name) {
	return scopedRegex.test(name);
};
exports.repoName = function (name) {
	if (exports.isScoped(name)) {
		return name.match(scopedRegex)[2];
	}
	return name;
};
exports.slugify = function (name) {
	if (exports.isScoped(name)) {
		return name;
	}
	return _s.slugify(name);
};
