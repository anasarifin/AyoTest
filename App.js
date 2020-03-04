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
import RegisterStudent from './src/screens/register/Student.js';
import {connect} from 'react-redux';
import RegisterTeacher from './src/screens/register/Teacher';

const Stack = createStackNavigator();

import font from './src/screens/Fonts';

class AppWithRedux extends React.Component {
  constructor() {
    super();
    this.state = {
      login: false,
      code: false,
      complete: false,
      inTest: false,
    };
  }

  checkLogin = async () => {
    const login = await AsyncStorage.getItem('token');
    // const code = await AsyncStorage.getItem('code');
    // console.log(login);
    // console.log(code);
    if (login) {
      // Axios.get(urls + jwt_decode(resolve.data.token).id).then(resolve2 => {
      //   dispatch(getUser(resolve2.data.data[0]));
      // });
      // Axios.get(urlx + jwt_decode(resolve.data.token).id).then(resolve3 =>
      //   dispatch(getStats(resolve3.data.data)),
      // );
      this.setState({
        login: true,
      });
    }
    if (this.state.code) {
      this.setState({
        code: true,
      });
    }
    // if (this.state.inTest) {

    // }
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
            // initialRouteName="login-student"
            initialRouteName={
              !this.state.login ? 'login-student' : 'navigator-student'
              // : this.state.teacher
              // ? 'teacher'
              // : 'student'
            }
            headerMode="none">
            <Stack.Screen name="login-student" component={LoginStudent} />
            <Stack.Screen name="login-teacher" component={LoginTeacher} />
            <Stack.Screen name="register-student" component={RegisterStudent} />
            <Stack.Screen name="register-teacher" component={RegisterTeacher} />
            <Stack.Screen
              name="navigator-student"
              component={NavigatorStudent}
              initialParams={{code: this.state.code, isTest: this.state.inTest}}
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
          <View
            style={{
              backgroundColor: '#fff',
              height: '100%',
              width: '100%',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={[font.Aquawax, {fontSize: 65, color: '#060709'}]}>
              ayo<Text style={{color: '#0FB63F'}}>test</Text>.
            </Text>
          </View>
        )}
      </NavigationContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    products: state.products,
  };
};

export default connect(mapStateToProps)(AppWithRedux);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default AppWithRedux;
