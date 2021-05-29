import React, { useState } from 'react';
type propsType = {
	toChange: (change: boolean) => void;
};
// props: propsType
function State(props: propsType) {
	let [change, setOn] = useState(false);

	const onStyle = {
		width: '30px',
		height: '20px',
		border: '1px solid black',
		display: 'inline-block',
		marginLeft: '10px',
		padding: '2px',
		backgroundColor: change ? 'green' : 'white',
		fontSize: '15px',
	};
	const offStyle = {
		width: '30px',
		height: '20px',
		border: '1px solid black',
		display: 'inline-block',
		marginLeft: '10px',
		padding: '2px',
		backgroundColor: change ? 'white' : 'red',
		fontSize: '15px',
	};
	const indicatorStyle = {
		width: '10px',
		height: '10px',
		borderRadius: '5px',
		border: '1px solid black',
		display: 'inline-block',
		marginLeft: '10px',
		backgroundColor: change ? 'green' : 'red',
	};
	const onClicked = () => {
		setOn(true);
		// props.toChange(true);
	};
	const offClicked = () => {
		setOn(false);
		// props.toChange(false);
	};
	return (
		<div>
			<div onClick={onClicked} style={onStyle}>
				on
			</div>
			<div onClick={offClicked} style={offStyle}>
				off
			</div>
			<div style={indicatorStyle}></div>
		</div>
	);
}

export default State;
