/**
 * Sets a list of style properties to an HTML element.
 * @param {HTMLElement} element The HTML element.
 * @param {object} styles The list of style properties. Undefined or null values are ignored.
 * @returns {HTMLElement}
 */
export default function setStyles(element, styles) {
	for (const property in styles) {
		const value = styles[property];
		if (value == null) {
			continue;
		}
		element.style[property] = value;
	}
	return element;
}
