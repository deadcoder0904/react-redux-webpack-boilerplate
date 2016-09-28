import CONSTANTS from 'constants'

// Reducers
const allReducers = (state,action) => {
	switch(action.type){
		case CONSTANTS.INCREMENT:
			return {counter: action.payload+1};
		case CONSTANTS.DECREMENT:
			return {counter: action.payload-1};
		default:
			return state;
	}
}

export default allReducers