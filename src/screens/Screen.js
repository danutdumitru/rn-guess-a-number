import { View, StyleSheet } from "react-native";
import React from 'react';

const Screen = props => {
  return <View style={{...styles.screen, ...props.styles}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  screen: {
    marginTop: 10,
    marginHorizontal: 8
  }
});

export default Screen;
