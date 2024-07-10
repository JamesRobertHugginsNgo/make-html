import addClasses from './add-classes.js';
import setAttributes from './set-attributes.js';
import setStyles from './set-styles.js';

/**
 * Appends a children definition to a document fragment or HTML element.
 * @param {DocumentFragment | HTMLElement} element The HTML element.
 * @param {[any]} children Children definition.
 * @returns DocumentFragment | HTMLElement
 */
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

/**
 * Takes a definition and creates a document fragment or an HTML element.
 * @param {object} definition HTML element definition.
 * @returns {DocumentFragment | HTMLElement}
 */
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

	console.log(namespace);

	const element = !name
		? document.createDocumentFragment()
		: !namespace
			? document.createElement(name)
			: document.createElementNS(namespace, name);

	console.log(element);

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
