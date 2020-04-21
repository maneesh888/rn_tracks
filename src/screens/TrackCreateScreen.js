import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Map from '../components/Map'
import { SafeAreaView } from 'react-navigation'
import { requestPermissionsAsync } from 'expo-location'


const TrackCreateScreen = () => {
    const [err, setErr] = useState(null)
    const startWatching = async () => {
        try {
            await requestPermissionsAsync()
        } catch (e) {
            console.log(e)
            setErr(e)
        }
    }
    useEffect(() => { startWatching() }, [])

    return <SafeAreaView forceInset={{ top: 'always' }}>
        <Text h3>Create a track</Text>
        <Map />
        {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
}

const styles = StyleSheet.create({})

export default TrackCreateScreen