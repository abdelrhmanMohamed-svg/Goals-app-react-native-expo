import { StyleSheet, Text, View } from "react-native";

export default function EmptyState() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No goals yet</Text>
      <Text style={styles.subtitle}>Add one above to get started!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#374151",
  },
  subtitle: {
    marginTop: 6,
    fontSize: 14,
    color: "#9ca3af",
  },
});
