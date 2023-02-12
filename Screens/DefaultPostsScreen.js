import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { User } from "../Components/User/User";

export const DefaultPostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
      // console.log(posts);
    }
  }, [route.params]);

  return (
    <>
      <View
        style={{
          height: "100%",
          backgroundColor: "#FFF",
          paddingTop: 32,
          paddingHorizontal: 16,
        }}
      >
        <User />
        <FlatList
          data={posts}
          keyExtractor={(item, idx) => idx.toString()}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 35 }}>
              <View>
                <Image
                  source={{ uri: item.photo }}
                  style={{ height: 240, borderRadius: 8 }}
                ></Image>
              </View>
              <View style={{ marginTop: 8, marginBottom: 11 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                  }}
                >
                  Лес
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{ flexDirection: "row", alignItems: "center" }}
                  onPress={() => {
                    navigation.navigate("Comments");
                  }}
                >
                  <Image
                    style={{ width: 18, height: 18, marginRight: 9 }}
                    source={require("../assets/images/Shape.png")}
                  ></Image>
                  <Text style={{ fontSize: 16, color: "#BDBDBD" }}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ flexDirection: "row", alignItems: "center" }}
                  onPress={() => {
                    navigation.navigate("Map", { location: item.location });
                  }}
                >
                  <Image
                    style={{ width: 18, height: 18, marginRight: 9 }}
                    source={require("../assets/images/map.png")}
                  ></Image>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#212121",
                      textDecorationLine: "underline",
                    }}
                  >
                    City
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        ></FlatList>
      </View>
    </>
  );
};
