import React, { useState } from 'react';

type AccordionPropsType = {
	titleValue: string;
	collapsed: boolean;
	setAcord: (value: boolean) => void;
};

export function Accordion(props: AccordionPropsType) {
	return (
		<div>
			<AccordionTitle
				title={props.titleValue}
				setAcord={() => props.setAcord(!props.collapsed)}
			/>
			{!props.collapsed ? <AccordionBody /> : ''}
		</div>
	);
}

type AccordionTitlePropsType = {
	title: string;
	setAcord: () => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
	return (
		<div>
			<h3 className='btn' onClick={() => props.setAcord()}>
				---{props.title}---
			</h3>
		</div>
	);
}

function AccordionBody() {
	return (
		<ul className='ul'>
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ul>
	);
}
