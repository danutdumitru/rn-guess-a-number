import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import { Title, Button, Text } from "react-native-paper";
import SimpleCard from "../components/SimpleCard";
import Input from "../components/Input";
import SelectedNumber from "../components/SelectedNumber";

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredNumber, setEnteredNumber] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  const onChangeInputHandler = text => {
    setEnteredValue(text.replace("^(0-9)", ""));
  };
  const onCardOutsidePress = () => {
    Keyboard.dismiss();
  };
  const onResetButtonPress = () => {
    setEnteredValue("");
  };
  const onConfirmButtonPress = () => {
    const numberValue = parseInt(enteredValue);
    if (numberValue) {
      setConfirmed(true);
      setEnteredValue("");
      setEnteredNumber(numberValue);
      Keyboard.dismiss();
    } else {
      Alert.alert("Invalid number", "The entered number is invalid", [
        { text: "Ok", style: "destructive", onPress: onResetButtonPress }
      ]);
    }
  };
  let confirmCard = null;
  if (confirmed) {
    confirmCard = <SelectedNumber selectedNumber={enteredNumber} />;
  }
  return (
    <TouchableWithoutFeedback onPress={onCardOutsidePress}>
      <View style={styles.screen}>
        <Title
          style={{
            alignSelf: "center",
            marginBottom: 24
          }}
        >
          Start a new game
        </Title>
        <SimpleCard>
          <View style={{ alignSelf: "center", width: "50%" }}>
            <Input
              value={enteredValue}
              onChangeText={onChangeInputHandler}
              keyboardType="numeric"
              maxLength={2}
              alignSelf="center"
            />
          </View>
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button mode="outlined" onPress={onResetButtonPress}>
                RESET
              </Button>
            </View>
            <View style={styles.button}>
              <Button
                mode="outlined"
                onPress={onConfirmButtonPress}
                color="#CC0000"
              >
                CONFIRM
              </Button>
            </View>
          </View>
        </SimpleCard>
        {confirmCard}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginTop: 10,
    marginHorizontal: 8
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 8
  },
  button: {
    flex: 1,
    marginHorizontal: 8
  }
});
export default StartGameScreen;
