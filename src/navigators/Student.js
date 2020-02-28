import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StudentHome from '../screens/student/Home';
import StudentTest from './Test';
import StudentFinish from '../screens/student/Finish';
import StudentStatistic from '../screens/student/Statistic';
// import LoginTeacher from '../screens/login/Teacher';

const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="student-home" headerMode="none">
      <Stack.Screen name="student-home" component={StudentHome} />
      <Stack.Screen name="student-test" component={StudentTest} />
      <Stack.Screen name="student-finish" component={StudentFinish} />
      <Stack.Screen name="student-statistic" component={StudentStatistic} />
      {/* <Stack.Screen name="login-teacher" component={LoginTeacher} /> */}
      {/* <Stack.Screen name="navigator-student" component={NavigatorStudent} />
      <Stack.Screen name="navigator-teacher" component={NavigatorTeacher} /> */}
    </Stack.Navigator>
  );
};

export default LoginNavigator;
