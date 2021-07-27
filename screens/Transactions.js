import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { Icon, Avatar } from "react-native-elements";

export default function Transactions() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.container}
    >
      <View style={styles.view}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
          <Icon name="chevron-back" type="ionicon" />
          <Icon name="search-outline" type="ionicon" />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          padding: 8,
          marginTop: 8,
          marginBottom: 5,
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 21, color: "blue" }}>
          Recent Transactions
        </Text>
        <Text style={{ position: "absolute", right: 18 }}>Sell all</Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            alignItems: "center",
            width: 60,
            borderRadius: 18,
            justifyContent: "center",
            marginRight: 15,
            padding: 5,
            backgroundColor: "blue",
            elevation: 8,
          }}
        >
          <Text style={{ color: "white" }}>All</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            width: 80,
            borderRadius: 18,
            justifyContent: "center",
            marginRight: 10,
            padding: 5,
            backgroundColor: "white",
            elevation: 8,
          }}
        >
          <Text>Income</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            width: 80,
            borderRadius: 18,
            justifyContent: "center",
            padding: 5,
            backgroundColor: "white",
            elevation: 8,
          }}
        >
          <Text>Expenses</Text>
        </View>
      </View>

      <Text
        style={{
          marginTop: 15,
          fontWeight: "bold",
          fontSize: 20,
          padding: 5,
          color: "blue",
        }}
      >
        Today
      </Text>

      <View
        style={{
          marginTop: 10,
          marginBottom: 25,
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
            color="#3e4685"
            name="receipt-outline"
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
          <Text style={{ fontWeight: "bold" }}>Payment</Text>
          <Text>Payment from Andrea</Text>
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
          <Text style={{ fontWeight: "bold", color: "blue" }}>$30.00</Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          borderRadius: 180,
          padding: 5,
          marginTop: 20,
          marginBottom: 20,
          width: 300,
          height: 280,
          borderColor: "grey",
          borderWidth: 1.5,
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: 210,
            height: 210,
            borderColor: "white",
            borderWidth: 5,
            backgroundColor: "#d6e7fc",
            padding: 10,
            borderRadius: 120,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 178,
              height: 178,
              backgroundColor: "#f2f8fd",
              padding: 10,
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              containerStyle={{
                padding: 8,
                backgroundColor: "blue",
                borderColor: "#3e4685",
                borderWidth: 5,
              }}
              size="xlarge"
              rounded
              //source={require("./assets/11.jpg")}
            />
          </View>
        </View>
        <Avatar
          containerStyle={{
            padding: 5,
            bottom: 26,
            elevation: 6,
            left: -10,
            position: "absolute",
            backgroundColor: "blue",
            borderColor: "white",
            borderWidth: 2,
          }}
          size={65}
          rounded
          //source={require("./assets/6.jpg")}
        />
        <Avatar
          containerStyle={{
            padding: 5,
            bottom: 180,
            elevation: 8,
            left: -12,
            position: "absolute",
            backgroundColor: "blue",
            borderColor: "white",
            borderWidth: 2,
          }}
          size={65}
          rounded
          //source={require("./assets/7.jpg")}
        />
        <Avatar
          containerStyle={{
            padding: 5,
            bottom: 250,
            elevation: 4,
            left: 120,
            position: "absolute",
            backgroundColor: "blue",
            borderColor: "white",
            borderWidth: 2,
          }}
          size={65}
          rounded
          //source={require("./assets/8.jpg")}
        />
        <Avatar
          containerStyle={{
            padding: 5,
            bottom: 30,
            elevation: 8,
            right: -10,
            position: "absolute",
            backgroundColor: "blue",
            borderColor: "white",
            borderWidth: 2,
          }}
          size={65}
          rounded
          //source={require("./assets/9.jpg")}
        />
        <Avatar
          containerStyle={{
            padding: 5,
            bottom: 180,
            elevation: 8,
            right: -12,
            position: "absolute",
            backgroundColor: "blue",
            borderColor: "white",
            borderWidth: 2,
          }}
          size={65}
          rounded
          //source={require("./assets/10.jpg")}
        />
      </View>
      <View style={styles.view1}>
        <TouchableOpacity>
          <Text style={{ fontWeight: "bold", color: "white" }}>
            See Details
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f8fd",
    width: "100%",
    height: "100%",
    paddingLeft: 20,
    paddingRight: 20,

  },
  view: {
    padding: 8,
    backgroundColor: "#f2f8fd",
    width: "95%",
    borderRadius: 12,
    marginTop: 5,
    alignSelf: "center",
    justifyContent: 'space-evenly'
  },
  view1: {
    flex: .3,
    padding: 8,
    backgroundColor: "blue",
    width: "100%",
    height: 43,
    borderRadius: 40,
    marginTop: 1,
    marginBottom: 18,
    alignItems: "center",
  },
});
