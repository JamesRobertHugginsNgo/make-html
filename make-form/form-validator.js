import appendChildren from '../make-html/append-children.js';

import mergeValues from '../make-ui/merge-values.js';

function inputEventListenerLogic(element) {
	for (const messageEl of element.messageEls) {
		messageEl.remove();
	}
	element.messageEls = [];
	let { el = element.parentNode } = element.configuration
	if (typeof el === 'function') {
		el = el(element);
	}

	const {
		validators: {
			patternMismatch = {},
			tooLong = {},
			tooShort = {},
			rangeOverflow = {},
			rangeUnderflow = {},
			typeMismatch = {},
			valueMissing = {},
		} = {}
	} = element.configuration;

	const messages = [];

	if (element.validity.patternMismatch) {
		let { message = 'patternMismatch.' } = patternMismatch;
		if (typeof message === 'function') {
			message = message(element);
		}
		messages.push(message);
	}

	if (element.validity.tooLong) {
		let { message = 'This field is too long.' } = tooLong;
		if (typeof message === 'function') {
			message = message(element);
		}
		messages.push(message);
	}

	if (element.validity.tooShort) {
		let { message = 'This field is too short.' } = tooShort;
		if (typeof message === 'function') {
			message = message(element);
		}
		messages.push(message);
	}

	if (element.validity.rangeOverflow) {
		let { message = 'rangeOverflow.' } = rangeOverflow;
		if (typeof message === 'function') {
			message = message(element);
		}
		messages.push(message);
	}

	if (element.validity.rangeUnderflow) {
		let { message = 'rangeUnderflow.' } = rangeUnderflow;
		if (typeof message === 'function') {
			message = message(element);
		}
		messages.push(message);
	}

	if (element.validity.typeMismatch) {
		let { message = 'typeMismatch.' } = typeMismatch;
		if (typeof message === 'function') {
			message = message(element);
		}
		messages.push(message);
	}

	if (element.validity.valueMissing) {
		let { message = 'This is a required field.' } = valueMissing;
		if (typeof message === 'function') {
			message = message(element);
		}
		messages.push(message);
	}

	appendChildren(el, messages.map((message) => {
		return {
			name: 'div',
			classes: ['formvalidator-message'],
			children: [message],
			callback(messageEl) {
				element.messageEls.push(messageEl);
			}
		};
	}));

	const customValidity = messages.join(' ');
	element.setCustomValidity(customValidity);

	if (customValidity) {
		if (element.labelEl) {
			element.labelEl.classList.remove('formvalidator-pass');
			element.labelEl.classList.add('formvalidator-fail');
		}
		element.classList.remove('formvalidator-pass');
		element.classList.add('formvalidator-fail');
	} else {
		if (element.labelEl) {
			element.labelEl.classList.add('formvalidator-pass');
			element.labelEl.classList.remove('formvalidator-fail');
		}
		element.classList.add('formvalidator-pass');
		element.classList.remove('formvalidator-fail');
	}
}

function inputEventListener(event) {
	const element = event.currentTarget;
	inputEventListenerLogic(element);
}

export default class FoodValidator {
	constructor(configuration, formEl) {
		this.configuration = configuration;
		if (formEl) {
			const { success } = this.configuration;
			formEl.setAttribute('novalidate', '');
			formEl.classList.add('formvalidator');
			formEl.addEventListener('submit', (event) => {
				formEl.classList.add('show-formvalidator');
				if (formEl.checkValidity()) {
					if (success) {
						return success(event);
					}
					event.preventDefault();
				} else {
					const errorEl = formEl.querySelector('.formvalidator-fail');
					if (errorEl) {
						errorEl.focus();
					}
					event.preventDefault();
				}
			});
			for (const element of formEl.elements) {
				this.addField(element);
			}
		}
	}

	addField(element, configuration) {
		const name = element.getAttribute('name');
		configuration = mergeValues(
			!this.configuration.fields ? null : this.configuration.fields[name],
			configuration
		);
		if (configuration) {
			element.configuration = configuration;
			element.inputEvent = 'input';
			element.messageEls = [];

			const id = element.getAttribute('id');
			if (id) {
				element.labelEl = document.querySelector(`[for="${id}"]`);
			}

			element.addEventListener(element.inputEvent, inputEventListener);
			inputEventListenerLogic(element);
		}
	}

	removeField(element) {
		if (element.inputEvent) {
			element.removeEventListener(element.inputEvent, inputEventListener);
			for (const messageEl of element.messageEls) {
				messageEl.remove();
			}
			delete element.configuration;
			delete element.inputEvent;
			delete element.messageEls;
		}
	}
}
