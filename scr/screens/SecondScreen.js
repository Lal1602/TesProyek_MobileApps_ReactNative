import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { blue, red } from "react-native-reanimated";

const SecondScreen = () => {

    const openAlert = (game) => {
        if (game === 'mobileLegends') {
            alert('You choose Mobile Legends!');
        } else if (game === 'pubg') {
            alert('You Choose PUBG!');
        }
    };

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'lavender',
            justifyContent: "center",
            alignItems: "center"
        }}>
            <View style={{
                backgroundColor: 'skyblue',
                margin: 15,
                padding: 25,
                paddingVertical: 8,
                paddingHorizontal: 8,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 2,
                borderStyle: "dashed",
                borderColor: "red",
                borderRadius: 20
            }}>
                <Text style={{ fontWeight: "bold" }}>
                    Mobile Legends
                </Text>
                <Text><Text style={{ color: "purple" }}>Mobile Legends</Text> is a multiplayer online battle arena (MOBA) game. The two
                    opposing teams fight to reach and destroy the enemy’s base while defending
                    their own base for control of a path.</Text>
            </View>

            <View>
                <TouchableOpacity style={{
                    backgroundColor: "white",
                    padding: 8,
                    margin: 8,
                    borderRadius: 50,
                    borderWidth: 2
                }}
                    onPress={() => openAlert('mobileLegends')}>
                    <Text style={{ color: 'lightcoral' }}>
                        Mobile Legends Button
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{
                backgroundColor: 'cornflowerblue',
                margin: 15,
                padding: 25,
                paddingVertical: 8,
                paddingHorizontal: 8,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 2,
                borderStyle: "dotted",
                borderColor: "red",
                borderRadius: 10
            }}>
                <Text style={{ fontWeight: "bold" }}>
                    PUBG
                </Text>
                <Text><Text style={{ color: "purple" }}>PlayerUnknown’s Battlegrounds,</Text> better known as PUBG, is a multiplayer battle royale
                    game in which players drop onto an island and fight to be the last one left standing.</Text>
            </View>

            <View>
                <TouchableOpacity style={{
                    backgroundColor: "white",
                    padding: 8,
                    margin: 8,
                    borderRadius: 50,
                    borderWidth: 2
                }}
                    onPress={() => openAlert('pubg')}>
                    <Text style={{ color: 'lightcoral' }}>
                        PUBG Button
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
};

// export default SecondScreen;
const ChallengeScreen2 = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: 'lavender'
        }}>
            <View>
                <Text style={{
                    color: "darkblue",
                    fontSize: 20,
                    fontWeight: "bold",
                    textDecorationLine: "underline"
                }}>
                    iOS
                </Text>
            </View>
            <View style={{
                backgroundColor: '#FFBD33',
                margin: 5,
                padding: 10,
                borderWidth: 2,
                borderStyle: "dotted",
                borderRadius: 20
            }}>
                <Text>
                    <Text style={{ fontWeight: "bold" }}>iOS </Text> (formerly iPhone OS) is a mobile operating
                    system created and developed by <Text style={{ color: "red", fontStyle: "italic" }}>Apple Inc. </Text>
                    exclusively for its hardware. It is the operating
                    system that powers many of the company’s mobile
                    devices, including the iPhone and iPod Touch.
                </Text>
            </View>
            <View>
                <Text>
                    VS.
                </Text>
            </View>
            <View>
                <Text style={{
                    color: "green",
                    fontSize: 20,
                    fontWeight: "bold",
                    textDecorationLine: "underline"
                }}>
                    ANDROID
                </Text>
            </View>
            <View style={{
                backgroundColor: '#DAF7A6',
                margin: 5,
                padding: 10,
                borderWidth: 2,
                borderStyle: "dotted",
                borderRadius: 20
            }}>
                <Text>
                    <Text style={{ fontWeight: "bold" }}>Android </Text> is a mobile operating system based on a
                    modified version of the Linux kernel and other open
                    source software, designed primarily for
                    touchscreen mobile devices such as smartphones and
                    tablets. Android is developed by a consortium of
                    developers known as the <Text style={{ color: "purple", fontStyle: "italic" }}>Open Handset Alliance </Text> and
                    commercially sponsored by <Text style={{ color: "blue", fontStyle: "italic" }}>Google.</Text>
                </Text>
            </View>
        </View>
    )
}

export default ChallengeScreen2;