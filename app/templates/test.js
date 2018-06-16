import test from 'ava';
import <%= camelModuleName %> from '.';

test('title', t => {
	const err = t.throws(() => {
		<%= camelModuleName %>(123);
	}, TypeError);
	t.is(err.message, 'Expected a string, got number');

	t.is(<%= camelModuleName %>('unicorns'), 'unicorns & rainbows');
});
