import React, { useRef, useState } from 'react';

// function UncontroledInput() {
// 	const [value,setValue] = useState('')
// 	return (
// 		<div>
// 			<span>1</span> <input type='text' onChange={(e) => setValue(e.currentTarget.value)}/> - {value} <hr />
// 			<span>2</span>
// 			<input type='text' value='hello' />
// 		</div>
// 	);
// }
// function UncontroledInputWithRef() {
// 	const [value, setValue] = useState('');
// 	// let inputRef = useRef<HTMLInputElement>(null);
// 	// let val = inputRef.current as HTMLInputElement;
// 	return (
// 		<div>
// 			<span>1</span>
// 			<input
// 				type='text'
// 				value={value}
// 				onChange={((e) => setValue(e.currentTarget.value))}
// 				// ref={inputRef}
// 				// onKeyPress={(e) => (e.key === 'Enter' ? setValue(val.value) : '')}
// 			/>{' '}
// 			<button
// 				onClick={() => {
// 					setValue(value);
// 				}}
// 			>
// 				Check
// 			</button>{' '}
// 			actual value: {value} <hr />
// 			<span>2</span>
// 			<input type='text' value='hello' />
// 		</div>
// 	);
// }
export const ControledInput = () => {
	const [parentValue,setParentValue] = useState('')
	return (
		<div>
			<input type='text' value={parentValue} onChange={((e) => setParentValue(e.currentTarget.value))}/>
		</div>
	);
};
export const ControledCheckBox = () => {
	const [value,setValue] = useState(true)
	return (
		<div>
			<input type='checkbox' checked={value} onChange={((e) => setValue(e.currentTarget.checked))}/>
		</div>
	);
};

