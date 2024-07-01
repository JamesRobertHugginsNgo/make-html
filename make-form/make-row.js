import makeUi, { uiMakers } from '../make-ui/make-ui.js';

import makeformMergeValues from './make-form-merge-values.js';

import './make-text-field.js';

export default function makeRow(definition, options = {}) {
	const { id, fields } = definition;

	options = { ...options, mergeValues: makeformMergeValues };

	return makeUi({
		name: 'div',
		attributes: { id },
		classes: ['make-row'],
		children: !fields ? null : fields.map((field) => {
			return {
				name: 'div',
				classes: ['make-row-columns'],
				children: [{ type: 'text', ...field }]
			};
		})
	}, options);
}

uiMakers['row'] = makeRow;
