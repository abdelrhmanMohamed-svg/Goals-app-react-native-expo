import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({ goal, onToggle, onDelete }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.goalArea} onPress={onToggle}>
        <View
          style={[styles.checkbox, goal.completed && styles.checkboxChecked]}
        >
          {goal.completed ? <Text style={styles.checkmark}>✓</Text> : null}
        </View>
        <Text style={[styles.text, goal.completed && styles.textCompleted]}>
          {goal.text}
        </Text>
      </Pressable>
      <Pressable
        onPress={onDelete}
        hitSlop={8}
        style={({ pressed }) => [
          styles.delete,
          pressed && styles.deletePressed,
        ]}
      >
        <Text style={styles.deleteText}>Delete</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    backgroundColor: "#fff",
  },
  goalArea: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#9ca3af",
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    borderColor: "#2563eb",
    backgroundColor: "#2563eb",
  },
  checkmark: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: "#111827",
  },
  textCompleted: {
    color: "#9ca3af",
    textDecorationLine: "line-through",
  },
  delete: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginLeft: 8,
  },
  deletePressed: {
    opacity: 0.6,
  },
  deleteText: {
    color: "#ef4444",
    fontSize: 14,
    fontWeight: "600",
  },
});
