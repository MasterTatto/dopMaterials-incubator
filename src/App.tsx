import React, { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import ControledState from './components/ControledState';
import { Rating, RatingValueType } from './components/Rating/Rating';
import State from './components/State';
import { UncontroledRating } from './components/UncontroledRating/Rating';
import Select from './Select';
import { ControledInput, ControledCheckBox } from './UncontroledInput';
// import UncontroledInputWithRef from './UncontroledInput';
export type itemsType = {
	title: string;
	value: string;
};
function App() {
	let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
	let [acord, setAcord] = useState(true);
	let [change, setOn] = useState(false);

	let items: Array<itemsType> = [
		{ title: 'Alex', value: v1() },
		{ title: 'Bob', value: v1() },
		{ title: 'Anna', value: v1() },
		{ title: 'Lena', value: v1() },
	];
	const onClick = (v: string, t: string) => {
		t = v;
	};

	return (
		<div className='App'>
			<State toChange={setOn} /> {change.toString()}
			<ControledState change={change} setOn={setOn} />
			<Accordion
				titleValue={'Users'}
				collapsed={acord}
				setAcord={setAcord}
				items={items}
				onClick={onClick}
			/>
			<UncontroledRating />
			<Rating value={ratingValue} onClick={setRatingValue} />
			{/* <Rating value={0} />
			<Rating value={1} />
			<Rating value={2} />
			<Rating value={3} />
			<Rating value={4} />
			<Rating value={5} /> */}
			<ControledInput />
			<ControledCheckBox />
			<Select items={items} />
		</div>
	);
}

export default App;
