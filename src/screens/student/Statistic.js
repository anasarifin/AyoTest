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
      <Text>THIS IS STUDENT STATISTIC SCREEN</Text>
      <Button
        title="Back to login"
        onPress={() => props.navigation.navigate('login-student')}
      />
    </View>
  );
};

export default studentAdd;
