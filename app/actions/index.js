import CONSTANTS from 'constants'

// ActionCreators
const actionCreators = {
	increment(counter){
		return {
			type: CONSTANTS.INCREMENT,
			payload: counter
		}
	},
	decrement(counter){
		return {
			type: CONSTANTS.DECREMENT,
			payload: counter
		}
	}
}

export default actionCreators