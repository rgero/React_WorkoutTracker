import AsyncStorage from '@react-native-async-storage/async-storage';

import trackerAPI from '../api/workouttracker';
import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
    switch (action.type)
    {
        case "addError":
            return { ...state, errorMessage: action.payload};
        case "storeToken":
            return { errorMessage: "", token: action.payload};
        case "clearErrorMessage":
            return {...state, errorMessage: ""}
        case "signout":
            return { token: null, errorMessage: ""}
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token)
    {
        dispatch({ type: 'storeToken', payload: token})
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch( {type: 'clearErrorMessage' })
}

const signUp = dispatch => {
    return async ({ email, displayName, password }) => {
        try {
            const response = await trackerAPI.post('/signup', { email, displayName, password });
            
            // Storing the Token
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: "storeToken", payload: response.data.token})
        } catch (err) {
            console.log(err.message);
            dispatch({ type: 'addError', payload: "Sign-up failed. Please try again"})
        }
    };
}

const signIn = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerAPI.post('/signin', { email, password });
            
            // Storing the Token
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: "storeToken", payload: response.data.token})
        } catch (err) {
            console.log(err.message);
            dispatch({ type: 'addError', payload: "Login failed. Please try again"})
        }
    };
}

const signOut = dispatch => async () => {
    try {
        await AsyncStorage.removeItem('token');
        dispatch({type: "signout"})
    } catch (err)
    {
        console.log(err);
    }
}

export const {Provider, Context } = createDataContext(authReducer, 
                                                      {clearErrorMessage, signUp, signIn, signOut, tryLocalSignin}, 
                                                      {
                                                        token: null,
                                                        errorMessage: ""
                                                      }
                                                    )