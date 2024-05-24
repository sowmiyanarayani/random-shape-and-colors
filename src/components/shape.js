import { React } from 'react';
import SelectShape from './selectShape';
import { peek } from '@laufire/utils/debug';
const Shape = (context) => {
	const { state: { shape }} = context;

	peek(shape);
	return <div>
		<SelectShape { ...context }/>
	</div>;
};

export default Shape;
