import { View } from "react-native";
import { Title, Button } from "react-native-paper";
import React, { useState } from "react";
import NumberGenerator from "../utils/NumberGenerator";

const MAX_VALUE = 100;
const MIN_VALUE = 1;

const GameScreen = props => {
  const [guessedNumber, setGuessedNumber] = useState(
    new NumberGenerator(MAX_VALUE).number );
  const onTooHighButtonPress = () => {
    setGuessedNumber(prevValue => {
      return new NumberGenerator(MAX_VALUE, prevValue).guessLower().number;
    });
  };
  const onTooLowButtonPress = () => {
    setGuessedNumber(prevValue => {
      return new NumberGenerator(MAX_VALUE, prevValue).guessHigher().number;
    });
  };
  return (
    <View>
      <Title>The current number is: {guessedNumber}</Title>
      <View style={{ flexDirection: "row" }}>
        <Button
          mode="outlined"
          style={{ flex: 1, margin: 16 }}
          onPress={onTooHighButtonPress}
        >
          Too high
        </Button>
        <Button
          mode="outlined"
          style={{ flex: 1, margin: 16 }}
          onPress={onTooLowButtonPress}
        >
          Too low
        </Button>
      </View>
    </View>
  );
};

export default GameScreen;
