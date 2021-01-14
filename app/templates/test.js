import test from 'ava';
import <%= camelModuleName %> from './index.js';

test('title', t => {
	t.throws(() => {
		<%= camelModuleName %>(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number'
	});

	t.is(<%= camelModuleName %>('unicorns'), 'unicorns & rainbows');
});
