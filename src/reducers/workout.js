const workoutReducerDefaultState = [];
const workoutReducer = (state = workoutReducerDefaultState, action) => {
    switch(action.type){
        case "ADD_WORKOUT":
            return state.concat(action.workout);
        case "REMOVE_WORKOUT":
            return state.filter(function(testOption){
                return action.id !== testOption.id;
            })
        case "EDIT_WORKOUT":
            return state.map( (workout) => {
                if (workout.id === action.id) {
                    return {
                        ...workout,
                        ...action.update
                    }
                } else {
                    return workout;
                }
            })
        case 'SET_WORKOUT':
            return action.workout;
        default:
            return state;
    }
};

export default workoutReducer;