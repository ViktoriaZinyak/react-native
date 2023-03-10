import { useState } from "react";
import {
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
import { screenStyle, registrationStyle } from "../src/styles";
import { Button } from "../Components/Button/Button";
import { RedirectLink } from "../Components/RedirectLink/RedirectLink";
import { useDispatch } from "react-redux";
import { authSignUp } from "../redux/auth/authOperations";

const initialValue = {
  email: "",
  password: "",
  login: "",
};

export function RegistrationScreen({ navigation }) {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [formValue, setFormValue] = useState(initialValue);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isLoginInputFocused, setIsLoginInputFocused] = useState(false);
  const [isEmailInputFocused, setIsEmailInputFocused] = useState(false);
  const [isPasswordInputFocused, setIsPasswordInputFocused] = useState(false);

  const dispatch = useDispatch();

  const onChangeLoginInput = (value) =>
    setFormValue((prevState) => ({ ...prevState, login: value }));

  const onChangeEmailInput = (value) =>
    setFormValue((prevState) => ({ ...prevState, email: value }));

  const onChangePasswordInput = (value) =>
    setFormValue((prevState) => ({ ...prevState, password: value }));

  const onFormSubmit = () => {
    setFormValue(initialValue);
    dispatch(authSignUp(formValue));
    console.log(formValue);
  };

  const { container, form, image, box, input, text, wrap } = screenStyle;
  const { icon, btnShowPassword, btnShowPasswordText } = registrationStyle;

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
              height: isKeyboardOpen ? 377 : "auto",
            }}
          >
            <View style={box}>
              <Image
                style={icon}
                source={require("../assets/images/add.png")}
              />
            </View>
            <Text style={text}>????????????????????</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <View style={form}>
                <TextInput
                  style={{
                    ...input,
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
                  placeholder="??????????"
                ></TextInput>
                <TextInput
                  style={{
                    ...input,
                    borderColor: isEmailInputFocused ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="???????????? ?????????????????????? ??????????"
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
                  placeholder="????????????"
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
                  <Text style={btnShowPasswordText}>
                    {isPasswordShown ? "??????????????????" : "????????????????"}
                  </Text>
                </TouchableOpacity>

                <Button onPress={onFormSubmit}>??????????????????????????????</Button>
                <RedirectLink onPress={() => navigation.navigate("Login")}>
                  ?????? ?? ????????????? ????????????
                </RedirectLink>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
}
