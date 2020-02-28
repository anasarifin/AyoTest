import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StudentHome from '../screens/student/Home';
import StudentDetail from '../screens/student/Detail';
import StudentAdd from '../screens/student/Add';
import StudentStatistic from '../screens/student/Statistic';
// import LoginTeacher from '../screens/login/Teacher';

const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="student-home" headerMode="none">
      <Stack.Screen name="student-home" component={StudentHome} />
      <Stack.Screen name="student-detail" component={StudentDetail} />
      <Stack.Screen name="student-add" component={StudentAdd} />
      <Stack.Screen name="student-statistic" component={StudentStatistic} />
      {/* <Stack.Screen name="login-teacher" component={LoginTeacher} /> */}
      {/* <Stack.Screen name="navigator-student" component={NavigatorStudent} />
      <Stack.Screen name="navigator-teacher" component={NavigatorTeacher} /> */}
    </Stack.Navigator>
  );
};

export default LoginNavigator;
