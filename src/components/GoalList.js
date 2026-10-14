import { FlatList, StyleSheet } from "react-native";
import GoalItem from "./GoalItem";
import EmptyState from "./EmptyState";

export default function GoalList({ goals, onToggleGoal, onDeleteGoal }) {
  return (
    <FlatList
      data={goals}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <GoalItem
          goal={item}
          onToggle={() => onToggleGoal(item.id)}
          onDelete={() => onDeleteGoal(item.id)}
        />
      )}
      ListEmptyComponent={EmptyState}
      contentContainerStyle={
        goals.length === 0 ? styles.emptyContainer : styles.listContent
      }
      keyboardShouldPersistTaps="handled"
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  emptyContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
});
