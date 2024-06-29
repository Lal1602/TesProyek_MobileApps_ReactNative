import React from "react";
import { View, Text, TextInput } from "react-native";

export const InputComponent = (props) => {
    const { title, height } = (props);
    return (
        <View>
            <Text style={{
                marginTop: 12,
                marginBottom: 12,
                fontSize:16,
                fontWeight:'bold'
            }}>
                {title}
            </Text>
            <TextInput style={{
                padding: 10,
                borderWidth: 2,
                height: height,
                fontSize: 16,
                borderRadius:10,
                fontWeight:'bold'
            }}
                {...props}
            />
        </View>
    )
}