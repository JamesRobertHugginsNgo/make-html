import appendChildren from '../make-html/append-children.js';
import setStyles from '../make-html/set-styles.js';

import makeUi, { uiMakers } from './make-ui.js';
import mergeValues from './merge-values.js';

// ==
// GREETING UI MAKER
// ==

uiMakers['greeting'] = (definition, options = {}) => {
	const { greeting } = definition;

	const { mergeValues: mergeValuesOptions = mergeValues } = options;

	const result = makeUi({
		name: 'em',
		children: [greeting]
	}, options);

	const emboldenGreeting = () => { // Additional unique result
		setStyles(result.element, { fontWeight: 'bold' });
	}

	const metadata = { greeting }; // Additional common result

	return mergeValuesOptions(result, { emboldenGreeting, metadata });
}

// ==
// MESSAGE UI MAKER
// ==

uiMakers['message'] = (definition, options = {}) => {
	const { message } = definition;
	const { mergeValues: mergeValuesOptions = mergeValues } = options;

	const result = makeUi({
		name: 'u',
		children: [message]
	}, options);

	const emboldenMessage = () => { // Additional unique result
		setStyles(result.element, { color: 'blue' });
	}

	const metadata = { message }; // Additional common result

	return mergeValuesOptions(result, { emboldenMessage, metadata });
}

// ==
// DISPLAY UI MAKER
// ==

uiMakers['display'] = (definition, options = {}) => {
	const { greeting, message } = definition;
	return makeUi({
		name: 'p',
		styles: {
			backgroundColor: '#efefef',
			border: '1px solid darkgrey',
			borderRadius: '0.5rem',
			padding: '0.5rem 1rem'
		},
		children: [
			[{ type: 'greeting', greeting }],
			' ',
			[{ type: 'message', message }]
		]
	}, options);
}

// ==

const { element, emboldenGreeting, emboldenMessage, metadata } = makeUi({
	type: 'display',
	greeting: 'Hello',
	message: 'World'
});

appendChildren(document.body, [
	element,
	{
		name: 'p',
		children: [`Meta Data: ${JSON.stringify(metadata)}`]
	}
])

emboldenGreeting();
emboldenMessage();
