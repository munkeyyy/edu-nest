import { View, Text } from 'react-native'
import React from 'react'
import {Stack, Tabs} from "expo-router"

const StackLayout = () => {
    console.log('test')
  return (
    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen  name='signup' />
        <Stack.Screen  name='login' />
       
    </Stack>
  )
}

export default StackLayout