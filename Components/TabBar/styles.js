import { StyleSheet } from "react-native";

export const tabBar = StyleSheet.create({
  tabBarWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 83,
    paddingTop: 9,
    borderTopColor: "rgba(0, 0, 0, 0.3)",
    borderStyle: "solid",
    borderTopWidth: 0.5,
  },
  focusedBtn: {
    marginLeft: 43,
    borderRadius: 20,
    backgroundColor: "#FF6C00",
    height: 40,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});
