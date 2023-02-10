import { useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacity, View } from "react-native";
import { tabBar } from "./styles";

export default function TabBar() {
  const navigation = useNavigation();
  return (
    <View style={tabBar.tabBarWrap}>
      <TouchableOpacity onPress={() => navigation.navigate("PostsScreen")}>
        <Image
          style={{ width: 24, height: 24 }}
          source={require("../../assets/images/grid.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={tabBar.focusedBtn}
        onPress={() => navigation.navigate("CreatePostsScreen")}
      >
        <Image
          style={{ width: 13, height: 13 }}
          source={require("../../assets/images/Union.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginLeft: 31 }}
        onPress={() => navigation.navigate("ProfileScreen")}
      >
        <Image
          style={{ width: 24, height: 24 }}
          source={require("../../assets/images/user.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
