import makeUi, { uiMakers } from '../make-ui/make-ui.js';
import mergeValues from '../make-ui/merge-values.js';

import makeformMergeValues from './make-form-merge-values.js';
import makeId from './make-id.js';

export default function makeInputField(definition, options = {}) {
	const {
		bindTo,
		disabled,
		id = makeId('text'),
		max,
		maxLength,
		min,
		minLength,
		name = id,
		pattern,
		placeholder,
		postHelpText,
		preHelpText,
		readOnly,
		required,
		size,
		step,
		title,
		type = 'text',
		value
	} = definition;

	let { validators } = definition;

	options = { ...options, mergeValues: makeformMergeValues };

	if (maxLength != null) {
		validators = mergeValues({
			tooLong: {
				message: minLength != null
					? `${title || 'This field'} must be between ${minLength} and ${maxLength} characters.`
					: `${title || 'This field'} must be less than ${maxLength} characters.`
			}
		}, validators);
	}

	if (minLength != null) {
		validators = mergeValues({
			tooShort: {
				message: maxLength != null
					? `${title || 'This field'} must be between ${minLength} and ${maxLength} characters.`
					: `${title || 'This field'} must be greater than ${minLength} characters.`
			}
		}, validators);
	}

	if (required) {
		const validator = {};
		if (title) {
			validator.message = `${title} is required.`;
		}
		validators = mergeValues({ valueMissing: validator }, validators);
	}

	if (type === 'email') {
		validators = mergeValues({
			typeMismatch: {
				message: `${title || 'This field'} must be an email.`
			}
		}, validators);
	}
	if (type === 'number') {
		validators = mergeValues({
			typeMismatch: {
				message: `${title || 'This field'} must be a Number.`
			}
		}, validators);
	}
	if (type === 'url') {
		validators = mergeValues({
			typeMismatch: {
				message: `${title || 'This field'} must be a URL.`
			}
		}, validators);
	}

	const errorId = !validators ? null : `${id}_error`;
	const postHelpTextId = !postHelpText ? null : `${id}_posthelptext`;
	const preHelpTextId = !preHelpText ? null : `${id}_prehelptext`;

	let errorEl, inputEl;
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
					max,
					maxlength: maxLength,
					min,
					minlength: minLength,
					name,
					pattern,
					placeholder,
					readonly: !readOnly ? null : '',
					required: !required ? null : '',
					size,
					step,
					type,
					value,
					'aria-describedby': [preHelpTextId, postHelpTextId, errorId].filter(Boolean).join(' '),
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
			!validators ? null : {
				name: 'div',
				attributes: { id: errorId },
				callback({ element }) {
					errorEl = element;
				}
			}
		]
	}, options);

	let formValidatorConfiguration;
	if (validators) {
		formValidatorConfiguration = {
			fields: {
				[name]: {
					el: errorEl,
					validators
				}
			}
		};
	}

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
				inputEl.dispatchEvent(new Event('input', { bubbles: true }))

				changeEventListener = () => {
					model[bindTo] = inputEl.value;
				}
				inputEl.addEventListener('change', changeEventListener);
			}
		}
	}

	return makeformMergeValues(result, { formValidatorConfiguration, setModel });
}

uiMakers['date'] = makeInputField;
uiMakers['datetime-local'] = makeInputField;
uiMakers['email'] = makeInputField;
uiMakers['month'] = makeInputField;
uiMakers['number'] = makeInputField;
uiMakers['password'] = makeInputField;
uiMakers['tel'] = makeInputField;
uiMakers['text'] = makeInputField;
uiMakers['time'] = makeInputField;
uiMakers['url'] = makeInputField;
uiMakers['week'] = makeInputField;
