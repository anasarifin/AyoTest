import React from 'react';
import {View, Text, Button} from 'react-native';
import {CommonActions, StackActions} from '@react-navigation/native';

// const resetAction = CommonActions.reset({
//   index: 0,
//   routes: [{name: 'login-student'}],
// });

const studentDetail = props => {
  return (
    <View>
      <Text>THIS IS STUDENT DETAIL SCREEN</Text>
      <Button
        title="Move to add"
        onPress={() => props.navigation.navigate('student-add')}
      />
    </View>
  );
};

export default studentDetail;
