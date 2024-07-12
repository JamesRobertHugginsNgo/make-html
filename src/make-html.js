import addClasses from './add-classes.js';
import setAttributes from './set-attributes.js';
import setStyles from './set-styles.js';

export function appendChildren(element, children, namespace) {
	const objectConstructor = ({}).constructor;
	for (const child of children) {
		if (child == null) {
			continue;
		}
		if (Array.isArray(child)) {
			element.append(makeHtml({ namespace, children: child }));
			continue;
		}
		if (child.constructor && child.constructor === objectConstructor) {
			element.append(makeHtml({ namespace, ...child }));
			continue;
		}
		element.append(child);
	}
	return element;
}

export default function makeHtml(definition) {
	const {
		namespace,
		name,
		attributes,
		classes,
		styles,
		children,
		callback
	} = definition;

	const element = !name
		? document.createDocumentFragment()
		: !namespace
			? document.createElement(name)
			: document.createElementNS(namespace, name);

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
		appendChildren(element, children, namespace);
	}

	if (callback) {
		callback(element, definition);
	}

	return element
}
