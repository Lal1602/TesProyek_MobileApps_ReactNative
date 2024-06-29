import React from 'react';
import { View, Text, Image, ScrollView } from "react-native";
import { green } from 'react-native-reanimated';

const Thirdscreen = () => {
  return (
    <View style={{
      backgroundColor: "mistyrose",
      flex: 1,
      flexDirection: 'row'
    }}>
      <View style={{
        backgroundColor: 'red',
        flex: 1
      }}>
        <Text style={{
          color: "white"
        }}>
          Pikachu
        </Text>
      </View>
      <View style={{
        backgroundColor: 'orange',
        flex: 1
      }}>
        <Text style={{
          color: ""
        }}>
          Flareon
        </Text>
      </View>

      <View style={{
        backgroundColor: 'yellow',
        flex: 1
      }}>
        <Text style={{
          color: ""
        }}>
          Rapidash
        </Text>
      </View>
    </View>
  )
};
// export default Thirdscreen;

// const AddImage = () => {
//   return (
//     <View style={{ flexDirection: 'row' }}>
//       <ScrollView horizontal>
//         <View style={{
//           margin: 8,
//           padding: 8
//         }}>
//           <Image
//             style={{
//               width: 150,
//               height: 150,
//               borderRadius: 100,
//               borderWidth: 1,
//               borderColor: "green",
//               backgroundColor: 'aliceblue'
//             }}

//             source={require('../../assets/images/pikachu.png')}
//           />
//         </View>

//         <View style={{
//           margin: 8,
//           padding: 8
//         }}>
//           <Image
//             style={{
//               width: 150,
//               height: 150,
//               borderRadius: 100,
//               borderWidth: 1,
//               borderColor: "green",
//               backgroundColor: 'aliceblue'
//             }}

//             source={require('../../assets/images/flareon.png')}
//           />
//         </View>

//         <View style={{
//           margin: 8,
//           padding: 8
//         }}>
//           <Image
//             style={{
//               width: 150,
//               height: 150,
//               borderRadius: 100,
//               borderWidth: 1,
//               borderColor: "green",
//               backgroundColor: 'aliceblue'
//             }}

//             source={require('../../assets/images/rapidash.png')}
//           />
//         </View>

//         <View style={{
//           margin: 8,
//           padding: 8
//         }}>
//           <Image
//             style={{
//               width: 150,
//               height: 150,
//               borderRadius: 100,
//               borderWidth: 1,
//               borderColor: "green",
//               backgroundColor: 'aliceblue'
//             }}

//             source={{ uri: 'https://i.ibb.co/bLz74hj/psyduck.png' }}
//           />
//         </View>

//         <View style={{
//           margin: 8,
//           padding: 8
//         }}>
//           <Image
//             style={{
//               width: 150,
//               height: 150,
//               borderRadius: 100,
//               borderWidth: 1,
//               borderColor: "green",
//               backgroundColor: 'aliceblue'
//             }}

//             source={{ uri: 'https://i.ibb.co/GQBLC7r/bulbasaur.png' }}
//           />
//         </View>
//       </ScrollView>
//     </View>
//   )
// };
// export default AddImage;

