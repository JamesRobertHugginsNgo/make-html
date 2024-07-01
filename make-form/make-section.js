import makeUi, { uiMakers } from '../make-ui/make-ui.js';

import makeformMergeValues from './make-form-merge-values.js';

import './make-row.js';

export default function makeSection(definition, options = {}) {
	const { id, rows, title } = definition;

	options = { ...options, mergeValues: makeformMergeValues };

	return makeUi({
		name: 'div',
		attributes: { id },
		classes: ['make-section'],
		children: [
			!title ? null : {
				name: 'h3',
				attributes: { id: !id ? null : `${id}_title` },
				classes: ['make-section-title'],
				children: [title]
			},
			{
				name: 'div',
				classes: ['make-section-rows'],
				children: !rows ? null : rows.map((section) => {
					return { type: 'row', ...section };
				})
			}
		]
	}, options);
}

uiMakers['section'] = makeSection;
