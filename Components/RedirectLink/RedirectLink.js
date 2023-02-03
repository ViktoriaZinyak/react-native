import { Text, TouchableOpacity } from "react-native";
import { redirectLinkText, redirectLink } from "./styles";

export const RedirectLink = ({ onPress, children }) => {
  return (
    <TouchableOpacity style={redirectLink} onPress={onPress}>
      <Text style={redirectLinkText}>{children}</Text>
    </TouchableOpacity>
  );
};
