import { View, Text, StyleSheet, TextInput, Dimensions, Alert, TouchableOpacity, ScrollView, Platform,KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import auth,{ FirebaseAuthTypes } from '@react-native-firebase/auth';
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../routing/types"

interface Obj{
  this:string;
}

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Login">;

const Login: React.FC<HomeScreenProps> = (props) => {
    
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const [repass,setrePass]=useState('');
    const [username,setUsername]=useState('');
    const [isRegister,setisRegister]=useState(false);
    // const [text,setText]=useState('')
    // const [isLogin,setisLogin]=useState(false);
    const [userInfo,setuseInfo]=useState<FirebaseAuthTypes.User>();

    

    
    
    const checkEmailValidation=(testmail:string)=>{
      const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const result: boolean = expression.test(testmail);
      return result
      
    }
    
    const handleLogin= async ()=>{
      try {
        await auth().signInWithEmailAndPassword(email,pass).then((userCridentail)=>{
          const user=userCridentail.user
          props.navigation.navigate('Profile',{username})

          // console.log(user);
          
        })
      } catch (error) {
        Alert.alert("Failed to Login")
        
        
      }
        
    }
    const handleRegister=async ()=>{
      
      if(email && pass && repass){
        
      {
        await auth().createUserWithEmailAndPassword(email,pass).then((userCridential)=>{
          const user=userCridential.user
          if(user){
            setuseInfo(user)
            setisRegister(false)
           
          }
        }).catch(error=>{
            if(!checkEmailValidation(email)){
              Alert.alert("Email Not Valid")
            
          }
              else if(pass!==repass){
                 Alert.alert("Password mismatch");
            
          }
          else{
          Alert.alert("Weak Password");
            
            
          }
            
            
          });
          
        }
      }
      
    }
  return (
    <View style={styles.container}>
     <ScrollView style={{flex:1}}>
     
      <Text style={styles.Title}>Yellow Bus</Text>

       

        <Text style={styles.LoginOrRegister}>{isRegister? "Register" : "Login"}</Text>
        <View style={styles.LoginFormContainer}>
      {isRegister && (
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Username</Text>
        <TextInput 
        placeholder='Username' 
        maxLength={100} 
        value={username}
        onChangeText={val=>setUsername(val)}
        style={styles.input}
        
        autoCapitalize='none'></TextInput>
      </View>
      )}
            <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput 
            placeholder='Enter Your Email' 
            maxLength={100}
            value={email}
            onChangeText={val=>setEmail(val)}
            keyboardType='email-address'
            style={styles.input}
            autoCapitalize='none'
            autoComplete='email'
            
            >
            
        </TextInput>
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput 
            placeholder='Enter Your Password' 
            maxLength={100} 
            value={pass}
            onChangeText={val=>setPass(val)}
            style={styles.input}
            secureTextEntry
            autoCapitalize='none'></TextInput>
            
          </View>
        {isRegister && (
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Confirm Password</Text>
        <TextInput 
        placeholder='Enter Your Password Again' 
        maxLength={100} 
        value={repass}
        onChangeText={val=>setrePass(val)}
        style={styles.input}
        secureTextEntry
        autoCapitalize='none'></TextInput>
      </View>
      )}
       
      </View>
      <View style={{height:20}} />
     
    
      <TouchableOpacity 
      style={styles.buttonLogin} 
      onPress={isRegister?handleRegister:handleLogin}>

        <Text style={styles.buttonText}>{isRegister ? "Sign In" : "login"}</Text>

      </TouchableOpacity>
      <TouchableOpacity 
      onPress={()=>setisRegister(!isRegister)} 
      style={styles.buttonRegister}>
        <Text >{isRegister ? "Login" : "Register"}</Text>
      </TouchableOpacity> 
   
      </ScrollView>
    </View>
  )
}

export default Login
const styles=StyleSheet.create(
  {
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20, 

    },
    
    LoginFormContainer:{
        marginTop:20,
        width:Dimensions.get('window').width-40,
    },
    inputContainer:{
      marginTop:8,
      marginBottom:16,
    },
    inputLabel:{
      fontWeight:'500',
      color:'#212121',
      fontSize:16,
      paddingLeft:10
    },
    input:{
       flex:1,
        backgroundColor:"white",
        marginTop:8,
        padding:10,
        borderRadius:100,
        minHeight:40,

    },
    buttonLogin:{
        height:40,
        backgroundColor:'coral',
        width:Dimensions.get('window').width-40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100,
    },
    buttonText:{
        fontWeight:'bold',
        fontSize:18,
        textTransform:'uppercase',
        color:'#fafafa'
    },
    buttonRegister:{
        marginVertical:20,
        justifyContent:'center',
        alignItems:'center'
    },

    LoginOrRegister:{
      fontWeight:"700",
      fontSize:25,
      marginTop:10,
      // fontStyle:"italic",
      color:"#212121",  
         
    },
    Title:{
      fontWeight:"bold", 
      fontSize:30,
      fontFamily:"inter",
      color:"#daa520",
      marginVertical:15
      
    }

    

  }

)