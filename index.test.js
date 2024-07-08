import { makeHtml } from 'https://cdn.jsdelivr.net/gh/JamesRobertHugginsNgo/make-html@2.0.0-alpha/index.js';

const element = makeHtml({
	name: 'form',
	attributes: { id: 'form-id' },
	classes: ['form-class'],
	styles: { margin: '1rem 0' },
	children: [
		{
			name: 'h1',
			attributes: { id: 'form-title' },
			styles: {
				fontSize: '2rem',
				margin: '1rem 0'
			},
			children: ['Form Title']
		},
		[
			{
				name: 'div',
				styles: { margin: '1rem 0' },
				attributes: { id: 'section-1' },
				classes: ['section-class'],
				children: [
					{
						name: 'h2',
						attributes: { id: 'sction-1-title' },
						classes: ['section-header-class'],
						styles: {
							backgroundColor: '#efefef',
							borderColor: 'lightgrey',
							borderStyle: 'solid',
							borderWidth: '1px 1px 0 1px',
							borderRadius: '0.5rem 0.5rem 0 0',
							fontSize: '1.5rem',
							margin: '0',
							padding: '0.5rem 1rem'
						},
						children: ['Section 1']
					},
					{
						name: 'div',
						classes: ['section-body-class'],
						styles: {
							border: '1px solid lightgrey',
							borderRadius: '0 0 0.5rem 0.5rem',
							display: 'flex',
							flexDirection: 'column',
							gap: '1rem',
							padding: '1rem 1rem 2rem 1rem'
						},
						children: [
							{
								name: 'div',
								classes: ['row-class-a', 'row-class-b'],
								styles: {
									display: 'flex',
									gap: '1rem'
								},
								children: [
									{
										name: 'div',
										styles: { flex: '1' },
										children: [
											{
												name: 'label',
												attributes: { for: 'field-1' },
												styles: {
													display: 'block',
													marginBottom: '0.25rem'
												},
												children: ['Field 1']
											},
											{
												name: 'input',
												attributes: { id: 'field-1', name: 'field-1' },
												styles: {
													boxSizing: 'border-box',
													display: 'block',
													fontSize: '0.875rem',
													width: '100%'
												}
											}
										]
									},
									{
										name: 'div',
										styles: { flex: '1' },
										children: [
											{
												name: 'label',
												attributes: { for: 'field-2' },
												styles: {
													display: 'block',
													marginBottom: '0.25rem'
												},
												children: ['Field 2']
											},
											{
												name: 'input',
												attributes: {
													id: 'field-2',
													name: 'field-2'
												},
												styles: {
													boxSizing: 'border-box',
													display: 'block',
													fontSize: '0.875rem',
													width: '100%'
												}
											}
										]
									},
									{
										name: 'div',
										styles: { flex: '1' },
										children: [
											{
												name: 'label',
												attributes: { for: 'field-3' },
												styles: {
													display: 'block',
													marginBottom: '0.25rem'
												},
												children: ['Field 3']
											},
											{
												name: 'input',
												attributes: {
													id: 'field-3',
													name: 'field-3'
												},
												styles: {
													boxSizing: 'border-box',
													display: 'block',
													fontSize: '0.875rem',
													width: '100%'
												}
											}
										]
									},
									{
										name: 'div',
										styles: { flex: '1' },
										children: [
											{
												name: 'label',
												attributes: { for: 'field-4' },
												styles: {
													display: 'block',
													marginBottom: '0.25rem'
												},
												children: ['Field 4']
											},
											{
												name: 'input',
												attributes: {
													id: 'field-4',
													name: 'field-4'
												},
												styles: {
													boxSizing: 'border-box',
													display: 'block',
													fontSize: '0.875rem',
													width: '100%'
												}
											}
										]
									}
								]
							},
							{
								name: 'div',
								classes: ['row-class-a', 'row-class-b'],
								styles: {
									display: 'flex',
									gap: '1rem'
								},
								children: [
									{
										name: 'div',
										styles: { flex: '1' },
										children: [
											{
												name: 'label',
												attributes: { for: 'field-5' },
												styles: {
													display: 'block',
													marginBottom: '0.25rem'
												},
												children: ['Field 5']
											},
											{
												name: 'input',
												attributes: {
													id: 'field-5',
													name: 'field-5'
												},
												styles: {
													boxSizing: 'border-box',
													display: 'block',
													fontSize: '0.875rem',
													width: '100%'
												}
											}
										]
									},
									{
										name: 'div',
										styles: { flex: '1' },
										children: [
											{
												name: 'label',
												attributes: { for: 'field-6' },
												styles: {
													display: 'block',
													marginBottom: '0.25rem'
												},
												children: ['Field 6']
											},
											{
												name: 'input',
												attributes: {
													id: 'field-6',
													name: 'field-6'
												},
												styles: {
													boxSizing: 'border-box',
													display: 'block',
													fontSize: '0.875rem',
													width: '100%'
												}
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'div',
				styles: { margin: '1rem 0' },
				attributes: { id: 'section-2' },
				classes: ['section-class'],
				children: [
					{
						name: 'h2',
						attributes: { id: 'sction-2-title' },
						classes: ['section-header-class'],
						styles: {
							backgroundColor: '#efefef',
							borderColor: 'lightgrey',
							borderStyle: 'solid',
							borderWidth: '1px 1px 0 1px',
							borderRadius: '0.5rem 0.5rem 0 0',
							fontSize: '1.5rem',
							margin: '0',
							padding: '0.5rem 1rem'
						},
						children: ['Section 2']
					},
					{
						name: 'div',
						classes: ['section-body-class'],
						styles: {
							border: '1px solid lightgrey',
							borderRadius: '0 0 0.5rem 0.5rem',
							display: 'flex',
							flexDirection: 'column',
							gap: '1rem',
							padding: '1rem'
						},
						children: [
							{
								name: 'div',
								classes: ['row-class-a', 'row-class-b'],
								styles: {
									display: 'flex',
									gap: '1rem'
								},
								children: [
									{
										name: 'div',
										styles: { flex: '1' },
										children: [
											{
												name: 'label',
												attributes: { for: 'textarea-1' },
												styles: {
													display: 'block',
													marginBottom: '0.25rem'
												},
												children: ['Textarea 1']
											},
											{
												name: 'textarea',
												attributes: {
													id: 'textarea-1',
													name: 'textarea-1'
												},
												styles: {
													boxSizing: 'border-box',
													display: 'block',
													fontSize: '0.875rem',
													width: '100%'
												}
											}
										]
									},
									{
										name: 'div',
										styles: { flex: '1' },
										children: [
											{
												name: 'label',
												attributes: { for: 'textarea-2' },
												styles: {
													display: 'block',
													marginBottom: '0.25rem'
												},
												children: ['Textarea 2']
											},
											{
												name: 'textarea',
												attributes: {
													id: 'textarea-2',
													name: 'textarea-2'
												},
												styles: {
													boxSizing: 'border-box',
													display: 'block',
													fontSize: '0.875rem',
													width: '100%'
												}
											}
										]
									}
								]
							},
							{
								name: 'div',
								classes: ['row-class-a', 'row-class-b'],
								styles: {
									display: 'flex',
									gap: '1rem'
								},
								children: [
									{
										name: 'div',
										styles: { flex: '1' },
										children: [
											{
												name: 'label',
												attributes: { for: 'textarea-3' },
												styles: {
													display: 'block',
													marginBottom: '0.25rem'
												},
												children: ['Textarea 3']
											},
											{
												name: 'textarea',
												attributes: {
													id: 'textarea-3',
													name: 'textarea-3'
												},
												styles: {
													boxSizing: 'border-box',
													display: 'block',
													fontSize: '0.875rem',
													width: '100%'
												}
											}
										]
									}
								]
							}
						]
					}
				]
			}
		]
	]
});

document.body.append(element);
