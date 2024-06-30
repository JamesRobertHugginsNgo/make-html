export default function setAttributes(element, attributes) {
	for (const attribute in attributes) {
		const value = attributes[attribute];
		if (value == null) {
			continue;
		}
		element.setAttribute(attribute, value);
	}
}
