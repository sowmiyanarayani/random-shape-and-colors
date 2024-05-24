import { React } from 'react';
import './App.scss';
import RandomShapes from './components/RandomShapes';
import Shape from './components/shape';
import RandomColors from './components/RandomColor';

const App = (context) =>
	<div className="App">
		<RandomShapes { ...context }/>
		<Shape { ...context }/>
		<RandomColors { ...context }/>
	</div>;

export default App;
