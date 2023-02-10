import { StyleSheet } from "react-native";

export const userStyled = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#FFF",
    marginBottom: 32,
  },
  img: { width: 60, height: 60 },
  userWrap: {
    justifyContent: "center",
    marginLeft: 8,
  },
  userName: { fontSize: 13, fontWeight: "700", lineHeight: 15 },
  userMail: { fontSize: 11, lineHeight: 13 },
});
