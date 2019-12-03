import { StyleSheet } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import PropTypes from "prop-types";

const Input = props => {
  return (
    <TextInput
      {...props}
      style={{ ...props.style, ...styles.input }}
      value={props.value}
      onChangeText={text => props.onChangeText(text)}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    textAlign: "center"
  }
});

Input.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func.isRequired
};
export default Input;
