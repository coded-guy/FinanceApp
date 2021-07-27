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
import { Icon } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";


const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.displayPic}>
        {/* <Image source={require('./pics/logo.png.jpg')} /> */}
      </View>
      <View style={styles.box}>
        <Icon
          containerStyle={{ position: "absolute", left: 10 }}
          name="mail-outline"
          type="ionicon"
        />
        <TextInput
          placeholder="     Username"
          placeholderTextColor="purple"
          // backgroundColor="green"
        />
      </View>
      <View style={styles.box}>
        <Icon
          containerStyle={{ position: "absolute", left: 10 }}
          name="lock-closed-outline"
          type="ionicon"
        />
        <TextInput
          placeholder="    Password"
          placeholderTextColor="purple"

          // backgroundColor="orange"
        />
        <Icon
          containerStyle={{ position: "absolute", right: 3 }}
          name="eye-outline"
          type="ionicon"
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
        <Text style={{ color: "blue", marginLeft: 60 }}>Forgot Password?</Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f8fd",
    justifyContent: "center",
    alignItems: "center",
  },
  displayPic: {
    backgroundColor: "blue",
    height: 150,
    width: 150,
    borderRadius: 75,
    marginBottom: 60,
  },
  box: {
    backgroundColor: "white",
    height: 70,
    width: 300,
    margin: 15,
    padding: 20,
    borderRadius: 20,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  loginButton: {
    backgroundColor: "blue",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 50,
    width: 300,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  loginText: {
    color: "white",
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  signUp: {
    flexDirection: "row",
    padding: 1,
    fontSize: 18,
    marginTop: 1,
  },
});

