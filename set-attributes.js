/**
 * Sets a list of attributes to an HTML element.
 * @param {HTMLElement} element The HTML element.
 * @param {object} attributes The list of attributes. Undefined or null values are ignored.
 * @returns {HTMLElement}
 */
export default function setAttributes(element, attributes) {
	for (const attribute in attributes) {
		const value = attributes[attribute];
		if (value == null) {
			continue;
		}
		element.setAttribute(attribute, value);
	}
	return element;
}
