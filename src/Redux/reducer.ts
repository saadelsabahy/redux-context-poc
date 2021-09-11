import { ActionType, CounterStateType } from '../types';

const initialState: CounterStateType = {
	likes: 0,
	comments: 0,
};

const reducer = (
	state: CounterStateType = initialState,
	{ type, payload }: ActionType
) => {
	switch (type) {
		case 'INCREMENT_LIKES':
			return { ...state, likes: state.likes + 1 };
		case 'INCREMENT_COMMENTS':
			return { ...state, comments: state.comments + 1 };
		default:
			return state;
	}
};
export default reducer;
