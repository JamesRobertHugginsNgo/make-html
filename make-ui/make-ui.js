import makeHtml from '../make-html/make-html.js';

import mergeValues from './merge-values.js';

export const uiMakers = {};

const objectConstructor = ({}).constructor;

export default function makeUi(definition, options = {}) {
	const { type } = definition;
	if (type) {
		const { uiMakers: uiMakersOption = uiMakers } = options;
		return uiMakersOption[type](definition, options);
	}

	const { children, callback, ...htmlDefinition } = definition;
	const { mergeValues: mergeValuesOptions = mergeValues } = options;

	let result = {};

	const element = makeHtml({
		...htmlDefinition,
		children: !children ? null : children.map((child) => {
			if (child == null) {
				return;
			}

			if (Array.isArray(child)) {
				const { element: childElement, ...childResult } = makeUi({ children: child });
				result = mergeValuesOptions(result, childResult);
				return childElement;
			}

			if (child.constructor && child.constructor === objectConstructor) {
				const { element: childElement, ...childResult } = makeUi(child);
				result = mergeValuesOptions(result, childResult);
				return childElement;
			}

			return child;
		})
	});

	result.element = element;

	if (callback) {
		callback(result, definition);
	}

	return result;
}
