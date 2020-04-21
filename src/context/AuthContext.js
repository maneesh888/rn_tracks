import createDataContext from "./createDataContext"
import trackerApi from "../api/tracker"

import { AsyncStorage } from 'react-native';
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error': return { ...state, errorMessage: action.payload }
        case 'signin': return { errorMessage: '', token: action.payload }
        case 'clear_error_message' : return { ...state, errorMessage: ''}
        case 'signout' : return {token: null, errorMessage: ''}
        default: return state
    }

}
const signup = dispatch => async ({ email, password }) => {

    try {
        const response = await trackerApi.post('/signup', { email, password })
        let token = response.data.token
        await AsyncStorage.setItem('token', token)
        dispatch({ type: 'signin', payload: token })
        navigate('TrackList')
    } catch (err) {
        console.log(err)
        dispatch({ type: 'add_error', payload: "Something went wrong with signup" })
    }

    
}
const clearErrorMessage = dispatch => () => {
     dispatch({ type: 'clear_error_message'})
}


const signin = (dispatch) => async ({ email, password }) => {

    try {
        const response = await trackerApi.post('/signin', { email, password })
        let token = response.data.token
        await AsyncStorage.setItem('token', token)
        dispatch({ type: 'signin', payload: token })
        navigate('TrackList')
    } catch (err) {
        console.log(err)
        dispatch({ type: 'add_error', payload: "Something went wrong with signup" })
    }

}
const tryLocalSignIn = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
        dispatch({ type: 'signin', payload: token })
        navigate('TrackList')
    }else{
        navigate('Signup')
    }
}
const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token')
    dispatch({type: 'signout'})
    navigate('loginFlow')
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage, tryLocalSignIn },
    { token: null, errorMessage: '' }
)