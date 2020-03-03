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
      // email: '',
      // password: '',
      // name: '',

      warning: false,
      loading: false,
    };
    this.register = this.register.bind(this);
    // this.setUsername = this.setUsername.bind(this);
    // this.setPassword = this.setPassword.bind(this);
    // this.login = this.login.bind(this);
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

  setEmail(value) {
    this.setState({
      email: value,
    });
  }

  setPassword(value) {
    this.setState({
      password: value,
    });
  }

  setName(value) {
    this.setState({
      name: value,
    });
  }

  setAddress(value) {
    this.setState({
      address: value,
    });
  }

  setRePassword(value) {
    this.setState({
      rePassword: value,
    });
  }

  setPhone(value) {
    this.setState({
      phone: value,
    });
  }

  register() {
    const {
      name,
      email,
      password,
      rePassword,
      address,
      phone,
      gender,
    } = this.state;
    const regexName = /[a-z']/gi;
    const regexPassword = /[a-z0-9]/gi;
    const regexPhone = /0-9/gi;

    if (name && regexName.test(name)) {
      console.log('nama ngaco');
      this.setState({
        warning: 'Name is not valid!',
      });
    } else if (email) {
      console.log('email ngaco');
      this.setState({
        warning: 'Email is not valid!',
      });
    } else if (
      password &&
      password.length >= 6 &&
      regexPassword.test(password)
    ) {
      this.setState({
        warning: 'Password min is 6 character & not include special char!',
      });
    } else if (address) {
      this.setState({
        warning: 'Address cannot be empty!',
      });
    } else if (
      phone &&
      phone.length >= 11 &&
      phone.length <= 13 &&
      regexPhone.test(phone)
    ) {
      this.setState({
        warning: 'Phone number is not valid!',
      });
    } else if (password !== rePassword) {
      this.setState({
        warning: 'Re-type password is not valid!',
      });
    }
    // else if (image) {
    //   this.setState({
    //     warning: 'Image is cannot empty!',
    //   });
    // }
  }
  // Formdata
  // const formData = new FormData();
  // formData.append('name', this.state.name);
  // formData.append('description', this.state.description);
  // formData.append('price', this.state.price);
  // formData.append('stock', this.state.stock);
  // formData.append('image', {
  //   uri: this.state.image.uri,
  //   type: this.state.image.type,
  //   name: this.state.image.fileName,
  // });
  // formData.append('category_id', this.state.category);
  // if (
  //   !this.state.name ||
  //   !this.state.description ||
  //   !this.state.price ||
  //   !this.state.stock
  // ) {
  //   ToastAndroid.show('Adding failed!', ToastAndroid.SHORT);
  // }
  // Axios.post(url, formData, {
  //   headers: {
  //     usertoken: AsyncStorage.getItem('token'),
  //   },
  // })
  //   .then(() => {
  //     this.props.dispatch(
  //       products('http://100.24.32.116:9999/api/v1/products?page=1'),
  //     );
  //     ToastAndroid.show('Adding success!', ToastAndroid.SHORT);
  //     this.props.navigation.navigate('Home');
  //     this.setState({
  //       name: '',
  //       description: '',
  //       price: '',
  //       stock: '',
  //       category: 0,
  //       image: {uri: null, type: null, fileName: null},
  //     });
  //   })
  //   .catch(reject => {
  //     ToastAndroid.show('Adding failed!', ToastAndroid.SHORT);
  //     console.log(reject);
  //   });
  //   }
  // }

  // picker = async () => {
  //   const options = {
  //     title: 'Select Image',
  //     takePhotoButtonTitle: 'Take photo from camera',
  //     chooseFromLibraryButtonTitle: 'Choose photo from gallery',
  //   };

  //   ImagePicker.showImagePicker(options, response => {
  //     // console.log('Response = ', response.uri);
  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //     } else if (response.customButton) {
  //       console.log('User tapped custom button: ', response.customButton);
  //     } else {
  //       this.setState({
  //         image: response,
  //       });
  //     }
  //   });

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

              <TouchableOpacity style={{margin: 20}} onPress={this.picker}>
                <Image
                  style={styless.profileImage}
                  source={require('../../../assets/img/profile.jpg')}
                />
              </TouchableOpacity>
              <Text style={{fontSize: 18}}>Nama Lengkap</Text>
              <TextInput
                style={[styless.inputText]}
                placeholder="Masukan nama lengkap"
                onChange={e => this.setName(e.nativeEvent.text)}
              />
              <Text style={{fontSize: 18}}>Email</Text>
              <TextInput
                style={[styless.inputText]}
                placeholder="Masukan email"
                onChange={e => this.setEmail(e.nativeEvent.text)}
              />
              <Text style={{fontSize: 18}}>Alamat</Text>
              <TextInput
                style={[styless.inputText]}
                placeholder="Masukan alamat"
                onChange={e => this.setAddress(e.nativeEvent.text)}
              />
              <Text style={{fontSize: 18}}>Nomor Hp</Text>
              <TextInput
                style={[styless.inputText]}
                placeholder="Masukan nomor hp"
                onChange={e => this.setPhone(e.nativeEvent.text)}
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
                initial={1}
                textStyle={{fontSize: 16, marginLeft: -10}}
                circleSize={12}
                activeColor="green"
                deactiveColor="grey"
                selectedBtn={e =>
                  this.setState({
                    gender: e.value,
                  })
                }
              />
              <Text style={{fontSize: 18, paddingTop: 10}}>Password</Text>
              <TextInput
                style={[styless.inputText]}
                placeholder="Masukan password"
                onChange={e => this.setPassword(e.nativeEvent.text)}
              />
              <Text style={{fontSize: 18}}>Masukan Ulang Password</Text>
              <TextInput
                style={[styless.inputText]}
                placeholder="Masukan ulang password"
                onChange={e => this.setRePassword(e.nativeEvent.text)}
              />
            </View>
            <TouchableOpacity onPress={this.register}>
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

// const styles = StyleSheet.create({});
