import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalState] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalState(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  return (
    <>
      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="your course goal"
            style={styles.textInput}
            onChangeText={goalInputHandler}
          />
          <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <View style={styles.textStyle}>
                  <Text style={styles.goalText}> {itemData.item.text} </Text>
                </View>
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
          {/* <ScrollView alwaysBounceVertical={false}>
            {courseGoals.map((goal, index) => {
              return (
                <View style={styles.textStyle} key={index}>
                  <Text style={styles.goalText}> {goal} </Text>
                </View>
              );
            })}
          </ScrollView> */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    padding: 8,
    marginRight: 8,
  },
  goalsContainer: {
    flex: 4,
  },
  textStyle: {
    margin: 8,
    padding: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 10,
  },
  goalText: {
    color: "white",
  },
});
