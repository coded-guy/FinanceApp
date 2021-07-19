import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";


const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.displayPic}>
        {/* <Image source={require('./pics/logo.png.jpg')} /> */}
      </View>
      <View style={styles.box}>
        <TextInput
          placeholder="Username"
          placeholderTextColor="purple"
          // backgroundColor="green"
        />
      </View>
      <View style={styles.box}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="purple"
          // backgroundColor="orange"
        />
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.signUp}>
        <Text style={{ color: "blue", marginRight: 55 }}>Sign Up</Text>
        <Text style={{ color: "blue", marginLeft: 50 }}>Forgot Password?</Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "azure",
    justifyContent: "center",
    alignItems: "center",
  },
  displayPic: {
    backgroundColor: "blue",
    height: 150,
    width: 150,
    borderRadius: 75,
    marginBottom: 100,
  },
  box: {
    backgroundColor: "white",
    height: 70,
    width: 250,
    margin: 15,
    padding: 20,
    borderRadius: 20,
    justifyContent: "center",
  },
  loginButton: {
    backgroundColor: "blue",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 50,
    width: 250,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  loginText: {
    color: "white",
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  signUp: {
    flexDirection: "row",
    padding: 10,
    fontSize: 18,
  },
});

