const increaseCount = ({ state, data }) => ({ count: state.count + data });
const setShape = ({ data }) => ({ shape: data });
const setColor = ({ data }) => ({ color: data });
const updateArray = ({ data }) =>
	({ boxesArray: new Array(Number(data)).fill(1) });
const setBox = ({ data }) => ({ boxCount: data });
const actions = { increaseCount, setShape, setColor, setBox, updateArray };

export default actions;
