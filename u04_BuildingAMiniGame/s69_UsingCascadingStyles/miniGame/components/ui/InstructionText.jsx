import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

export default function InstructionText({ children, style }) {
  // This is an imitation of cascading the styles like in the CSS
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
