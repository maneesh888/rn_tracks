import React from 'react'
import { StyleSheet,View } from 'react-native'

const Spacer = ({children})=> {
return <View style = { stlyes.spacer}>{children}</View>
}

const stlyes = StyleSheet.create({
    spacer:{
        margin:15
    }
})

export default Spacer