import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Axios from 'axios';
import {StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import font from '../Fonts';
import styless from './Style';

const url = 'http://3.85.4.188:3333/api/users/login';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: false,
      password: false,
      warning: false,
      loading: false,
    };
    // this.setUsername = this.setUsername.bind(this);
    // this.setPassword = this.setPassword.bind(this);
    this.login = this.login.bind(this);
  }

  login() {
    this.setState({
      warning: '',
      loading: true,
    });
    // console.log(this.state.username);
    // console.log(this.state.password);
    Axios.post(url, {
      email: this.state.email,
      password: this.state.password,
    })
      .then(resolve => {
        if (resolve.data.token) {
          AsyncStorage.setItem('token', resolve.data.token);
          this.props.navigation.dispatch(
            StackActions.replace('navigator-student'),
          );
        }
      })
      .catch(() => {
        if (!this.state.email) {
          this.setState({
            loading: false,
            warning: 'Email blom dimasukin woy!',
          });
        } else if (!this.state.password) {
          this.setState({
            loading: false,
            warning: 'Password blom dimasukin woy!',
          });
        } else {
          this.setState({
            loading: false,
            warning: "Email and password don't match!",
          });
        }
      });
  }

  // setUsername(value) {
  //   this.setState({
  //     username: value,
  //   });
  // }

  // setPassword(value) {
  //   this.setState({
  //     password: value,
  //   });
  // }

  render() {
    return (
      <ScrollView style={{backgroundColor: '#CBDBEC'}}>
        <StatusBar backgroundColor="#060709" translucent={true} />
        <KeyboardAvoidingView behavior="padding" style={styless.container}>
          <View style={styless.loginScreenContainer}>
            <View style={styless.loginFormView}>
              <View style={styless.logoCon}>
                <Text style={[font.Aquawax, {fontSize: 65, color: '#060709'}]}>
                  ayo<Text style={{color: '#0FB63F'}}>test</Text>.
                </Text>
                <Text style={[font.Questriasl, {color: '#060709'}]}>
                  Login for student.
                </Text>
              </View>
              <Text>{this.state.warning}</Text>
              <TextInput
                style={styless.inputText}
                placeholder="Username"
                placeholderTextColor="rgba(0,0,0,.5)"
                onChange={e => this.setState({email: e.nativeEvent.text})}
              />
              <TextInput
                style={styless.inputText}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="rgba(0,0,0,.5)"
                onChange={e => this.setState({password: e.nativeEvent.text})}
              />

              <TouchableOpacity
                onPress={
                  this.login
                  // () =>
                  // this.props.navigation.dispatch(
                  //   StackActions.replace('navigator-student'),
                  // )
                }>
                <View style={[styless.loginButton]}>
                  <Text
                    style={{color: '#fff', textAlign: 'center', padding: 13}}>
                    Login
                  </Text>
                </View>
              </TouchableOpacity>

              <View style={styless.footer}>
                <Text style={styless.footerText}>Are you a teacher?</Text>
                <TouchableOpacity>
                  <Text
                    style={styless.registerButton}
                    onPress={() =>
                      this.props.navigation.navigate('login-teacher')
                    }>
                    Login here
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>

      // <SafeAreaView style={styles.container}>
      //   <StatusBar backgroundColor="rgba(0,0,0,.3)" translucent={true} />
      //   <View style={styles.logoCon}>
      //     {/* <Image
      //       source={require('../images/bar-logo.png')}
      //       style={styles.logo}
      //     /> */}
      //     <Text>STUDENT LOGIN SCREEN</Text>
      //   </View>
      //   <View style={styles.textCon}>
      //     <TextInput style={styles.warning}>{this.state.warning}</TextInput>
      //     <TextInput
      //       style={styles.inputText}
      //       placeholder="Username"
      //       placeholderTextColor="rgba(0,0,0,.5)"
      //       onChange={e => this.setState({username: e.nativeEvent.text})}
      //     />
      //     <TextInput
      //       style={styles.inputText}
      //       secureTextEntry={true}
      //       placeholder="Password"
      //       placeholderTextColor="rgba(0,0,0,.5)"
      //       onChange={e => this.setState({password: e.nativeEvent.text})}
      //     />
      //     <TouchableOpacity>
      //       <Text
      //         style={styles.loginButton}
      //         onPress={() =>
      //           this.props.navigation.dispatch(
      //             StackActions.replace('navigator-student'),
      //           )
      //         }>
      //         Login
      //       </Text>
      //     </TouchableOpacity>
      //     <ActivityIndicator
      //       style={this.state.loading ? styles.loadingOn : styles.loading}
      //       color="#ff5722"
      //       size="large"
      //     />
      //   </View>

      //   <View style={styles.footer}>
      //     <Text style={styles.footerText}>Are you a teacher?</Text>
      //     <TouchableOpacity>
      //       <Text
      //         style={styles.registerButton}
      //         onPress={() => this.props.navigation.navigate('login-teacher')}>
      //         Login here
      //       </Text>
      //     </TouchableOpacity>
      //   </View>
      // </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03a9f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoCon: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -200,
    zIndex: 1,
  },
  logo: {
    width: 170,
    height: 170,
    marginRight: -12,
  },
  inputText: {
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,.5)',
    width: 350,
    marginVertical: 10,
    paddingHorizontal: 20,
    fontSize: 20,
  },
  loginButton: {
    borderRadius: 20,
    backgroundColor: '#ff5722',
    width: 350,
    marginVertical: 10,
    paddingHorizontal: 20,
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 45,
    height: 45,
    color: 'white',
  },
  footer: {
    flexDirection: 'row',
    paddingBottom: 15,
  },
  footerText: {
    fontSize: 20,
  },
  warning: {
    marginTop: -40,
    fontSize: 18,
    color: 'red',
  },
  registerButton: {
    marginLeft: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  loading: {
    position: 'absolute',
    bottom: 50,
    opacity: 0,
  },
  loadingOn: {
    position: 'absolute',
    bottom: 50,
    opacity: 1,
  },
});
