import React, { useState } from "react";
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
} from "react-native";
import axios from "axios";

function WeatherScreen({ navigation }) {
  const [cityData, setCityData] = useState([]);
  const [cityName, setCityName] = useState("");

  const temp = cityData?.main?.temp - 273.15;

  const newVal = temp?.toFixed(2);

  const saveData = () => {
    axios({
      method: "get",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=697bfd2fec2ded264625d06a7688f992`,
    })
      .then((response) => {
        setCityData(response.data);
        console.log(response.data);

        setCityName("");
      })
      .catch((err) => {
        console.log(err, "error occur");
      });
  };
  return (
    <ImageBackground
      source={require("../assets/weather_background.jpg")}
      style={styles.main}
    >
      <Pressable onPress={() => navigation.navigate("Main")}>
        <Text style={styles.text}>Back</Text>
      </Pressable>

      <TextInput
        placeholder="Enter City Name"
        style={styles.TextInput}
        value={cityName}
        onChangeText={(e) => {
          setCityName(e);
        }}
      />

      <Pressable style={styles.button}>
        <Button title="Save" onPress={saveData} />
      </Pressable>

      <View style={styles.city_title}>
        <Text style={styles.titleName}>{cityData.name}</Text>
      </View>

      <View style={styles.city_coord}>
        <Text>Latitude: {cityData?.coord?.lat}</Text>
        <Text>Longitude: {cityData?.coord?.lon}</Text>
      </View>

      <View style={styles.city_temp}>
        <Text style={styles.curr_temp}>
          Current Temperature: {newVal + "C"}
        </Text>
      </View>
      <View style={styles.other_temp}>
        <Text>1) Feels Like: {cityData?.main?.feels_like + "K"}</Text>
        <Text>2) Humidity: {cityData?.main?.humidity + "%"}</Text>
        <Text>3) Pressure: {cityData?.main?.pressure + "Pa"}</Text>
      </View>

      <View style={styles.curr_air}>
        <Text>Wind Degree: {cityData?.wind?.deg + "D"}</Text>
        <Text>Speed: {cityData?.wind?.speed + "km/h"}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
    padding: 20,
  },
  background: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
    marginTop: 30,
    justifyContent: "initial",
    alignItems: "start",
  },
  title: {
    fontSize: 50,
    fontWeight: "600",
    color: "#000",
    marginBottom: 40,
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
    marginTop: 30,
    width: 150,
  },
  TextInput: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "black",
    padding: 20,
    borderRadius: 10,
    opacity: 0.5,
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 20,

    borderRadius: 10,
  },
  city_title: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  titleName: {
    fontSize: 60,
    color: "black",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  city_coord: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  city_temp: {
    justifyContent: "center",
    alignItems: "center",
  },
  curr_temp: {
    fontSize: 20,
    fontWeight: 600,
    marginTop: 30,
  },
  other_temp: {
    marginTop: 20,
  },
  curr_air: {
    marginTop: 30,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default WeatherScreen;
