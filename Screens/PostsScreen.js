import { Text, View, FlatList, Image } from "react-native";
import { useEffect, useState } from "react";
import { User } from "../Components/User/User";

export const PostsScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log(posts);
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
        <User />
        <FlatList
          data={posts}
          keyExtractor={(item, idx) => idx.toString()}
          renderItem={({ item }) => (
            <View>
              <Image
                source={{ uri: item.photo }}
                style={{ height: 200, width: 150 }}
              ></Image>
            </View>
          )}
        ></FlatList>
      </View>
    </>
  );
};
