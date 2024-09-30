import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from "expo-router"
import Ionicons from '@expo/vector-icons/Ionicons';
const TabLayout = () => {
  return (
    <Tabs screenOptions={{headerShown:false}}>
        <Tabs.Screen options={{tabBarLabel:"Home", tabBarIcon:({color})=><Ionicons name='home' size={24} color={color}/>}} name='home'/>
        <Tabs.Screen options={{tabBarLabel:"Explore", tabBarIcon:({color})=><Ionicons name='search' size={24} color={color}/>}} name='search'/>
        <Tabs.Screen options={{tabBarLabel:"Profile", tabBarIcon:({color})=><Ionicons name='people' size={24} color={color}/>}} name='profile'/>
    </Tabs>
  )
}

export default TabLayout