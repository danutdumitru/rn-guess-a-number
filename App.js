import React, { useState } from "react";
import {
  DefaultTheme,
  Provider as PaperProvider,
  configureFonts
} from "react-native-paper";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import Main from "./src/Main";

const fontConfig = {
  default: {
    regular: {
      fontFamily: "fira-sans",
      fontWeight: "normal"
    },
    medium: {
      fontFamily: "fira-sans-medium",
      fontWeight: "normal"
    },
    light: {
      fontFamily: "fira-sans-light",
      fontWeight: "normal"
    },
    thin: {
      fontFamily: "fira-sans-thin",
      fontWeight: "normal"
    }
  }
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig)
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const loadFonts = () => {
    return Font.loadAsync({
      "fira-sans": require("./assets/fonts/FiraSans-Regular.ttf"),
      "fira-sans-medium": require("./assets/fonts/FiraSans-Medium.ttf"),
      "fira-sans-light": require("./assets/fonts/FiraSans-Light.ttf"),
      "fira-sans-thin": require("./assets/fonts/FiraSans-Thin.ttf")
    });
  };
  const dataLoadFinish = () => {
    setDataLoaded(true);
  };

  if (!dataLoaded)
    return <AppLoading startAsync={loadFonts} onFinish={dataLoadFinish} />;
  else
    return (
      <PaperProvider theme={theme}>
        <Main />
      </PaperProvider>
    );
}
