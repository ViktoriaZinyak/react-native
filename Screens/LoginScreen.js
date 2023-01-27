import { useState } from "react";
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
  TouchableWithoutFeedback,
  Keyboard,
  RedirectLink,
} from "react-native";

const initialValue = {
  login: "",
  email: "",
  password: "",
};

export function RegistrationScreen() {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [formValue, setFormValue] = useState(initialValue);
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const onChangeEmailInput = (value) =>
    setInputValue((prevState) => ({ ...prevState, email: value }));

  const onChangePasswordInput = (value) =>
    setFormValue((prevState) => ({ ...prevState, password: value }));

  const onFormSubmit = () => {
    setFormValue(initialValue);
    console.log(formValue);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/PhotoBG.jpg")}
        >
          <View
            style={{
              ...styles.wrap,
              height: isKeyboardOpen ? 248 : "auto",
            }}
          >
            <Text style={styles.text}>Вхід</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <View style={styles.form}>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isKeyboardOpen ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="Адреса електронної пошти"
                  onFocus={() => setIsKeyboardOpen(true)}
                  onBlur={() => setIsKeyboardOpen(false)}
                  onChangeText={onChangeEmailInput}
                  value={formValue.email}
                ></TextInput>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isKeyboardOpen ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="Пароль"
                  secureTextEntry={!isPasswordShown}
                  onFocus={() => setIsKeyboardOpen(true)}
                  onBlur={() => setIsKeyboardOpen(false)}
                  onChangeText={onChangePasswordInput}
                  value={formValue.password}
                ></TextInput>

                <TouchableOpacity onPress={() => setIsPasswordShown(true)}>
                  <Text>{isPasswordShown ? "Приховати" : "Показати"}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.btn}
                  onPress={onFormSubmit}
                >
                  <Text style={styles.btnText}>Увійти</Text>
                </TouchableOpacity>
                <RedirectLink>Немає акаунта? Зареєструватися</RedirectLink>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  wrap: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 32,
    paddingBottom: 144,
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
