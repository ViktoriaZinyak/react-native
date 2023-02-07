import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { Camera } from "expo-camera";

export const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <Camera style={styles.camera}>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Image
            style={{ width: 24, height: 24 }}
            source={require("../assets/images/camera.png")}
          />
        </TouchableOpacity>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  camera: {
    height: 240,
    width: "100%",
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    alignItems: "center",
    justifyContent: "center",
    borderBottomEndRadius: 50,
    borderTopEndRadius: 50,
    borderBottomStartRadius: 50,
    borderTopStartRadius: 50,
  },
});
