import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { screenStyle, registrationStyle } from "../src/styles";
import { Button } from "../Components/Button/Button";
import { RedirectLink } from "../Components/RedirectLink/RedirectLink";

const initialValue = {
  login: "",
  password: "",
};

export function LoginScreen({ navigation }) {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [formValue, setFormValue] = useState(initialValue);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isLoginInputFocused, setIsLoginInputFocused] = useState(false);
  const [isEmailInputFocused, setIsEmailInputFocused] = useState(false);
  const [isPasswordInputFocused, setIsPasswordInputFocused] = useState(false);

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

  const { container, form, image, input, text, wrap } = screenStyle;
  const { btnShowPassword, btnShowPasswordText } = registrationStyle;

  return (
    <View style={container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ImageBackground
          style={image}
          source={require("../assets/images/PhotoBG.jpg")}
        >
          <View
            style={{
              ...wrap,
              height: isKeyboardOpen ? 250 : "auto",
              paddingTop: 32,
              paddingBottom: 132,
            }}
          >
            <Text style={text}>Вхід</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <View style={form}>
                <TextInput
                  style={{
                    ...input,
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
                    ...input,
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
                  style={btnShowPassword}
                  onPress={() => setIsPasswordShown(!isPasswordShown)}
                >
                  <Text style={{ ...btnShowPasswordText, top: -66 }}>
                    {isPasswordShown ? "Приховати" : "Показати"}
                  </Text>
                </TouchableOpacity>

                <Button onPress={onFormSubmit}>Увійти</Button>
                <RedirectLink
                  onPress={() => navigation.navigate("Registration")}
                >
                  Немає акаунту? Зареєструватися
                </RedirectLink>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
}
