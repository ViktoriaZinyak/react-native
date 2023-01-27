import { button } from "../src/styles";

export const Button = ({ children }) => {
  const { btn, btnText } = button;
  return (
    <TouchableOpacity activeOpacity={0.7} style={btn} onPress={onFormSubmit}>
      <Text style={btnText}>{children}</Text>
    </TouchableOpacity>
  );
};
