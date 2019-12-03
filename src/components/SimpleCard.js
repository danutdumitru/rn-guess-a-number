import React from "react";
import { StyleSheet } from "react-native";
import { Surface } from "react-native-paper";

const SimpleCard = props => {
  return (
    <Surface style={{ ...styles.card, ...props.styles }}>
      {props.children}
    </Surface>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    elevation: 4,
    width: "80%",
    alignSelf: "center",
    borderRadius: 10
  }
});

export default SimpleCard;
