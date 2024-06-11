import { React } from 'react';
import colorManager from '../services/colorManager';
const RandomColors = (context) => {
	const {
		state: { color },
		actions: { setColor },
	} = context;

	return <div>
		<h3>generate the random colors: { color }</h3>
		<button onClick={ () => setColor(colorManager.randomColor()) }>
			Generate colors</button>
	</div>;
};

export default RandomColors;
