import AsyncStorage from '@react-native-async-storage/async-storage';

import trackerAPI from '../api/workouttracker';
import createDataContext from "./createDataContext";

const userReducer = (state, action) => {
    switch(action.type)
    {
        case 'fetch':
            return action.payload;
        default:
            return state;
    }
};

const getUser = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token)
    {
        const response = await trackerAPI.get('/users');
        dispatch({type: 'fetch', payload: response.data})
    }
}

export const {Provider, Context} = createDataContext(
    userReducer,
    {getUser},
    []
);