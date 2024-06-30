export function setAttributes(element, attributes) {
	for (const attribute in attributes) {
		const value = attributes[attribute];
		if (value == null) {
			continue;
		}
		element.setAttribute(attribute, value);
	}
}

export function addClasses(element, classes) {
	const value = classes.filter((className) => {
		return className != null;
	});
	element.classList.add(...value);
}

export function setStyles(element, styles) {
	for (const property in styles) {
		const value = styles[property];
		if (value == null) {
			continue;
		}
		element.style[property] = value;
	}
}

export function appendChildren(element, children) {
	for (const child of children) {
		if (child == null) {
			continue;
		}
		if (Array.isArray(child)) {
			element.append(makeHtml({ children: child }));
			continue;
		}
		if (child.constructor && child.constructor === ({}).constructor) {
			console.log('object', makeHtml(child) instanceof Node);
			element.append(makeHtml(child));
			continue;
		}
		element.append(child);
	}
}

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
