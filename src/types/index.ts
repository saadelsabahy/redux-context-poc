export type ActionsType = 'INCREMENT_LIKES' | 'INCREMENT_COMMENTS';
export interface ActionType {
	type: ActionsType;
	payload?: any;
}

export interface CounterStateType {
	likes: number;
	comments: number;
}
