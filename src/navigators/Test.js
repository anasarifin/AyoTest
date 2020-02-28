import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TestList from '../screens/student/TestList';
import TestDetail from '../screens/student/TestDetail';
import StudentTest from './Test';
import StudentFinish from '../screens/student/Finish';
import StudentStatistic from '../screens/student/Statistic';
// import LoginTeacher from '../screens/login/Teacher';

const Stack = createStackNavigator();
const Dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const LoginNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="question-list" headerMode="none">
      <Stack.Screen name="question-list" component={TestList} />
      {Dummy.map((item, index) => {
        return (
          <Stack.Screen
            name={'question-' + (index + 1)}
            component={TestDetail}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default LoginNavigator;
