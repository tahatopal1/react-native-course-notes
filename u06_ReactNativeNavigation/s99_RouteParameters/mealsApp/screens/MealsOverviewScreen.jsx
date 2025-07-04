import { Text, View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function MealsOverviewScreen({ route }) {
  // const route = useRoute(); // Could be used this way too

  const categoryId = route.params.categoryId;

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {categoryId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
