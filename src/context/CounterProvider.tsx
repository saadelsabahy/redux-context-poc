import React, { ReactNode, useReducer } from 'react';
import { ActionType, CounterStateType } from '../types';

interface Props {
	children: ReactNode;
}
const initialState: CounterStateType = {
	likes: 0,
	comments: 0,
};
type ContextType = {
	state: CounterStateType;
	dispatch: React.Dispatch<ActionType>;
};
export const CounterContext = React.createContext<ContextType>(
	{} as ContextType
);

const reducer = (state = initialState, { type, payload }: ActionType) => {
	switch (type) {
		case 'INCREMENT_LIKES':
			return { ...state, likes: state.likes + 1 };
		case 'INCREMENT_COMMENTS':
			return { ...state, comments: state.comments + 1 };

		default:
			return state;
	}
};

const CounterProvider: React.FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<CounterContext.Provider value={{ state, dispatch }}>
			{children}
		</CounterContext.Provider>
	);
};

export default CounterProvider;
