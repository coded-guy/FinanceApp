import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function UserImage({ navigation, disabled, style }) {
  return (
    <TouchableOpacity
      style={[style, styles.userImage]}
      disabled={disabled}
    ></TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  userImage: {
    height: 100,
    width: 100,
    backgroundColor: "blue",
    borderRadius: 50,
    shadowColor: "#c64b50",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
});
