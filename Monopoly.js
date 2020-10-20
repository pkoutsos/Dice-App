import React, { useState }  from "react";
import { StyleSheet, Text, View,Image,TouchableOpacity, ImageBackground } from 'react-native';
const util =require("util");

const dice ={

    1:require("./assets/red_dice_1.png"),
    2:require("./assets/red_dice_2.png"),
    3:require("./assets/red_dice_3.png"),
    4:require("./assets/red_dice_4.png"),
    5:require("./assets/red_dice_5.png"),
    6:require("./assets/red_dice_6.png"),
  
  }

/*export default class SecondScreen extends React.Component{
    static navigationOptions = {
        title: "Second screen",
    };
    render(){
        console.log("this.props.navigation.state = "+util.inspect(this.props.navigation.state,false,null));
        var {params} = this.props.navigation.state;
        return(
            <View>
                <Text>This is screen 2</Text>
                <Text>Params from screen1: {params.name}</Text>
            </View>
        )
    }

}*/
export default function Monopoly() {
    
    const [random_dice1,setDice1]=useState("1");
    const [random_dice2,setDice2]=useState("5");
  
  function rolling()
  {
    const random_dice1=(Math.floor(Math.random()* 6 + 1)).toString();
    const random_dice2=(Math.floor(Math.random()* 6 + 1)).toString();
  
    setDice1(random_dice1)
    setDice2(random_dice2)
  
  
  }
  
  
    return (
     
  
      <View style={styles.container}>
  
      <ImageBackground source={require('./assets/monopoly_background.png')} style={
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
  
          <Image
            source={dice[random_dice2]}
            style={{
              width:128 ,
              height:128 ,
              marginStart: 20
            }
            }
          />
  
        </View>
  
        <TouchableOpacity 
        onPress={rolling}
        >
  
          <View style={{
            backgroundColor:"#a8a832",
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
            >ROLL DICES</Text>
            
  
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