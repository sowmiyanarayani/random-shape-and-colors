/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-lines-per-function */
import { peek } from '@laufire/utils/debug';
const RandomColors = (context) => {
	const {
		state: { color },
		actions: { setColor },
	} = context;
	const generateRandomColors
		// eslint-disable-next-line no-magic-numbers
		= `#${ Math.floor(Math.random() * 16777215).toString(16) }` ;

	peek(color);
	// eslint-disable-next-line react/react-in-jsx-scope
	return <div>
		<h3>generate the random colors: { color }</h3>
		<button onClick={ () => setColor(generateRandomColors) }>
			Generate colors</button>
	</div>;
};

export default RandomColors;
