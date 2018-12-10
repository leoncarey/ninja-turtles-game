const initialState = {
	position: [10, 10],
	spriteLocation: '-10px -130px',
	walkIndex: 0
};

const playerReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'MOVE_PLAYER':
			return {
				...action.payload
			};

		default:
			return state;
	}
};


export default playerReducer;