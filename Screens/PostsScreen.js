import { Text, View } from "react-native";
import { User } from "../Components/User/User";

export const PostsScreen = () => {
  return (
    <>
      <View
        style={{
          height: "100%",
          backgroundColor: "#FFF",
          paddingTop: 32,
          paddingLeft: 16,
        }}
      >
        <User></User>
      </View>
    </>
  );
};
