
// type propsType = {
// on:boolean
// }
// props: propsType
type StateType = {
	setOn: (change: boolean) => void;
	change: boolean;
};
function ControledState(props: StateType) {
	const onStyle = {
		width: '30px',
		height: '20px',
		border: '1px solid black',
		display: 'inline-block',
		marginLeft: '10px',
		padding: '2px',
		backgroundColor: props.change ? 'green' : 'white',
		fontSize: '15px',
	};
	const offStyle = {
		width: '30px',
		height: '20px',
		border: '1px solid black',
		display: 'inline-block',
		marginLeft: '10px',
		padding: '2px',
		backgroundColor: props.change ? 'white' : 'red',
		fontSize: '15px',
	};
	const indicatorStyle = {
		width: '10px',
		height: '10px',
		borderRadius: '5px',
		border: '1px solid black',
		display: 'inline-block',
		marginLeft: '10px',
		backgroundColor: props.change ? 'green' : 'red',
	};
	const onClicked = () => {
		props.setOn(true);
	};
	const offClicked = () => {
		props.setOn(false);
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

export default ControledState;
