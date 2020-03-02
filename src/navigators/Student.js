import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StudentHome from '../screens/student/Home';
import StudentTest from './Test';
// import StudentFinish from '../screens/student/Finish';
import StudentProfile from '../screens/student/Profile';
import StudentStatistic from '../screens/student/Statistic';
// import LoginTeacher from '../screens/login/Teacher';

const Stack = createStackNavigator();

const LoginNavigator = props => {
  const code = props.route.params.code;
  console.log(code);
  return (
    <Stack.Navigator
      initialRouteName={code ? 'student-home' : 'student-home'}
      headerMode="none">
      <Stack.Screen name="student-home" component={StudentHome} />
      <Stack.Screen name="student-test" component={StudentTest} />
      <Stack.Screen name="student-profile" component={StudentProfile} />
      <Stack.Screen name="student-statistic" component={StudentStatistic} />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
