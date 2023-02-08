import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useRoute } from "./router";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  const routing = useRoute(true);

  return <NavigationContainer>{routing}</NavigationContainer>;
}
