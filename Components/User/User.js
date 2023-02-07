import { Image, Text, View } from "react-native";
import { userStyled } from "./styles";

const { container, imgWrap, img, userWrap, userName, userMail } = userStyled;

export const User = () => {
  return (
    <View style={container}>
      <View style={imgWrap}>
        <Image
          style={img}
          source={require("../../assets/images/user-av.png")}
        ></Image>
      </View>
      <View style={userWrap}>
        <Text style={userName}>Natali Romanova</Text>
        <Text style={userMail}>email@example.com</Text>
      </View>
    </View>
  );
};
