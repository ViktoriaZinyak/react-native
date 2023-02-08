import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import { Camera } from "expo-camera";

export const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
  };

  const sendPhoto = () => {
    navigation.navigate("PostsScreen", { photo });
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {photo && (
          <View style={styles.photoContainer} pointerEvents="none">
            <Image
              source={{ uri: photo }}
              style={{ width: 150, height: 100 }}
              pointerEvents="none"
            ></Image>
          </View>
        )}
        <TouchableOpacity onPress={takePhoto} style={styles.button}>
          <Image
            style={{ width: 24, height: 24 }}
            source={require("../assets/images/camera.png")}
          />
        </TouchableOpacity>
      </Camera>
      <TouchableOpacity onPress={sendPhoto} style={styles.buttonSendPhoto}>
        <Text style={styles.buttonSendPhotoText}>Опублікувати</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // height: "100%",
    // paddingTop: 32,
    // paddingLeft: 16,
    // paddingRight: 16,
    flex: 1,
  },
  camera: {
    height: "45%",
    // width: "100%",
    // backgroundColor: "#fff",
    marginTop: 32,
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  button: {
    // position: "absolute",
    width: 60,
    height: 60,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    // borderBottomEndRadius: 50,
    // borderTopEndRadius: 50,
    // borderBottomStartRadius: 50,
    // borderTopStartRadius: 50,
  },
  buttonSendPhoto: {
    marginHorizontal: 16,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginTop: 48,
  },
  buttonSendPhotoText: {
    marginVertical: 16,
    fontSize: 16,
    color: "#BDBDBD",
  },
  photoContainer: {
    position: "absolute",
    top: 50,
    left: 10,

    borderColor: "#fff",
    borderWidth: 2,
  },
});
