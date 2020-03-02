import React from 'react';
import {View, Text, Button} from 'react-native';
import {CommonActions, StackActions} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

// const resetAction = CommonActions.reset({
//   index: 0,
//   routes: [{name: 'login-student'}],
// });

const TestResult = props => {
  const answer = useSelector(state => state.assessment.answer);
  const answerToArray = Object.values(answer);
  const correct = answerToArray.filter(x => x === 1).length;
  const score = (100 / answerToArray.length) * correct;
  console.log(answer);

  return (
    <View>
      <Text>THIS IS STUDENT FINISH SCREEN</Text>
      <Text>Total Question: {answerToArray.length}</Text>
      <Text>Correct Answer: {correct}</Text>
      <Text>Score: {score}</Text>
      <Button
        title="Back to home"
        onPress={() => props.navigation.navigate('student-home')}
      />
    </View>
  );
};

export default TestResult;
