import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

// First Screen
import FirstScreen from "./scr/screens/FirstScreen";
import ChallengeScreen from "./scr/screens/FirstScreen";

// Second Screen
import SecondScreen from "./scr/screens/SecondScreen";
import ChallengeScreen2 from "./scr/screens/SecondScreen";

// Third Screen
import Thirdscreen from "./scr/screens/ThirdScreen";
import AddImage from "./scr/screens/ThirdScreen";
import ChallengeScreen3 from "./scr/screens/ThirdScreen";

// Fourth Screen
import FourthScreen from "./scr/screens/FourthScreen";
import ChallengeScreen4 from "./scr/screens/FourthScreen";

// Fifth Screen
import InstagramHomeScreen from "./scr/screens/InstagramHomeScreen";

const App = () => {
  return (
    <SafeAreaProvider>
      <InstagramHomeScreen/>
    </SafeAreaProvider>
  )
}

export default App;