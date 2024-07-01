import mergeValues from '../make-ui/merge-values.js';

import mergeFunctionValues from './merge-function-values.js';

export default function makeformMergeValues(value1, value2, mergeOptions = {}) {
	const { mergeFunctions = [] } = mergeOptions;
	if (mergeFunctions.indexOf(mergeFunctionValues) === -1) {
		mergeFunctions.push(mergeFunctionValues);
	}
	return mergeValues(value1, value2, { ...mergeOptions, mergeFunctions });
}
