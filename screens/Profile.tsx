import { View, Text, Image,StyleSheet, ScrollView, Touchable, TouchableOpacity, Dimensions} from 'react-native'
import React from 'react'

import {  Card, Button, Icon } from '@rneui/themed';

import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../routing/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

type Card={};

type ProfileScreenProps = {
  route: ProfileScreenRouteProp;
  navigation: NativeStackScreenProps<RootStackParamList, 'Profile'>['navigation'];
};


const users = [
  
  {
    name: 'thot leader',
    avatar:
      'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
  },
  
  {
    name: 'talha concepts',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
 
  {
    name: 'katy friedson',
    avatar:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
  },
  
];


const Profile: React.FC<ProfileScreenProps> = (props:any) => {

  return (
    <>
      <View style={style.container}>
      <ScrollView style={{flex:0}}>
      
          {users.map((user,index)=>{
            return(
              <Card key={index} containerStyle={[style.CardStyle,style.shadowProp]}>
                
                <View  style={style.user}>
                  <Image style={style.image}
                          resizeMode='cover'
                          source={{uri:user.avatar}}/>
                  <View style={style.userInfo}>
                  <Card.Title style={style.name}>{user.name}</Card.Title>
               
                  
                  <TouchableOpacity style={style.viewMore}
                  onPress={()=>{
                    props.navigation.navigate('ViewDetails')
                  }}>
                    <Text style={{color:'#fafafa',fontSize:14}}>View </Text>
                    </TouchableOpacity>
                    </View>
                </View>
              </Card>
            )
          })
        }
        
    </ScrollView>
      </View>
     
      


    </>
    
  )
}

const style=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    // marginTop:20
    // alignItems:'center',
    // justifyContent:'center',
    paddingTop:20
  },
  user:{
    flexDirection:'row',
    alignItems:'center',
    

  },
  image:{
    width:50,
    height:60,
    borderRadius:2,
    marginHorizontal:5
    
  },
  name:{
    fontSize:16,
    textTransform:'capitalize',
    paddingLeft:5,
    marginVertical:20
    
  },
  viewMore:{
    width:70,
    height:25,
    borderRadius:30,  
    fontSize:14,
    fontWeight:'400',
    marginTop:10,
    backgroundColor:'coral',
    justifyContent:'center',
    alignItems:'center',
    
  },
  CardStyle:{
    // borderColor:'white',
    borderRadius:10,
    width:'auto',
    marginBottom:25
  
   
   
    
  },
  shadowProp:{
    shadowColor:'black',
    elevation:13,
    shadowOffset:{width:-2,height:4},
    shadowOpacity: 0.5,  
    shadowRadius: 3
  },
  userInfo:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  }
  
})


export default Profile