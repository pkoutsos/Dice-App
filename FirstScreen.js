import React from "react";
import {
    Text,
    View,
    Button,
    StyleSheet
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const util =require("util");

export default class FirstScreen extends React.Component{
    static navigationOptions = {
        title: "First screen",
    };
    render(){
        console.log("this.props.navigation = "+util.inspect(this.props.navigation,false,null));
        var{navigate} = this.props.navigation;
        return(

            <View style={styles.container}>


            <View style={styles.countContainer}>
                <Text style={styles.baseText}>Select Dices for your game:</Text>
                <TouchableOpacity style = {styles.Button}
                    onPress = {
                        ()=>navigate("Monopoly", {name:"hoang"})
                    }>
                        <Text>Monopoly</Text>
                    </TouchableOpacity>
                    
                    
                <TouchableOpacity style = {styles.Button}
                    onPress = {
                        ()=>navigate("Tavla")
                    }>
                    <Text>Tavla</Text>
                    </TouchableOpacity>
                    
                <TouchableOpacity style = {styles.Button}
                    onPress = {
                        ()=>navigate("Snake")
                    }>
                    <Text>Snake and ladders</Text>
                    </TouchableOpacity>
            </View>

           </View>

        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "space-between",
        backgroundColor: '#ffb3b3',
        alignItems:"center",
        justifyContent:"center",
        textAlign:'center',
        paddingVertical:10
    },

    Button:
    {
        flexDirection:"column",
        paddingTop: "10%",
        textAlign:'center',
        alignItems: "center",
        backgroundColor: "#4da6ff",
        padding: 10
        
    },

    baseText: {
        fontWeight: 'bold',
        fontSize:17,
        paddingBottom:20
        
      }
    
  });
