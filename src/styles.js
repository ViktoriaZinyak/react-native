import { StyleSheet } from "react-native";

export const screenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontStyle: "Roboto-Regular",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
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
  text: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
  },
  wrap: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingBottom: 78,
  },
  form: { marginHorizontal: 16, marginTop: 33 },
});

export const registrationStyle = StyleSheet.create({
  icon: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    top: 81,
    left: 107,
    justifyContent: "center",
    alignItems: "center",
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

export const button = StyleSheet.create({
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
