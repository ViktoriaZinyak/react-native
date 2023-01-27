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
  wrap: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 32,
    paddingBottom: 144,
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

  form: { marginHorizontal: 16, marginTop: 33 },
});
