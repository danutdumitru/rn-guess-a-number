import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";

const Main = () => {
  return (
      <View>
        <Header title="Guess a number"/>
        <StartGameScreen/>
      </View>
  );
}

export default Main;