/**
 * Add a list of class names to an HTML element.
 * @param {HTMLElement} element The HTML element.
 * @param {[any]} classes A list of class names. Undefined or null values are ignored.
 * @returns {HTMLElement}
 */
export default function addClasses(element, classes) {
	const value = classes.filter((className) => {
		return className != null;
	});
	element.classList.add(...value);
	return element;
}
