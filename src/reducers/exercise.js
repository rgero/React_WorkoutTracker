const exerciseReducerDefaultState = [];
const exerciseReducer = (state = exerciseReducerDefaultState, action) => {
    switch(action.type){
        case "ADD_EXERCISE":
            return state.concat(action.exercise);
        case "REMOVE_EXERCISE":
            return state.filter(function(testOption){
                return action.id !== testOption.id;
            })
        case "EDIT_EXERCISE":
            return state.map( (exercise) => {
                if (exercise.id === action.id) {
                    return {
                        ...exercise,
                        ...action.update
                    }
                } else {
                    return exercise;
                }
            })
        case 'SET_EXERCISE':
            return action.exercise;
        default:
            return state;
    }
};

export default exerciseReducer;