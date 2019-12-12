import React from "react";
import { Title } from "react-native-paper";
import PropTypes from "prop-types";
import Screen from "./Screen";

const GameOverScreen = props => {
  return (
    <Screen styles={{ justifyContent: "center" }}>
      <Title style={{ alignSelf: "center"}}>
        Congrats!!! You guessed the number : {props.chosenNumber}
      </Title>
    </Screen>
  );
};

GameOverScreen.propTypes = {
  chosenNumber: PropTypes.number.isRequired
};

export default GameOverScreen;
