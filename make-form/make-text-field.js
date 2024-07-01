import makeUi, { uiMakers } from '../make-ui/make-ui.js';

import makeformMergeValues from './make-form-merge-values.js';
import makeId from './make-id.js';

export default function makeRow(definition, options = {}) {
	const {
		bindTo,
		disabled,
		id = makeId('text'),
		name = id,
		postHelpText,
		preHelpText,
		readOnly,
		required,
		title,
		type = 'text',
		value
	} = definition;

	const postHelpTextId = `${id}_posthelptext`;
	const preHelpTextId = `${id}_prehelptext`;

	options = { ...options, mergeValues: makeformMergeValues };

	let inputEl;
	const result = makeUi({
		name: 'div',
		attributes: { id: `${id}_element` },
		classes: ['make-text-field'],
		children: [
			!title ? null : {
				name: 'label',
				attributes: { for: name },
				classes: ['make-text-field-title'],
				children: [
					title,
					required ? null : [
						' ',
						{
							name: 'span',
							styles: { fontWeight: 'normal' },
							children: ['(optional)']
						}
					]
				]
			},
			!preHelpText ? null : {
				name: 'div',
				attributes: { id: preHelpTextId },
				classes: ['make-text-field-prehelptext'],
				children: [preHelpText]
			},
			{
				name: 'input',
				attributes: {
					disabled: !disabled ? null : '',
					id,
					name,
					readonly: !readOnly ? null : '',
					required: !required ? null : '',
					type,
					value,
					'aria-describedby': [preHelpTextId, postHelpTextId].filter(Boolean).join(' '),
					'aria-required': !!required
				},
				classes: ['make-text-field-input'],
				callback({ element }) {
					inputEl = element;
				}
			},
			!postHelpText ? null : {
				name: 'div',
				attributes: { id: postHelpTextId },
				classes: ['make-text-field-posthelptext'],
				children: [postHelpText]
			},
		]
	}, options);

	let setModel;
	if (bindTo) {
		let changeEventListener;
		setModel = (model) => {
			if (changeEventListener) {
				inputEl.removeEventListener('change', changeEventListener);
				changeEventListener = null;
			}
			if (model) {
				if (model[bindTo] === undefined) {
					model[bindTo] = value || '';
				}
				inputEl.value = model[bindTo];
				changeEventListener = () => {
					model[bindTo] = inputEl.value;
				}
				inputEl.addEventListener('change', changeEventListener);
			}
		}
	}

	return makeformMergeValues(result, { setModel });
}

uiMakers['text'] = makeRow;
