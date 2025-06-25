import { Text, StyleSheet } from "react-native";

export default function GameScreen() {
  return <Text style={styles.title}>Game Screen!</Text>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
