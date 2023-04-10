import trackerAPI from '../api/workouttracker';
import createDataContext from "./createDataContext";

const workoutReducer = (state, action) => {
    switch(action.type)
    {
        case 'fetch':
            return action.payload;
        case 'fetchByID':
            return action.payload;
        case "create":
            return state.concat(action.payload);
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

const fetchWorkoutByID = dispatch => async (id) => {
    const response = await trackerAPI.get(`/workouts/${id}`);
    dispatch({type: "fetchByID", payload: response.data});
}

const createWorkout = dispatch => async (workout) => 
{
    const response = await trackerAPI.post('/workouts', workout)
    dispatch({type: "create", payload: response.data});
};

const updateWorkout = dispatch => async (workout) =>
{
    
}

const deleteWorkout = dispatch => async (targetID) => 
{
    const response = await trackerAPI.delete(`/workouts/${targetID}`)
    dispatch({type: "delete", id: targetID});
}

export const {Provider, Context} = createDataContext(
    workoutReducer,
    {fetchWorkouts, fetchWorkoutByID, createWorkout, deleteWorkout, updateWorkout},
    []
);