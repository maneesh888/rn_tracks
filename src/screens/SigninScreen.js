import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context } from '../context/AuthContext'
import { NavigationEvents } from 'react-navigation'

const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(Context)
    return (
        <View style={styles.container}>
            <NavigationEvents
                
                onWillBlur={clearErrorMessage}
                
            />
            <AuthForm
                headerText="Sign in to your account"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText="Sign In"
            />
            <NavLink
                routeName="Signup"
                text="Don't have an account? Sign up instead"
            />
        </View>
    )
}
SigninScreen.navigationOptions = {
    headerShown: false
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 200,
        justifyContent: 'center'

    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    }
})

export default SigninScreen