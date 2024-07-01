import makeUi, { uiMakers } from '../make-ui/make-ui.js';

import makeformMergeValues from './make-form-merge-values.js';

import './make-section.js';

export default function makeForm(definition, options = {}) {
	const { id, sections, title } = definition;

	options = { ...options, mergeValues: makeformMergeValues };

	return makeUi({
		name: 'form',
		attributes: { id },
		classes: ['make-form'],
		children: [
			!title ? null : {
				name: 'h2',
				attributes: { id: !id ? null : `${id}_title` },
				classes: ['make-form-title'],
				children: [title]
			},
			!sections ? null : sections.map((section) => {
				return { type: 'section', ...section };
			})
		]
	}, options);
}

uiMakers['form'] = makeForm;
