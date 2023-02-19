import trackerAPI from '../api/workouttracker';
import createDataContext from "./createDataContext";

const workoutReducer = (state, action) => {
    switch(action.type)
    {
        case 'fetch':
            return action.payload;
        default:
            return state;
    }
};

const fetchWorkouts = dispatch => async () => {
    const response = await trackerAPI.get('/workouts');
    dispatch({type: 'fetch', payload: response.data})
};

const createWorkout = dispatch => async (name, locations) => 
{



    await trackerAPI.post('/workouts', {name, locations})
};

export const {Provider, Context} = createDataContext(
    workoutReducer,
    {fetchWorkouts, createWorkout},
    []
);