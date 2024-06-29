import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import { Feed, Story } from "../components/InstagramComponent";

const InstagramHomeScreen = () => {
    return (
        // Footer
        <View style={{
            flex: 1
        }}>
            <ScrollView>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    {/* Instagram Logo Text */}
                    <Text style={{
                        fontFamily: 'StyleScript-Regular',
                        fontSize: 40,
                        marginLeft: 16,
                        color: 'black'
                    }}>
                        Instegrem
                    </Text>

                    {/* Icon On The Right Top */}
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 8
                    }}>
                        <View style={{
                            margin: 8
                        }}>
                            <Icon
                                name="plus-square-o"
                                type="font-awesome"
                                size={26}
                            />
                        </View>

                        <View style={{
                            margin: 8
                        }}>
                            <Icon
                                name="heart-o"
                                type="font-awesome"
                                size={26}
                            />
                        </View>

                        <View style={{
                            margin: 8
                        }}>
                            <Icon
                                name="paper-plane-outline"
                                type="ionicon"
                                size={26}
                            />
                        </View>
                    </View>
                </View>


                {/* Main */}
                <ScrollView horizontal>
                    <View style={{
                        flexDirection: 'row',
                        marginLeft: 8,
                        marginRight: 8,
                        marginBottom: 8,
                    }}>
                        <Story
                            profile={require('../../assets/images/FifthScreenAssets/profilePicture1.png')}
                            username="Catherine"
                        />
                        <Story
                            profile={require('../../assets/images/FifthScreenAssets/profilePicture2.png')}
                            username="Bilal"
                        />
                        <Story
                            profile={require('../../assets/images/FifthScreenAssets/profilePicture3.png')}
                            username="Cindy"
                        />
                        <Story
                            profile={require('../../assets/images/FifthScreenAssets/profilePicture4.png')}
                            username="Sammy"
                        />
                        <Story
                            profile={require('../../assets/images/FifthScreenAssets/profilePicture5.png')}
                            username="Claudy"
                        />
                    </View>
                </ScrollView>


                {/* Footer */}
                <Feed
                    profile={require('../../assets/images/FifthScreenAssets/profilePicture1.png')}
                    username="Catherine"
                    post={{ uri: 'https://wallpaperaccess.com/full/201215.jpg' }}
                />

                <Feed
                    profile={require('../../assets/images/FifthScreenAssets/profilePicture2.png')}
                    username="Bilal"
                    post={{ uri: 'https://images4.alphacoders.com/292/292026.jpg' }}
                />

                <Feed
                    profile={require('../../assets/images/FifthScreenAssets/profilePicture3.png')}
                    username="Cindy"
                    post={{ uri: 'https://wallpaperaccess.com/full/496881.jpg' }}
                />

                <Feed
                    profile={require('../../assets/images/FifthScreenAssets/profilePicture4.png')}
                    username="Sammy"
                    post={{ uri: 'https://images5.alphacoders.com/316/316297.jpg' }}
                />

                <Feed
                    profile={require('../../assets/images/FifthScreenAssets/profilePicture5.png')}
                    username="Claudy"
                    post={{ uri: 'https://wallpaperaccess.com/full/1403923.jpg' }}
                />
            </ScrollView>
        </View>
    )
}

export default InstagramHomeScreen;