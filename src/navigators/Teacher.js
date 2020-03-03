import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TeacherHome from '../screens/teacher/Home';
import TeacherLive from '../screens/teacher/Live';
import TeacherProfile from '../screens/teacher/Profile';
// import NavigatorStudent from './Student';
// import NavigatorTeacher from './Teacher';

const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="teacher-home" headerMode="none">
      <Stack.Screen name="teacher-home" component={TeacherHome} />
      <Stack.Screen name="teacher-live" component={TeacherLive} />
      <Stack.Screen name="teacher-profile" component={TeacherProfile} />
      {/* <Stack.Screen name="navigator-student" component={NavigatorStudent} />
      <Stack.Screen name="navigator-teacher" component={NavigatorTeacher} /> */}
    </Stack.Navigator>
  );
};

export default LoginNavigator;
