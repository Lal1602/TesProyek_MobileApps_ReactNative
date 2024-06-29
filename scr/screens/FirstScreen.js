import React from "react";
import { View, Text, Button } from "react-native";

const FirstScreen = () => {
    const openAlert = () => {
        alert('You clicked the button!');
    };

    return (
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
            }}>
            <Text style={{margin:16}}>
                Hello
                <Text style={{color:'red'}}>World!</Text>
            </Text>
            <Button
            title="This is Button"
            onPress={openAlert}/>
        </View>
    )
};

const ChallengeScreen = () => {
    const openAlert1 = () => {
        alert('You are awesome!!!');
    };
    return (
        <View style={{
            flex:1,
            margin:"auto",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <Text style={{
                color:'green'
            }}>
                Let's Learn React Native Framework
            </Text>
            <Text>
                My Name Is Bilal
            </Text>
            <Text>
                Now I'm learning about <Text style={{
                    color:'blue'
                }}>React Native Components </Text>
            </Text>
            <Text>to build the user interface for android apps</Text>
            <Text style={{
                color:'red',
                margin:16
            }}>
                I Love Coding
            </Text>
            <Button title="Click Me" onPress={openAlert1}></Button>
        </View>
    )
}

// export default FirstScreen;
export default ChallengeScreen;