import React from 'react';
import { itemsType } from './App';
type propsType = {
	items: Array<itemsType>;
};
function Select(props: propsType) {
	return (
		<div>
			{props.items.map((el) => {
				return <h4>{el.title}</h4>;
			})}
		</div>
	);
}

export default Select;
