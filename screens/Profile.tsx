import { View, Text, Button } from 'react-native'
import React from 'react'
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../routing/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

type ProfileScreenProps = {
  route: ProfileScreenRouteProp;
  navigation: NativeStackScreenProps<RootStackParamList, 'Profile'>['navigation'];
};

const Profile: React.FC<ProfileScreenProps> = ({ route,navigation }) => {
  const { username } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello, {username}</Text>
      <Button onPress={()=>navigation.goBack() }
      title="Go Back"
      ></Button>
    </View>
  )
}

export default Profile