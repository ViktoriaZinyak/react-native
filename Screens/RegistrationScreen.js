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
} from "react-native";
import { useFonts } from "expo-font";

const initialValue = {
  login: "",
  email: "",
  password: "",
};

export function RegistrationScreen() {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [formValue, setFormValue] = useState(initialValue);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isLoginInputFocused, setIsLoginInputFocused] = useState(false);
  const [isEmailInputFocused, setIsEmailInputFocused] = useState(false);
  const [isPasswordInputFocused, setIsPasswordInputFocused] = useState(false);

  const [fontsLoaded] = useFonts({
    Roboto: require("../assets/fonts/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  const onChangeLoginInput = (value) =>
    setFormValue((prevState) => ({ ...prevState, login: value }));

  const onChangeEmailInput = (value) =>
    setFormValue((prevState) => ({ ...prevState, email: value }));

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
              height: isKeyboardOpen ? 377 : "auto",
            }}
          >
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
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isLoginInputFocused ? "#FF6C00" : "#E8E8E8",
                  }}
                  onFocus={() => {
                    setIsKeyboardOpen(true);
                    setIsLoginInputFocused(true);
                  }}
                  onBlur={() => {
                    setIsKeyboardOpen(false);
                    setIsLoginInputFocused(false);
                  }}
                  onChangeText={onChangeLoginInput}
                  value={formValue.login}
                  placeholder="Логін"
                ></TextInput>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isEmailInputFocused ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="Адреса електронної пошти"
                  onFocus={() => {
                    setIsKeyboardOpen(true);
                    setIsEmailInputFocused(true);
                  }}
                  onBlur={() => {
                    setIsKeyboardOpen(false);
                    setIsEmailInputFocused(false);
                  }}
                  onChangeText={onChangeEmailInput}
                  value={formValue.email}
                ></TextInput>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isPasswordInputFocused ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="Пароль"
                  secureTextEntry={!isPasswordShown}
                  onFocus={() => {
                    setIsKeyboardOpen(true);
                    setIsPasswordInputFocused(true);
                  }}
                  onBlur={() => {
                    setIsKeyboardOpen(false);
                    setIsPasswordInputFocused(false);
                  }}
                  onChangeText={onChangePasswordInput}
                  value={formValue.password}
                ></TextInput>

                <TouchableOpacity
                  style={styles.btnShowPassword}
                  onPress={() => setIsPasswordShown(!isPasswordShown)}
                >
                  <Text style={styles.btnShowPasswordText}>
                    {isPasswordShown ? "Приховати" : "Показати"}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.btn}
                  onPress={onFormSubmit}
                >
                  <Text style={styles.btnText}>Зареєструватися</Text>
                </TouchableOpacity>
                {/* <RedirectLink>Вже є акаунт? Увійти</RedirectLink> */}
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
    fontStyle: Roboto,
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
  btnShowPassword: {
    position: "absolute",
    right: 32,
    top: 147,
  },
  btnShowPasswordText: {
    color: "#1B4371",
  },
});
