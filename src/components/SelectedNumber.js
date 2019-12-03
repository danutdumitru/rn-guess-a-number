import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";
import SimpleCard from "./SimpleCard";
import PropTypes from "prop-types";

const SelectedNumber = props => {
  if (!props.selectedNumber) return null;

  return (
    <SimpleCard styles={{ marginTop: 24 }}>
      <View>
        <Text>You selected:</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{props.selectedNumber}</Text>
        </View>
      </View>
      <View>
        <Button mode="outlined" style={styles.button}>Start</Button>
      </View>
    </SimpleCard>
  );
};

const styles = StyleSheet.create({
  numberContainer: {
    margin: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: "#CC0000",
    borderRadius: 15,
    width: "50%",
    alignSelf: "center"
  },
  number: {
    alignSelf: "center",
    fontSize: 24,
    color: "#CC0000"
  },
  button: {
     marginHorizontal: 8 
  }
});
SelectedNumber.propTypes = {
  selectedNumber: PropTypes.number
};

export default SelectedNumber;
