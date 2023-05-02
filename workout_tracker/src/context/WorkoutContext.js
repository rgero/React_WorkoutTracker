import trackerAPI from '../api/workouttracker';
import createDataContext from "./createDataContext";

const workoutReducer = (state, action) => {
    switch(action.type)
    {
        case 'fetch':
            return action.payload;
        case "create":
            return state.concat(action.payload);
        case "clear":
            return {};
        case "edit":
            return state.map( (workout) => {
                if (workout._id === action._id) {
                    return {
                        ...workout,
                        ...action.update
                    }
                } else {
                    return workout;
                }
            })
        case "delete":
            return state.filter( (testWorkout) => {
                return action.id !== testWorkout._id;
            });
        default:
            return state;
    }
};

const fetchWorkouts = dispatch => async () => {
    const response = await trackerAPI.get('/workouts');
    dispatch({type: 'fetch', payload: response.data})
};

const clearWorkouts = dispatch => async () => {
    dispatch({type: "clear"});
}

const createWorkout = dispatch => async (workout) => 
{
    const response = await trackerAPI.post('/workouts', workout)
    dispatch({type: "create", payload: response.data});
};

const updateWorkout = dispatch => async (workout) =>
{
    const response = await trackerAPI.put(`/workouts/${workout._id}`, workout);
    dispatch({type: "edit", payload: response.data});
}

const deleteWorkout = dispatch => async (targetID) => 
{
    await trackerAPI.delete(`/workouts/${targetID}`)
    dispatch({type: "delete", id: targetID});
}

export const {Provider, Context} = createDataContext(
    workoutReducer,
    {fetchWorkouts, clearWorkouts, createWorkout, deleteWorkout, updateWorkout},
    []
);