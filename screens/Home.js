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
import UserImage from '../components/UserImage'
import NewText from '../components/NewText'

export default function Home() {
    return (
      <View>
        <View style={styles.profileInfo}>
          <UserImage disabled style={{ margin: 10 }} />
          <View style={styles.profileName}>
            <NewText content="Hira Riaz" dark bold h3 />
          </View>
          <View style={styles.profileBio}>
            <NewText content={`UI/UX Designer`} light h4 />
          </View>
          <View style={styles.profileStats}>
            <Stat number={8900} name="Income" />
            <Stat number={5500} name="Expenses" />
            <Stat number={890} name="Loan" />
          </View>
        </View>
        <View style={styles.words}>
          <Text style={{marginRight:80, fontSize:20, fontWeight:'bold'}}>Overview</Text>
          <Text style={{marginLeft:60}}>Sept 13 2020</Text>
        </View>
      </View>
    );
}

const Stat = ({ name, number }) => {
    return (
      <View style={styles.stat}>
        <NewText content={'$'+ number} dark bold h3 />
        <NewText content={name} light h4 />
      </View>
    );
}



const styles = StyleSheet.create({
    profileInfo: {
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: "#b0c6e1",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        width: '90%',
        paddingRight: 50,
        paddingLeft: 50,
        paddingBottom: 20,
        margin: 20,
        borderRadius: 20,
    },
    profileName: {
        marginTop: 10,
        marginBottom: 5,
    },
    profileBio: {
        marginTop: 5,
        marginBottom: 5,
    },
    profileStats: {
        flexDirection: 'row',
        marginTop: 10,
    },
    stat: {
        alignItems: 'center',
        margin: 1,
        padding: 10,
    },
    words: {
      flexDirection: 'row',
      paddingLeft: 40,
    
    },
})
