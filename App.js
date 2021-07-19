import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './screens/Home';
import Login from './screens/Login';
import {
  useFonts,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Icon } from "react-native-eva-icons";
//import UserImage from "./newapp/components/UserImage.js";
//import NewText from "./newapp/components/NewText.js";


const Stack = createStackNavigator();

const LoginScreen = ({ navigation }) => (
  <Screen>
    <Login navigation={navigation} />
  </Screen>
);

const HomeScreen = ({ navigation }) => (
  <Screen>
    <Home navigation={navigation} />
  </Screen>
);

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Details" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
};   


const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

function Screen({ children }) {
  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {children}
      </View>
    </DismissKeyboard>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf2fb",
  },
});