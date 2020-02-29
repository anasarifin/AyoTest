/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import Login from './src/screens/Login';
// import Register from './src/screens/Register';
// import Main from './src/screens/Main';
import AsyncStorage from '@react-native-community/async-storage';
import {Provider} from 'react-redux';
import store from './src/redux/store';
// import Login from './src/navigators/Login';
import LoginStudent from './src/screens/login/Student.js';
import LoginTeacher from './src/screens/login/Teacher.js';
import NavigatorStudent from './src/navigators/Student';
import NavigatorTeacher from './src/navigators/Teacher';

const Stack = createStackNavigator();

class AppWithRedux extends React.Component {
  constructor() {
    super();
    this.state = {
      login: true,
      code: false,
      complete: false,
    };
  }

  checkLogin = async () => {
    const login = await AsyncStorage.getItem('token');
    const code = await AsyncStorage.getItem('code');
    // console.log(login);
    // console.log(code);
    if (login) {
      this.setState({
        login: true,
      });
    }
    if (code) {
      this.setState({
        code: true,
      });
    }
    this.setState({
      complete: true,
    });
  };

  componentDidMount() {
    this.checkLogin();
  }

  render() {
    return (
      <NavigationContainer>
        {this.state.complete ? (
          <Stack.Navigator
            initialRouteName="login-student"
            // initialRouteName={
            //   !this.state.login
            //     ? 'login'
            //     : this.state.teacher
            //     ? 'teacher'
            //     : 'student'
            // }
            headerMode="none">
            <Stack.Screen name="login-student" component={LoginStudent} />
            <Stack.Screen name="login-teacher" component={LoginTeacher} />
            <Stack.Screen
              name="navigator-student"
              component={NavigatorStudent}
              initialParams={{code: this.state.code}}
            />
            <Stack.Screen
              name="navigator-teacher"
              component={NavigatorTeacher}
            />
            {/* <Stack.Screen
              name="student"
              component={Student}
              options={{gestureEnabled: false}}
            />
            <Stack.Screen
              name="teacher"
              component={Teacher}
              options={{gestureEnabled: false}}
            /> */}
          </Stack.Navigator>
        ) : (
          <View style={styles.container}>
            <Text>Splash Screen</Text>
          </View>
        )}
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <AppWithRedux />
    </Provider>
  );
};

export default App;
