import appendChildren from '../make-html/append-children.js';

import makeUi from '../make-ui/make-ui.js';
import mergeValues from '../make-ui/merge-values.js';

import FoodValidator from './form-validator.js';

import './make-form.js';

const { element, formValidatorConfiguration, setModel } = makeUi({
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
							id: 'text-1a',
							value: 'Text 1 value',
							bindTo: 'text1a'
						},
						{
							type: 'text',
							title: 'Text 2',
							preHelpText: 'Pre help text.',
							postHelpText: 'Post help text.',
							id: 'text-2a',
							required: true,
							bindTo: 'text2a'
						}
					]
				},
				{
					type: 'row',
					fields: [
						{
							type: 'text',
							title: 'Text 3',
							preHelpText: 'Pre help text.',
							postHelpText: 'Post help text.',
							disabled: true,
							id: 'text-3a',
							required: true,
							value: 'Text 3 value',
							bindTo: 'text3a'
						},
						{
							type: 'text',
							title: 'Text 4',
							preHelpText: 'Pre help text.',
							postHelpText: 'Post help text.',
							id: 'text-4a',
							readOnly: true,
							value: 'Text 4 value',
							bindTo: 'text4a'
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
							id: 'text-5a',
							maxLength: 10,
							minLength: 5,
							required: true,
							validators: {
								valueMissing: {
									message: 'THIS IS REQUIRED.'
								}
							},
							bindTo: 'text5a'
						}
					]
				}
			]
		},
		{
			type: 'section',
			title: 'Section 2',
			id: 'section-2',
			rows: [
				{
					fields: [
						{
							type: 'date',
							title: 'Date'
						},
						{
							type: 'datetime-local',
							title: 'Datetime Local'
						}
					]
				},
				{
					fields: [
						{
							type: 'email',
							title: 'Email'
						},
						{
							type: 'month',
							title: 'Month'
						}
					]
				},
				{
					fields: [
						{
							type: 'number',
							title: 'Number'
						},
						{
							type: 'password',
							title: 'Password'
						}
					]
				},
				{
					fields: [
						{
							type: 'tel',
							title: 'Tel'
						},
						{
							type: 'time',
							title: 'Time'
						}
					]
				},
				{
					fields: [
						{
							type: 'url',
							title: 'URL'
						},
						{
							type: 'week',
							title: 'Week'
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

appendChildren(document.body, [element]);

const model = {};

console.log(formValidatorConfiguration);

new FoodValidator(mergeValues(formValidatorConfiguration, {
	success(event) {
		event.preventDefault();
		alert(JSON.stringify(model, null, 2));
	}
}), element);

if (setModel) {
	setModel(model);
}
