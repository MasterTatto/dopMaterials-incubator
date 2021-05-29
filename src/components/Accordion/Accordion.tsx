type itemType = {
	title: string;
	value: any;
};

type AccordionPropsType = {
	titleValue: string;
	collapsed: boolean;
	setAcord: (value: boolean) => void;
	items: Array<itemType>;
	onClick: (v: any, t: string) => void;
};

export function Accordion(props: AccordionPropsType) {
	return (
		<div>
			<AccordionTitle
				title={props.titleValue}
				setAcord={() => props.setAcord(!props.collapsed)}
			/>
			{!props.collapsed ? (
				<AccordionBody
					items={props.items}
					onClick={props.onClick}
					titleValue={props.titleValue}
				/>
			) : (
				''
			)}
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
type AccordionBodyPropsType = {
	titleValue: string;
	items: Array<itemType>;
	onClick: (v: any, t: string) => void;
};
function AccordionBody(props: AccordionBodyPropsType) {
	return (
		<ul className='ul'>
			{props.items.map((item, index) => (
				<li
					key={item.value}
					onClick={() => props.onClick(item.title, props.titleValue)}
				>
					{item.title}
				</li>
			))}
		</ul>
	);
}
