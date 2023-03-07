import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

const Homescreen = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "#CD853F",
          padding: 10,
          height: 200,
          width: "100%",
        }}
      >
        {/* puts in top lettering of Homescreen and color: white */}
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          {" "}
          HOME WORKOUT{" "}
        </Text>

        {/* takes parent view and places it in a row  with all items in center and space between them, margin top to give space above*/}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View>
            {/* aligns workout centered under the 0, with white lettering */}
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              0
            </Text>
            <Text>WORKOUTS</Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              0
            </Text>
            <Text>KCALs</Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              0
            </Text>
            <Text>MINS</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({});
