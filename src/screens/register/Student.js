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
} from 'react-native';
import Axios from 'axios';
import {StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import RadioButtonRN from 'radio-buttons-react-native';

import font from '../Fonts';
import styless from './Style';

const url = 'http://3.85.4.188:3333/api/admin/login';

export default class RegisterStudent extends React.Component {
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
      <ScrollView style={{backgroundColor: '#CBDBEC'}}>
        <StatusBar backgroundColor="#060709" translucent={true} />
        <KeyboardAvoidingView style={styless.container}>
          <View style={styless.loginScreenContainer}>
            <View style={styless.loginFormView}>
              <View style={styless.logoConRegis}>
                <Text style={[font.Aquawax, {fontSize: 65, color: '#060709'}]}>
                  ayo<Text style={{color: '#0FB63F'}}>test</Text>.
                </Text>
                <Text style={[{color: '#060709'}]}>Daftar sebagai siswa</Text>
              </View>

              <TouchableOpacity style={{margin: 20}}>
                <Image
                  style={styless.profileImage}
                  source={require('../../../assets/img/profile.jpg')}
                />
              </TouchableOpacity>
              <Text style={{fontSize: 18}}>Nama Lengkap</Text>
              <TextInput
                style={[styless.inputText]}
                placeholder="Masukan nama lengkap"
              />
              <Text style={{fontSize: 18}}>Email</Text>
              <TextInput
                style={[styless.inputText]}
                placeholder="Masukan email"
              />
              <Text style={{fontSize: 18}}>Alamat</Text>
              <TextInput
                style={[styless.inputText]}
                placeholder="Masukan alamat"
              />
              <Text style={{fontSize: 18}}>Nomor Hp</Text>
              <TextInput
                style={[styless.inputText]}
                placeholder="Masukan nomor hp"
              />
              <Text style={{fontSize: 18, paddingBottom: 10}}>
                Jenis Kelamin
              </Text>
              <RadioButtonRN
                data={[
                  {label: 'Pria', value: 0},
                  {label: 'Wanita', value: 1},
                ]}
                box={false}
                initial={0}
                textStyle={{fontSize: 16, marginLeft: -10}}
                circleSize={12}
                activeColor="green"
                deactiveColor="grey"
              />
              <Text style={{fontSize: 18, paddingTop: 10}}>Password</Text>
              <TextInput
                style={[styless.inputText]}
                placeholder="Masukan password"
              />
              <Text style={{fontSize: 18}}>Masukan Ulang Password</Text>
              <TextInput
                style={[styless.inputText]}
                placeholder="Masukan ulang password"
              />
            </View>
            <TouchableOpacity>
              <View style={[styless.loginButton]}>
                <Text style={{color: '#fff', textAlign: 'center', padding: 13}}>
                  Daftar
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
