import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

const Main = () => {
  return (
      <View>
        <Header title="Guess a number"/>
        <GameScreen/>
      </View>
  );
}

export default Main;