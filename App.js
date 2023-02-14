import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useRoute } from "./router";
import { store } from "./redux/store";
import { auth } from "./firebase/config";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  auth.onAuthStateChanged((user) => {
    setUser(user);
  });

  const routing = useRoute(user);

  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
}
