import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Comments, Likes } from './components';
import CounterProvider, { CounterContext } from './context/CounterProvider';

function App() {
	const dispatch = useDispatch();
	//const { dispatch } = useContext(CounterContext);
	return (
		<div>
			<button onClick={() => dispatch({ type: 'INCREMENT_LIKES' })}>
				increment likes
			</button>
			<button onClick={() => dispatch({ type: 'INCREMENT_COMMENTS' })}>
				increment numComments
			</button>

			<Comments />
			<br />
			<Likes />

			{/* <CounterProvider>
				<LikesAndComments />
				<br />
				<Likes />
			</CounterProvider> */}
		</div>
	);
}

export default App;
