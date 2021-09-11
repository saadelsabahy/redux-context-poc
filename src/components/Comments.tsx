import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { CounterContext } from '../context/CounterProvider';
import { CounterStateType } from '../types';

export const Comments = () => {
	// const {
	// 	state: { comments },
	// } = useContext(CounterContext);
	const comments = useSelector<CounterStateType>((state) => state.comments);
	return <div>number of comments:{comments} </div>;
};