const ChallengeScreen3 = () => {
  return (
    <ScrollView>
      <View>
        <View style={{ alignItems: 'center', margin: 8 }}>
          <Text style={{
            textDecorationLine:"underline",
            color:"blue",
            fontWeight:"bold",
            fontSize:20
          }}>Pokemon's Profiles</Text>
        </View>

        <ScrollView>
          <View style={{
            margin: 8,
            padding: 8,
            flexDirection: 'row'
          }}>
            <ScrollView horizontal>
              <Image style={{
                width: 150,
                height: 150,
                borderWidth: 1.5,
                borderColor: "green",
                borderRadius: 20,
                backgroundColor: 'aliceblue'
              }}
                source={require('../../assets/images/ThirdScreenAssets/pikachu.png')}
              />

              <View style={{
                marginLeft: 20,
                justifyContent: 'center'
              }}>
                <Text style={{
                  fontWeight:'bold'
                }}>
                  Name  : Pikachu
                  {'\n'}
                  Category  : Mouse
                  {'\n'}
                  Abilities : Static
                  {'\n'}
                  Weaknesses : Ground
                </Text>
              </View>
            </ScrollView>
          </View>
        </ScrollView>

        <ScrollView>
          <View style={{
            margin: 8,
            padding: 8,
            flexDirection: 'row'
          }}>
            <ScrollView horizontal>
              <Image style={{
                width: 150,
                height: 150,
                borderWidth: 1.5,
                borderColor: "green",
                borderRadius: 20,
                backgroundColor: 'aliceblue'
              }}
                source={require('../../assets/images/ThirdScreenAssets/flareon.png')}
              />

              <View style={{
                marginLeft: 20,
                justifyContent: 'center'
              }}>
                <Text style={{
                  fontWeight:'bold'
                }}>
                  Name  : Flareon
                  {'\n'}
                  Category  : Flame
                  {'\n'}
                  Abilities : Flash Fire
                  {'\n'}
                  Weaknesses : Water, Ground, Rock
                </Text>
              </View>
            </ScrollView>
          </View>
        </ScrollView>

        <ScrollView>
          <View style={{
            margin: 8,
            padding: 8,
            flexDirection: 'row'
          }}>
            <ScrollView horizontal>
              <Image style={{
                width: 150,
                height: 150,
                borderWidth: 1.5,
                borderColor: "green",
                borderRadius: 20,
                backgroundColor: 'aliceblue'
              }}
                source={require('../../assets/images/ThirdScreenAssets/rapidash.png')}
              />

              <View style={{
                marginLeft: 20,
                justifyContent: 'center'
              }}>
                <Text style={{
                  fontWeight:'bold'
                }}>
                  Name  : Rapidash
                  {'\n'}
                  Category  : Fire Horse
                  {'\n'}
                  Abilities : Run Away, Flash Fire
                  {'\n'}
                  Weaknesses : Water, Ground, Rock
                </Text>
              </View>
            </ScrollView>
          </View>
        </ScrollView>

        <ScrollView>
          <View style={{
            margin: 8,
            padding: 8,
            flexDirection: 'row'
          }}>
            <ScrollView horizontal>
              <Image style={{
                width: 150,
                height: 150,
                borderWidth: 1.5,
                borderColor: "green",
                borderRadius: 20,
                backgroundColor: 'aliceblue'
              }}
                source={{uri: 'https://i.ibb.co/bLz74hj/psyduck.png'}}
              />

              <View style={{
                marginLeft: 20,
                justifyContent: 'center'
              }}>
                <Text style={{
                  fontWeight:'bold'
                }}>
                  Name  : Psyduck
                  {'\n'}
                  Category  : Duck
                  {'\n'}
                  Abilities : Dump, Cloud Nine
                  {'\n'}
                  Weaknesses : Grass, Electric
                </Text>
              </View>
            </ScrollView>
          </View>
        </ScrollView>

        <ScrollView>
          <View style={{
            margin: 8,
            padding: 8,
            flexDirection: 'row'
          }}>
            <ScrollView horizontal>
              <Image style={{
                width: 150,
                height: 150,
                borderWidth: 1.5,
                borderColor: "green",
                borderRadius: 20,
                backgroundColor: 'aliceblue'
              }}
                source={{uri: "https://i.ibb.co/GQBLC7r/bulbasaur.png"}}
              />

              <View style={{
                marginLeft: 20,
                justifyContent: 'center'
              }}>
                <Text style={{
                  fontWeight:'bold'
                }}>
                  Name  : Bulbasaur
                  {'\n'}
                  Category  : Seed
                  {'\n'}
                  Abilities : Overgrow
                  {'\n'}
                  Weaknesses : Fire, Psychic, Flying, Ice
                </Text>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  )
};
export default ChallengeScreen3;