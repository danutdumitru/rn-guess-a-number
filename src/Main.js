import React, { useState } from "react";
import { View } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

const Main = () => {
  const [confirmedNumber, setConfirmedNumber] = useState(null);
  const [numberWasGuessed, setNumberWasGuessed] = useState(false);

  const onStartPress = value => {
    setConfirmedNumber(value);
  };

  const onNumberFound = () => {
    setNumberWasGuessed(true);
  }

  let screen = null;
  if (numberWasGuessed) {
    screen = <GameOverScreen chosenNumber={confirmedNumber} />;
  } else if (confirmedNumber) {
    screen = <GameScreen chosenNumber={confirmedNumber} onNumberFound={onNumberFound}/>;
  } else {
    screen = <StartGameScreen onStartPress={onStartPress} />;
  }
  return (
    <View>
      <Header title="Guess a number" />
      {screen}
    </View>
  );
};

export default Main;
