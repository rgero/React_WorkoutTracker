import AsyncStorage from '@react-native-async-storage/async-storage';

import trackerAPI from '../api/workouttracker';
import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
    switch (action.type)
    {
        case "addError":
            return { ...state, errorMessage: action.payload};
        case "storeUser":
            return  {   errorMessage: "", 
                        token: action.payload.token, 
                        displayName: action.payload.displayName,
                        email: action.payload.email
                    };
        case "clearErrorMessage":
            return {...state, errorMessage: ""}
        case "signout":
            return { token: null, errorMessage: ""}
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const userData = await AsyncStorage.getItem('userData');
    if (userData)
    {
        let targetData = JSON.parse(userData);
        let responseData = {
            token: targetData.token,
            displayName: targetData.displayName,
            email: targetData.email
        }
        dispatch({type: "storeUser", payload: responseData})
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch( {type: 'clearErrorMessage', })
}

const signUp = dispatch => {
    return async ({ email, displayName, password }) => {
        try {
            const response = await trackerAPI.post('/signup', { email, displayName, password });

            // Storing the User Data
            let data = {
                token: response.data.token,
                displayName: response.data.displayName,
                email: response.data.email
            };
            await AsyncStorage.setItem('userData', JSON.stringify(data));

            dispatch({type: "storeUser", payload: {token: data.token, displayName: data.displayName, email: data.email}})
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

            // Storing the User Data
            let data = {
                token: response.data.token,
                displayName: response.data.displayName,
                email: response.data.email
            };
            await AsyncStorage.setItem('userData', JSON.stringify(data));
            
            dispatch({type: "storeUser", payload: {token: data.token, displayName: data.displayName, email: data.email}})
        } catch (err) {
            console.log(err.message);
            dispatch({ type: 'addError', payload: "Login failed. Please try again"})
        }
    };
}

const signOut = dispatch => async () => {
    try {
        await AsyncStorage.removeItem('userData');
        dispatch({type: "signout"})
    } catch (err)
    {
        console.log(err);
    }
}

const changeUserData = dispatch => {
    return async ({email, password, changeData}) => {
        try {
            const response = await trackerAPI.post('/change', { email, password, changes: changeData });

            // Storing the User Data
            let data = {
                token: response.data.token,
                displayName: response.data.displayName,
                email: response.data.email
            };
            await AsyncStorage.setItem('userData', JSON.stringify(data));
            dispatch({type: "storeUser", payload: {token: data.token, displayName: data.displayName, email: data.email}})
        } catch (err) {
            console.log(err.message);
            dispatch({ type: 'addError', payload: "Login failed. Please try again"})
        }
    };
}

export const {Provider, Context } = createDataContext(authReducer, 
                                                      {changeUserData, clearErrorMessage, signUp, signIn, signOut, tryLocalSignin}, 
                                                      {
                                                        token: null,
                                                        errorMessage: ""
                                                      }
                                                    )