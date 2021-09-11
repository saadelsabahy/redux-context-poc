import React, { useContext, useRef } from 'react';
import { useSelector } from 'react-redux';
import { CounterContext } from '../context/CounterProvider';
import { CounterStateType } from '../types';

interface Props {}

export const Likes = React.memo((props: Props) => {
	// const {
	// 	state: { likes },
	// } = useContext(CounterContext);

	const likes = useSelector<CounterStateType>((state) => state.likes);

	console.log('renderd');

	return (
		<>
			<div>the likes Value is {likes}</div>
		</>
	);
});
