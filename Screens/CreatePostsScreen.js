import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  TextInput,
  Keyboard,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";

const photoState = {
  namePhoto: "",
  locationName: "",
};

export const CreatePostsScreen = ({ navigation }) => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [dataPhoto, setDataPhoto] = useState(photoState);
  // const [formValue, setFormValue] = useState(photoState);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const keyboardHide = () => {
    setIsKeyboardOpen(false);
    Keyboard.dismiss();
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      const permission = await Location.requestForegroundPermissionsAsync();
      if (permission.status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const deletePhoto = () => {
    setPhoto(null);
  };

  const takePhoto = async () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
    const photo = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    setPhoto(photo.uri);

    console.log(location);
    keyboardHide();
  };

  if (errorMsg) {
    return <Text> {errorMsg} </Text>;
  } else if (location) {
    JSON.stringify(location);
  }

  const sendPhoto = () => {
    navigation.navigate("DefaultScreen", { photo, location, dataPhoto });
  };

  const onChangeNameInput = (value) =>
    setDataPhoto((prevState) => ({ ...prevState, namePhoto: value }));

  const onChangeLocationInput = (value) =>
    setDataPhoto((prevState) => ({ ...prevState, locationName: value }));

  console.log(dataPhoto);
  return (
    <View style={styles.container}>
      <Camera
        style={{ ...styles.camera, height: isKeyboardOpen ? 0 : 240 }}
        ref={setCamera}
      >
        {photo && (
          <View style={styles.photoContainer} pointerEvents="none">
            <Image
              source={{ uri: photo }}
              style={{
                width: 360,
                height: 240,
                borderRadius: 8,
              }}
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
      <View style={styles.textContainer}>
        {photo ? (
          <Text style={styles.text}>Редагувати фото</Text>
        ) : (
          <Text style={styles.text}>Завантажте фото</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Назва..."
          onChangeText={onChangeNameInput}
          onFocus={() => setIsKeyboardOpen(true)}
          onSubmitEditing={keyboardHide}
          value={dataPhoto.namePhoto}
          onBlur={() => {
            setIsKeyboardOpen(false);
          }}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Місцевість"
          onChangeText={onChangeLocationInput}
          onFocus={() => setIsKeyboardOpen(true)}
          onSubmitEditing={keyboardHide}
          value={dataPhoto.locationName}
          onBlur={() => {
            setIsKeyboardOpen(false);
          }}
        ></TextInput>
      </View>
      <TouchableOpacity
        onPress={sendPhoto}
        style={{
          ...styles.buttonSendPhoto,
          backgroundColor:
            dataPhoto.namePhoto != "" && dataPhoto.locationName != ""
              ? "#FF6C00"
              : "#F6F6F6",
        }}
      >
        <Text
          style={{
            ...styles.buttonSendPhotoText,
            color:
              dataPhoto.namePhoto != "" && dataPhoto.locationName != ""
                ? "#FFF"
                : "#BDBDBD",
          }}
        >
          Опублікувати
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={deletePhoto} style={styles.buttonDelete}>
        <Image
          style={{ width: 24, height: 24 }}
          source={require("../assets/images/delete.png")}
        />
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
    marginTop: 15,
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
  textContainer: { marginHorizontal: 16, marginTop: 8, marginBottom: 28 },
  text: { fontSize: 16, color: "#BDBDBD" },
  inputContainer: { marginHorizontal: 16 },
  input: {
    height: 45,
    borderColor: "#FFF",
    borderBottomColor: "#E8E8E8",
    borderWidth: 1,
    borderStyle: "solid",
    fontSize: 16,
    placeholderTextColor: "#BDBDBD",
    marginBottom: 15,
  },
  buttonDelete: {
    // marginLeft: 43,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
    height: 40,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 90,
    alignSelf: "center",
  },
});
