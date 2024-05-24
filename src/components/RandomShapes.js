/* eslint-disable max-lines-per-function */
import { React } from 'react';
const RandomShapes = (context) => {
	const {
		state: { boxCount, boxesArray, shape, color },
		actions: { setBox, updateArray },
		config: { shapeStyles },
	} = context;

	return <div>
		<label>Enter The Number : </label>
		<input
			type="number"
			placeholder="enter the number"
			onChange={ (event) => setBox(event.target.value) }
		/>
		<button
			onClick={ () => updateArray(boxCount) }
		>generate shapes</button>
		{ boxesArray.map((box, index) =>
			<div
				key={ index }
				style={ { ...shapeStyles[shape], backgroundColor: color } }
			/>) }
	</div>;
};

export default RandomShapes;
