import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Axios from 'axios';
import {StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import SwipeRender from 'react-native-swipe-render';

import font from '../Fonts';
import styless from './Style';

const url = 'http://3.85.4.188:3333/api/admin/login';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      warning: false,
      loading: false,
    };
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.login = this.login.bind(this);
  }

  login() {
    this.setState({
      loading: true,
    });
    // console.log(this.state.username);
    // console.log(this.state.password);
    Axios.post(url, {
      email: this.state.username,
      password: this.state.password,
    }).then(resolve => {
      if (resolve.data.token) {
        AsyncStorage.setItem('token', resolve.data.token);
        this.props.navigation.dispatch(StackActions.replace('main'));
      } else {
        this.setState({loading: false, warning: resolve.data.warning});
      }
    });
  }

  setUsername(value) {
    this.setState({
      username: value,
    });
  }

  setPassword(value) {
    this.setState({
      password: value,
    });
  }

  render() {
    return (
      <SwipeRender
        // OPTIONAL PROP USAGE.
        index={1} // default 0
        loop={false} // default false
        loadMinimal={true} // default false
        loadMinimalSize={2}
        horizontal={true} // default true
        enableAndroidViewPager={false} // default ScrollView
        // TO ENABLE AndroidViewPager:
        // react-native >= 0.60 - install @react-native-community/viewpager separately
        // react-native < 0.60 - ready to go!
      >
        <LoginStudent />
        <ImageBackground
          source={require('../../../assets/img/bg1.jpg')}
          style={{width: '100%', height: '100%'}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(255,255,255, .0)',
            }}>
            <Text style={[font.Aquawax, {fontSize: 70, color: '#060709'}]}>
              ayo<Text style={{color: '#0FB63F'}}>Test</Text>.
            </Text>
            <Text style={[{color: '#060709', textAlign: 'left'}]}>
              {'<< '}Geser untuk Masuk >>
            </Text>
          </View>
        </ImageBackground>
        <LoginTeacher />
      </SwipeRender>
    );
  }
}

const styles = StyleSheet.create({});
