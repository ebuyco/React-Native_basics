/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  StatusBar,
} from 'react-native';

import Header from './Header';
import Colors from './utils/color';

export default function App() {
  const [enterGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const fetchFonts = () => {
    return {
      'open-sans': require('../assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    };
  };

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enterGoal]);
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Header title="Goal App" startAsync={fetchFonts} />
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <TextInput
            placeholder="Course Goal"
            style={styles.textWrapper}
            onChangeText={goalInputHandler}
            value={enterGoal}
          />
          <Button style={styles.button} title="Add" onPress={addGoalHandler} />
        </View>
        <View>
          {courseGoals.map(goal => (
            <Text key={goal}>{goal}</Text>
          ))}
        </View>
        <View />
        <View style={styles.flexWrapper}>
          <View style={styles.test}>
            <Text>0</Text>
          </View>
          <View style={styles.test1}>
            <Text>1</Text>
          </View>
          <View style={styles.test2}>
            <Text>2</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: 50,
  },
  textWrapper: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  flexWrapper: {
    marginTop: 50,
    flexDirection: 'row',
    width: '80%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listText: {
    fontSize: 20,
    fontFamily: 'open-sans-bold',
  },
  test: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  test1: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  test2: {
    backgroundColor: Colors.green500,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
