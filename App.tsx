import React from 'react'
import Login from './screens/Login'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Profile from './screens/Profile'
import {RootStackParamList} from "./routing/types"

const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login"  screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
      
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App