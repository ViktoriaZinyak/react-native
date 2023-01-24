import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from "react-native";
import { AvatarUploady } from "./AvatarUploady";

export function RegistrationScreen() {
  return (
    <View style={styles.contain}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/images/PhotoBG.jpg")}
      >
        <View style={styles.container}>
          <View style={styles.box}>
            <Image
              style={styles.icon}
              source={require("../assets/images/add.png")}
            />
          </View>
          <Text style={styles.text}>Реєстрація</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.form}>
              <TextInput style={styles.input} placeholder="Логін"></TextInput>
              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
              ></TextInput>
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                secureTextEntry={true}
              ></TextInput>

              <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
                <Text style={styles.btnText}>Зареєструватися</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingBottom: 78,
  },
  box: {
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
    position: "absolute",
    top: -60,
    left: 128,
    borderRadius: 16,
  },
  icon: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    top: 81,
    left: 107,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
  },
  input: {
    height: 50,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderStyle: "solid",
    padding: 16,
    placeholderTextColor: "#BDBDBD",
    marginBottom: 16,
  },
  form: { marginHorizontal: 16, marginTop: 33 },
  btn: {
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 27,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
});
