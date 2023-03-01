import trackerAPI from '../api/workouttracker';
import createDataContext from "./createDataContext";

const workoutReducer = (state, action) => {
    switch(action.type)
    {
        case 'fetch':
            return action.payload;
        case "create":
            return action.payload;
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
    dispatch({type: "fetch", payload: response.data});
}

const createWorkout = dispatch => async (workout) => 
{
    const response = await trackerAPI.post('/workouts', workout)
    dispatch({type: "create", payload: response.data});
};

const updateWorkout = dispatch => async (workout) =>
{
    
}

export const {Provider, Context} = createDataContext(
    workoutReducer,
    {fetchWorkouts, fetchWorkoutByID, createWorkout, updateWorkout},
    []
);