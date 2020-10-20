import React, { useState }  from "react";
import { StyleSheet, Text, View,Image,TouchableOpacity, ImageBackground } from 'react-native';
const util =require("util");

const dice ={

    1:require("./assets/white_dice_1_resize.png"),
    2:require("./assets/white_dice_2_resize.png"),
    3:require("./assets/white_dice_3_resize.png"),
    4:require("./assets/white_dice_4_resize.png"),
    5:require("./assets/white_dice_5_resize.png"),
    6:require("./assets/white_dice_6_resize.png"),
  
  }


export default function Snake_and_ladders() {
    
    const [random_dice1,setDice1]=useState("1");
  
  function rolling()
  {
    const random_dice1=(Math.floor(Math.random()* 6 + 1)).toString();
  
    setDice1(random_dice1)
  
  
  }
  
  
    return (
     
  
      <View style={styles.container}>
  
      <ImageBackground source={require('./assets/snake_board.jpg')} style={
        styles.backgroundImage
        }>
        <View
        style={{
          flexDirection:"row",
          justifyContent:"center",
        }}
        >
  
        
  
          <Image
            source={dice[random_dice1]}
            style={{
              width:128 ,
              height:128 
            }
            }
          />
        </View>
  
        <TouchableOpacity 
        onPress={rolling}
        >
  
          <View style={{
            backgroundColor:"#5c5c3d",
            marginLeft:80,
            marginRight:80,
            marginTop: 50,
            paddingHorizontal:60,
            paddingVertical: 20,
            borderRadius:10
          }}>
            <Text style={{
              color:"white"
            }}
            >ROLL DICE</Text>
            
  
          </View>
  
  
        </TouchableOpacity>
  
        </ImageBackground>
       
      </View> 
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb3b3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent:'center'
  }
  
});