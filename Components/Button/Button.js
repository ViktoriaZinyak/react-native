import { TouchableOpacity, Text } from "react-native";
import { button } from "../../src/styles";

export const Button = ({ children, onPress }) => {
  const { btn, btnText } = button;
  return (
    <TouchableOpacity activeOpacity={0.7} style={btn} onPress={onPress}>
      <Text style={btnText}>{children}</Text>
    </TouchableOpacity>
  );
};
