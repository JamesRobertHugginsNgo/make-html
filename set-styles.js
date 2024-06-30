export default function setStyles(element, styles) {
	for (const property in styles) {
		const value = styles[property];
		if (value == null) {
			continue;
		}
		element.style[property] = value;
	}
}
