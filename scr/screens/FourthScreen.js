import React from "react";
import { InputComponent } from "../components/InputComponent";
import { View, Text, ImageBackground, TextInput, ScrollView } from "react-native";

const FourthScreen = () => {
    return (
        <View style={{ margin: 16 }}>
            <ScrollView>
                <ImageBackground style={{
                    width: '100%',
                    height: 300,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}
                    imageStyle={{ borderRadius: 10 }}
                    source={{ uri: 'https://wallpaperaccess.com/full/250180.jpg' }}>
                    <Text style={{
                        backgroundColor: 'mistyrose',
                        color: "black",
                        padding: 8,
                        margin: 8,
                        fontSize: 18,
                        fontWeight: 'bold',
                        borderRadius: 20
                    }}>
                        DisneyLand
                    </Text>
                </ImageBackground>

                <InputComponent
                    title="Description"
                    height={140}
                    placeholder="About the place"
                    multiline={true}
                    keyboardType="default"
                />

                <InputComponent
                    title="Phone Number"
                    height={40}
                    placeholder="Your Phone Number"
                    multiline={true}
                    keyboardType="numeric"
                />

                <InputComponent
                    title="Location"
                    height={40}
                    placeholder="Location"
                    multiline={true}
                    keyboardType="default"
                />
            </ScrollView>
        </View>
    )
};
// export default FourthScreen;
const ChallengeScreen4 = () => {
    return (
        <View style={{
            flex: 1
        }}>
            <ImageBackground
                style={{
                    flex: 1,
                    justifyContent: "center"
                }}
                imageStyle={{ opacity: 0.5 }}
                source={{ uri: 'https://i.pinimg.com/736x/e4/28/c5/e428c5f6e045bcf567fa4267f7985076.jpg' }}
            >
                <View style={{ alignItems: "flex-end" }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 30,
                        backgroundColor: 'beige',
                        padding: 8,
                        margin: 10,
                        borderRadius:10
                    }}>
                        Colosseum
                    </Text>
                </View>

                <View style={{
                    margin: 8,
                    padding: 8
                }}>
                    <ScrollView>

                        <InputComponent
                            title="Description"
                            height={140}
                            placeholder="About the place"
                            multiline={true}
                            keyboardType="default"
                        />

                        <InputComponent
                            title="Phone Number"
                            height={40}
                            placeholder="Your Phone Number"
                            multiline={true}
                            keyboardType="numeric"
                        />

                        <InputComponent
                            title="Location"
                            height={40}
                            placeholder="Location"
                            multiline={true}
                            keyboardType="default"
                        />
                    </ScrollView>
                </View>
            </ImageBackground>
        </View>
    )
};
export default ChallengeScreen4;