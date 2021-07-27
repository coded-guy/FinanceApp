import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { Icon, Avatar } from "react-native-elements";

const Home = ({navigation}) => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.container}
    >
      <View style={styles.view}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Icon name="list-outline" type="ionicon" />
          <Icon name="ellipsis-vertical-outline" type="ionicon" />
        </View>
        <View style={{ alignItems: "center", flex: 1 }}>
          <Avatar
            containerStyle={{
              padding: 8,
              backgroundColor: "blue",
              borderColor: "#3e4685",
              borderWidth: 2,
            }}
            //source={require("./assets/11.jpg")}
            rounded={true}
            size="large"
          />
          <Text style={{ fontWeight: "bold", color: "blue", fontSize: 23 }}>
            Demi Baller
          </Text>
          <Text>UI-UX Designer</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 25,
            marginBottom: 30,
          }}
        >
          <View
            style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
          >
            <Text style={{ fontWeight: "bold", color: "blue" }}>$89000</Text>
            <Text>Income</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              borderRightWidth: 0.3,
              borderLeftWidth: 0.3,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "blue" }}>$55000</Text>
            <Text>Expenses</Text>
          </View>
          <View
            style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
          >
            <Text style={{ fontWeight: "bold", color: "blue" }}>$890</Text>
            <Text>Loan</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          padding: 8,
          marginTop: 10,
          marginBottom: 19,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("History")}>
          <Text style={{ fontWeight: "bold", fontSize: 22, color: "blue" }}>
            Overview
          </Text>
        </TouchableOpacity>

        <Icon
          containerStyle={{ marginLeft: 5 }}
          name="notifications-outline"
          type="ionicon"
        />
        <Text style={{ position: "absolute", right: 15, color: "blue" }}>
          Sept 30,2020
        </Text>
      </View>

      <View
        style={{
          width: "99%",
          alignSelf: "center",
          flexDirection: "row",
          backgroundColor: "white",
          borderRadius: 15,
          elevation: 8,
          padding: 5,
        }}
      >
        <View
          style={{
            flex: 1,
            padding: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            name="arrow-up"
            type="ionicon"
            containerStyle={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#e3e3e3",
              width: 55,
              height: 50,
              padding: 10,
              borderRadius: 15,
            }}
          />
        </View>
        <View style={{ flex: 4, padding: 5, justifyContent: "center" }}>
          <Text style={{ fontWeight: "bold" }}>Sent</Text>
          <Text>Sending payment to client</Text>
        </View>
        <View
          style={{
            flex: 1,
            padding: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text></Text>
          <Text style={{ fontWeight: "bold" }}>$150</Text>
        </View>
      </View>

      <View
        style={{
          width: "99%",
          alignSelf: "center",
          flexDirection: "row",
          marginTop: 10,
          backgroundColor: "white",
          borderRadius: 15,
          elevation: 8,
          padding: 5,
        }}
      >
        <View
          style={{
            flex: 1,
            padding: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            name="arrow-down"
            type="ionicon"
            containerStyle={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#e3e3e3",
              width: 55,
              height: 50,
              padding: 10,
              borderRadius: 15,
            }}
          />
        </View>
        <View style={{ flex: 4, padding: 5, justifyContent: "center" }}>
          <Text style={{ fontWeight: "bold" }}>Recieve</Text>
          <Text>Recieving salary from company</Text>
        </View>
        <View
          style={{
            flex: 1,
            padding: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text></Text>
          <Text style={{ fontWeight: "bold" }}>$250</Text>
        </View>
      </View>

      <View
        style={{
          width: "99%",
          alignSelf: "center",
          flexDirection: "row",
          marginTop: 10,
          backgroundColor: "white",
          borderRadius: 15,
          elevation: 8,
          padding: 5,
        }}
      >
        <View
          style={{
            flex: 1,
            padding: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            name="wallet-outline"
            type="ionicon"
            containerStyle={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#e3e3e3",
              width: 55,
              height: 50,
              padding: 10,
              borderRadius: 15,
            }}
          />
        </View>
        <View style={{ flex: 4, padding: 5, justifyContent: "center" }}>
          <Text style={{ fontWeight: "bold" }}>Loan</Text>
          <Text>Loan for the car</Text>
        </View>
        <View
          style={{
            flex: 1,
            padding: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text></Text>
          <Text style={{ fontWeight: "bold" }}>$400</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          marginTop: 15,
          padding: 10,
          justifyContent: "space-between",
          //borderWidth: 1,
        }}
      >
        <Icon name="home-outline" type="ionicon" size={30} />
        <Icon name="card-outline" type="ionicon" size={30} />
        <Icon
          color="white"
          containerStyle={{
            backgroundColor: "blue",
            width: 45,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
          name="add"
          type="ionicon"
        />
        <Icon name="dollar-sign" type="feather" size={30} />
        <Icon name="person-circle-outline" type="ionicon" size={30} />
      </View>
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f8fd",
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
  },
  view: {
    padding: 10,
    backgroundColor: "#fff",
    width: "98%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderRadius: 12,
    marginTop: 30,
    alignSelf: "center",
  },
});

