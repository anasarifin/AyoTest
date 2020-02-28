import React from 'react';
import {View, Text, Button} from 'react-native';

const studentHome = props => {
  return (
    <View>
      <Text>THIS IS STUDENT HOME SCREEN</Text>
      <Button
        title="Move to detail"
        onPress={() => props.navigation.navigate('student-detail')}
      />
      <Button
        title="Move to statistic"
        onPress={() => props.navigation.navigate('student-statistic')}
      />
      <Button
        title="Logout"
        onPress={() => props.navigation.navigate('login-student')}
      />
    </View>
  );
};

export default studentHome;
