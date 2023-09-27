import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import {RootStackParamList} from './types';
import Chat from '../screens/Chat';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Maps from '../screens/Maps';
import Settings from '../screens/Settings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ViewDetails from '../screens/ViewDetails';
import SchoolDashboard from '../screens/SchoolDashboard';

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

interface Name {
  name: string;
}
const TabView = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Chat')
            iconName = focused ? 'chatbox' : 'chatbox-outline';
          return <Ionicons name={iconName} size={27} color="coral" />;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: 'whitesmoke',
        },
      })}>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
};
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={TabView} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="ViewDetails" component={ViewDetails} />
        <Stack.Screen name="SchoolDashboard" component={SchoolDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
