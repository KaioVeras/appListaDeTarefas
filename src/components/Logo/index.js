import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Logo() {
  return (
    <View style={styles.containerLogo}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.textoLogo}>TaskMinder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 80,
    width: 80,
  },
  containerLogo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -15,
    marginLeft: -13,
  },
  textoLogo: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    marginLeft: -15,
  },
});
