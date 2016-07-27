const _s = require('underscore.string');

const scopedRegex = /^(?:@([^/]+?)[/])?([^/]+?)$/;

function isScoped(name) {
	return scopedRegex.test(name);
}
module.exports = function (name) {
	if (isScoped(name)) {
		return name;
	}
	return _s.slugify(name);
};
