import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import GoalInput from "./src/components/GoalInput";
import GoalList from "./src/components/GoalList";

export default function App() {
  const [goals, setGoals] = useState([]);

  function addGoal(text) {
    setGoals((current) => [
      ...current,
      { id: Date.now().toString(), text, completed: false },
    ]);
  }

  function toggleGoal(id) {
    setGoals((current) =>
      current.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal,
      ),
    );
  }

  function deleteGoal(id) {
    setGoals((current) => current.filter((goal) => goal.id !== id));
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Goals</Text>
        <Text style={styles.subtitle}>
          {goals.length}
          {goals.length === 0 || goals.length === 1 ? " goal" : " goals"}
        </Text>
      </View>
      <GoalInput onAddGoal={addGoal} />
      <GoalList
        goals={goals}
        onToggleGoal={toggleGoal}
        onDeleteGoal={deleteGoal}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#111827",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: "#6b7280",
  },
});
