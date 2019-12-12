import { View, Alert } from "react-native";
import { Title, Button, Text } from "react-native-paper";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import NumberGenerator from "../utils/NumberGenerator";
import SimpleCard from "../components/SimpleCard";
import Screen from "./Screen";

const MAX_VALUE = 100;
const MIN_VALUE = 1;

const getNewNumber = (minValue, maxValue) => {
  const numberGenerator = new NumberGenerator(minValue, maxValue);
  return numberGenerator.getRandomNumber().numberValue;
};

const GameScreen = props => {
  const [state, setState] = useState({
    minValue: MIN_VALUE,
    maxValue: MAX_VALUE,
    guessedNumber: getNewNumber(MIN_VALUE, MAX_VALUE)
  });

  useEffect(() => {
    if (state.guessedNumber === props.chosenNumber) {
      props.onNumberFound();
    }
  }, [state.guessedNumber]);

  const onTooHighButtonPress = () => {
    if (state.guessedNumber <= props.chosenNumber) {
      Alert.alert("Wrong", "Please don't lie...", [
        { text: "Ok", style: "default" }
      ]);
    } else {
      setState(prevState => {
        const newMaxValue = prevState.guessedNumber;
        return {
          ...prevState,
          maxValue: newMaxValue,
          guessedNumber: getNewNumber(prevState.minValue, newMaxValue)
        };
      });
    }
  };

  const onTooLowButtonPress = () => {
    if (state.guessedNumber >= props.chosenNumber) {
      Alert.alert("Wrong", "Please don't lie...", [
        { text: "Ok", style: "default" }
      ]);
    } else {
      setState(prevState => {
        const newMinValue = prevState.guessedNumber + 1;
        return {
          ...prevState,
          minValue: newMinValue,
          guessedNumber: getNewNumber(newMinValue, prevState.maxValue)
        };
      });
    }
  };
  return (
    <Screen>
      <Title style={{ alignSelf: "center" }}>Opponnent Number</Title>
      <SimpleCard styles={{ width: "50%" }}>
        <Text style={{ alignSelf: "center" }}>{state.guessedNumber}</Text>
      </SimpleCard>
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
    </Screen>
  );
};

GameScreen.propTypes = {
  chosenNumber: PropTypes.number.isRequired,
  onNumberFound: PropTypes.func.isRequired
};

export default GameScreen;
