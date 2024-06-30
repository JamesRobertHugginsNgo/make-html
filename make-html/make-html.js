import addClasses from './add-classes.js';
import setAttributes from './set-attributes.js';
import setStyles from './set-styles.js';
import appendChildren from './append-children.js';

export default function makeHtml(definition) {
	const {
		name,
		attributes,
		classes,
		styles,
		children,
		callback
	} = definition;

	const element = !name
		? document.createDocumentFragment()
		: document.createElement(name);

	if (attributes) {
		setAttributes(element, attributes);
	}

	if (classes) {
		addClasses(element, classes);
	}

	if (styles) {
		setStyles(element, styles);
	}

	if (children) {
		appendChildren(element, children);
	}

	if (callback) {
		callback(element, definition);
	}

	return element
}
