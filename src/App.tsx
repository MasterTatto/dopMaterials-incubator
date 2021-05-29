import React, { useState } from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import ControledState from './components/ControledState';
import { Rating, RatingValueType } from './components/Rating/Rating';
import State from './components/State';
import { UncontroledRating } from './components/UncontroledRating/Rating';
import { ControledInput , ControledCheckBox} from './UncontroledInput';
// import UncontroledInputWithRef from './UncontroledInput';

function App() {
	let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
	let [acord, setAcord] = useState(false);
	let [change, setOn] = useState(false);
	return (
		<div className='App'>
			<State toChange={setOn} /> {change.toString()}
			<ControledState change={change} setOn={setOn} />
			<Accordion titleValue={'Users'} collapsed={acord} setAcord={setAcord} />
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
		</div>
	);
}

export default App;
