import appendChildren from '../make-html/append-children.js';
import makeUi from '../make-ui/make-ui.js';

import './make-form.js';

const { element, setModel } = makeUi({
	type: 'form',
	title: 'Form Title',
	id: 'form-id',
	sections: [
		{
			type: 'section',
			title: 'Section 1',
			id: 'section-1',
			rows: [
				{
					type: 'row',
					fields: [
						{
							type: 'text',
							title: 'Text 1',
							preHelpText: 'Pre help text.',
							postHelpText: 'Post help text.',
							id: 'text-1',
							value: 'Text 1 value',
							bindTo: 'text1'
						},
						{
							type: 'text',
							title: 'Text 2',
							preHelpText: 'Pre help text.',
							postHelpText: 'Post help text.',
							id: 'text-2',
							required: true,
							value: 'Text 2 value',
							bindTo: 'text2'
						}
					]
				},
				{
					type: 'row',
					fields: [
						{
							type: 'text',
							title: 'Text 1',
							preHelpText: 'Pre help text.',
							postHelpText: 'Post help text.',
							disabled: true,
							id: 'text-3',
							required: true,
							value: 'Text 3 value',
							bindTo: 'text3'
						},
						{
							type: 'text',
							title: 'Text 2',
							preHelpText: 'Pre help text.',
							postHelpText: 'Post help text.',
							id: 'text-4',
							readOnly: true,
							value: 'Text 4 value',
							bindTo: 'text4'
						}
					]
				},
				{
					type: 'row',
					fields: [
						{
							type: 'text',
							title: 'Text 5',
							preHelpText: 'Pre help text.',
							postHelpText: 'Post help text.',
							id: 'text-5',
							value: 'Text 5 value',
							bindTo: 'text5'
						}
					]
				}
			]
		}
	]
});

appendChildren(element, [
	{
		name: 'p',
		children: [
			{
				name: 'input',
				attributes: { type: 'submit', value: 'Submit' }
			}
		]
	}
]);

const model = {
	text5: 'TEXT 5 VALUE'
};

element.addEventListener('submit', (event) => {
	event.preventDefault();

	alert(JSON.stringify(model, null, 2));
});

appendChildren(document.body, [element]);

if (setModel) {
	setModel(model);
}
