const _s = require('underscore.string');

const scopedRegex = /^(?:@([^/]+?)[/])?([^/]+?)$/;

exports.isScoped = name => {
	return scopedRegex.test(name);
};
exports.repoName = name => {
	if (exports.isScoped(name)) {
		return name.match(scopedRegex)[2];
	}
	return name;
};
exports.slugify = name => {
	if (exports.isScoped(name)) {
		return name;
	}
	return _s.slugify(name);
};
