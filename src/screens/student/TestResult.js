import React from 'react';
import {View, Text, Button} from 'react-native';
import {CommonActions, StackActions} from '@react-navigation/native';

// const resetAction = CommonActions.reset({
//   index: 0,
//   routes: [{name: 'login-student'}],
// });

const studentAdd = props => {
  return (
    <View>
      <Text>THIS IS STUDENT FINISH SCREEN</Text>
      <Button
        title="Back to home"
        onPress={() => props.navigation.navigate('student-home')}
      />
    </View>
  );
};

export default studentAdd;
