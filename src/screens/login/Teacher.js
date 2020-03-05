import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import Axios from 'axios';
import {StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import font from '../Fonts';
import styless from './Style';
import jwt_decode from 'jwt-decode';
import {connect, useSelector, useDispatch} from 'react-redux';
import {getUser, getStats, getAss} from '../../redux/actions/user';

const url = 'http://3.85.4.188:3333/api/admin/login';
const urls = 'http://3.85.4.188:3333/api/admin/';
const urlx = 'http://3.85.4.188:3333/api/assessment/detailbyadmin/';

const LoginStudent = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // constructor() {
  //   super();
  //   this.state = {
  //     email: false,
  //     password: false,
  //     warning: false,
  //     loading: false,
  //   };
  //   // this.setUsername = this.setUsername.bind(this);
  //   // this.setPassword = this.setPassword.bind(this);
  //   this.login = this.login.bind(this);
  // }

  const login = () => {
    setWarning('');
    setLoading(true);
    // console.log(this.state.username);
    // console.log(this.state.password);
    Axios.post(url, {
      email: email,
      password: password,
    })
      .then(resolve => {
        if (resolve.data.token) {
          AsyncStorage.setItem('tokenX', resolve.data.token);
          AsyncStorage.setItem('student', 'contoh');
          props.navigation.dispatch(StackActions.replace('navigator-teacher'));
          setLoading(false);
          Axios.get(urls + jwt_decode(resolve.data.token).id).then(resolve2 => {
            dispatch(getUser(resolve2.data.data[0]));
          });
          Axios.get(urlx + 18).then(
            resolve3 => {
              console.log(resolve3.data.data);
              dispatch(getAss(resolve3.data.data));
            },
            // jwt_decode(resolve.data.token).id
          );
        }
      })
      .catch(() => {
        if (!email) {
          setLoading(false);
          setWarning('Silahkan masukkan email anda!');
        } else if (!password) {
          setLoading(false);
          setWarning('Silahkan masukkan password anda!');
        } else {
          setLoading(false);
          setWarning("Email and password don't match!");
        }
      });
  };

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

  return (
    <ScrollView style={{backgroundColor: '#74A2A8'}}>
      <StatusBar backgroundColor="#060709" translucent={true} />
      <KeyboardAvoidingView style={styless.container}>
        <View style={styless.loginScreenContainer}>
          <View style={styless.loginFormView}>
            <View style={styless.logoCon}>
              <Text style={[font.Aquawax, {fontSize: 65, color: '#060709'}]}>
                ayo<Text style={{color: '#CBDBEC'}}>test</Text>.
              </Text>
              <Text style={[font.Questriasl, {color: '#060709'}]}>
                Masuk sebagai guru.
              </Text>
            </View>
            <Text style={{textAlign: 'center'}}>{warning}</Text>
            <TextInput
              style={styless.inputText}
              placeholder="Username"
              placeholderTextColor="rgba(0,0,0,.5)"
              onChange={e => setEmail(e.nativeEvent.text)}
            />
            <TextInput
              style={styless.inputText}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="rgba(0,0,0,.5)"
              onChange={e => setPassword(e.nativeEvent.text)}
            />

            <TouchableOpacity
              onPress={
                () => login()
                // () =>
                // this.props.navigation.dispatch(
                //   StackActions.replace('navigator-student'),
                // )
              }>
              <View style={[styless.loginButton]}>
                {!loading ? (
                  <Text
                    style={{color: '#fff', textAlign: 'center', padding: 13}}>
                    Login
                  </Text>
                ) : (
                  <View style={{padding: 13}}>
                    <ActivityIndicator />
                  </View>
                )}
              </View>
            </TouchableOpacity>

            <View style={styless.footer}>
              <Text style={styless.footerText}>Belum memiliki akun?</Text>
              <TouchableOpacity>
                <Text
                  style={styless.registerButton}
                  onPress={() => props.navigation.navigate('register-teacher')}>
                  Daftar disini
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styless.footer}>
              <Text style={styless.footerText}>Login</Text>
              <TouchableOpacity>
                <Text
                  style={styless.registerButton}
                  onPress={() => props.navigation.navigate('login-student')}>
                  student
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
};

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

export default LoginStudent;
