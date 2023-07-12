import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";

function MainScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <Image source={require("../assets/logo.png")} />
      <Text style={styles.title} title="Hello">
        <Text style={styles.firstTitle}>W</Text>eather{" "}
        <Text style={styles.firstTitle}>A</Text>pp
      </Text>

      <View style={styles.mainBtn}>
        <Pressable
          style={styles.button}
          onPress={() => alert("Comming Soon, Try as a Guest")}
        >
          <Text style={styles.text}>Login</Text>
          <Text style={[styles.text, styles.signup]}>SignUp</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Weather")}
        >
          <Text style={[styles.text, styles.guest]}>As Guest</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "600",
    color: "#000",
    marginBottom: 40,
  },
  firstTitle: {
    color: "black",
    fontWeight: "bold",
  },
  mainBtn: {
    width: "50%",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    padding: 10,
    backgroundColor: "black",
    elevation: 3,
    borderRadius: 10,
    paddingHorizontal: 52,
    paddingVertical: 12,
    opacity: 0.7,
  },
  signup: {
    marginTop: 20,
  },
  guest: {
    marginTop: 20,
  },
});

export default MainScreen;
