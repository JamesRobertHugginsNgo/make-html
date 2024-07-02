import mergeValues from '../make-ui/merge-values.js';

export function mergeFunctionValues(value1, value2, options = {}) {
	const { key } = options;
	if (key !== 'setModel') {
		return;
	}

	if (typeof value1 === 'function' && typeof value2 === 'function') {
		return {
			merged: true,
			value: function(...args) {
				value1.call(this, ...args);
				value2.call(this, ...args);
			}
		}
	}
}

export default function makeformMergeValues(value1, value2, mergeOptions = {}) {
	const { mergeFunctions = [] } = mergeOptions;
	if (mergeFunctions.indexOf(mergeFunctionValues) === -1) {
		mergeFunctions.push(mergeFunctionValues);
	}
	return mergeValues(value1, value2, { ...mergeOptions, mergeFunctions });
}
