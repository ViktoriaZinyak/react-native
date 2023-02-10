import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  TextInput,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

export const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePhoto = async () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
  };

  const sendPhoto = () => {
    navigation.navigate("PostsScreen", { photo });
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {/* {photo && ( */}
        <View style={styles.photoContainer} pointerEvents="none">
          <Image
            source={{ uri: photo }}
            style={{
              width: 380,
              height: 240,
              borderRadius: 8,
            }}
            pointerEvents="none"
          ></Image>
        </View>
        {/* )} */}
        <TouchableOpacity onPress={takePhoto} style={styles.button}>
          <Image
            style={{ width: 24, height: 24 }}
            source={require("../assets/images/camera.png")}
          />
        </TouchableOpacity>
      </Camera>
      <View style={styles.textContainer}>
        {photo ? (
          <Text style={styles.text}>Редагувати фото</Text>
        ) : (
          <Text style={styles.text}>Завантажте фото</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Назва..."></TextInput>
      </View>
      <TouchableOpacity onPress={sendPhoto} style={styles.buttonSendPhoto}>
        <Text style={styles.buttonSendPhotoText}>Опублікувати</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  camera: {
    height: 240,
    marginTop: 32,
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  button: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
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
    borderRadius: 8,
    position: "absolute",
    top: 0,
    left: 0,
  },
  textContainer: { marginHorizontal: 16, marginTop: 8, marginBottom: 48 },
  text: { fontSize: 16, color: "#BDBDBD" },
  inputContainer: { marginHorizontal: 16 },
  input: {
    height: 45,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderStyle: "solid",
    fontSize: 16,
    placeholderTextColor: "#BDBDBD",
  },
});
