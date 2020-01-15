import createDataContext from "./createDataContext"
import trackerApi from "../api/tracker"

import { AsyncStorage } from 'react-native';
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error': return { ...state, errorMessage: action.payload }
        case 'signup': return { errorMessage: '', token: action.payload }
        default: return state
    }

}
const signup = dispatch => async ({ email, password }) => {

    try {
        const response = await trackerApi.post('/signup', { email, password })
        let token = response.data.token
        await AsyncStorage.setItem('token', token)
        dispatch({ type: 'signup', payload: token })
        navigate('TrackList')
    } catch (err) {
        dispatch({ type: 'add_error', payload: "Something went wrong with signup" })
    }

    
}


const signin = (dispatch) => {
    return (email, password) => {

    }
}

const signout = (dispatch) => {
    return () => {

    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { token: null, errorMessage: '' }
)