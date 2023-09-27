import { View, Text, Dimensions, StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import MapView ,{ PROVIDER_GOOGLE,Marker, MapMarker } from 'react-native-maps';

import { RootStackParamList } from '../routing/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RouteProp } from '@react-navigation/native';
import MapViewDirections from 'react-native-maps-directions';

type FeedBackRouteProps=RouteProp<RootStackParamList,'Maps'>

type FeedBackProps= {
  route: FeedBackRouteProps;
  navigation: NativeStackScreenProps<RootStackParamList, 'Maps'>['navigation'];
};
const coordinates=[{
  latitude:10.542093524976288, 
  longitude:76.23560649895379
},
{
  latitude:10.524527574495163, 
  longitude:76.21332795767877
},
{
  latitude:10.906149254770188, 
  longitude:75.92392790641188
},
{latitude:10.91797198923954, 
longitude: 75.88258320001312, }
]

const apikey="AIzaSyBuyat_CNKqBRcmWsNrOpQPtPqG4CQxfGI"

const Maps:React.FC<FeedBackProps>=(props:any)=>{

  return (
    <View style={style.container}>
        <MapView
         provider={PROVIDER_GOOGLE}
         style={style.map}
         initialRegion={{
            latitude: 10.91797198923954 , 
            longitude: 75.88258320001312,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
       }}
    >
      <Marker coordinate={coordinates[2]}
      title='home'
      pinColor={'red'}/>
      <Marker coordinate={coordinates[3]}
      title='work'
      pinColor={'yellow'}/>
      

      <MapViewDirections
      origin={coordinates[2]}
      destination={coordinates[3]}
      apikey={apikey}
      strokeWidth={4}
      strokeColor='green'
      ></MapViewDirections>
        {/* <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} 
        title="Marina Green" 
        description="Marker Description"
        pinColor={'red'} /> */}
</MapView>
        <TouchableOpacity 
        style={style.goBack}
                  onPress={()=>{
                    props.navigation.navigate('ViewDetails')
                    
                  }}>
                    <Text style={{color:'black',fontSize:14}}>Go Back </Text>
                    </TouchableOpacity>

                    
   
    </View>
  )
}

export default Maps

const style=StyleSheet.create({
    container:{
       flex:1
    },
    map:{
       flex:1
    },
    goBack:{
      position:'absolute',
      backgroundColor:'white',
      top:20,
      left:10,
      padding:10,
      borderRadius:10,
      
    }
})