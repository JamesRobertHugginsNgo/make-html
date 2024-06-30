import makeHtml from './make-html.js';

export default function appendChildren(element, children) {
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
