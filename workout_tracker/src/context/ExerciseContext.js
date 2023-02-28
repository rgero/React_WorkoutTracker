import trackerAPI from '../api/workouttracker';
import createDataContext from "./createDataContext";

const exerciseReducer = (state, action) => {
    switch(action.type)
    {
        case 'fetch':
            return action.payload;
        default:
            return state;
    }
};

const fetchExercises = dispatch => async () => {
    const response = await trackerAPI.get('/exercises');
    dispatch({type: 'fetch', payload: response.data})
};

const fetchExerciseByID = dispatch => async (targetID) => {
    const response = await trackerAPI.get(`/exercises/${targetID}`);
    dispatch({type: 'fetch', payload: response.data})
};


export const {Provider, Context} = createDataContext(
    exerciseReducer,
    {fetchExercises, fetchExerciseByID},
    []
);