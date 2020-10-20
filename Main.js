import React ,{Component} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity, ImageBackground, Button } from 'react-native';

export default class Main extends Component{
    render(){
        return(
            <View>
                <Text>Home Screen</Text>
                <Button title="Go to the Button screen"
                onPress={()=>this.props.navigation.navigate("buttons")}/>
            </View>
        );
    }
}