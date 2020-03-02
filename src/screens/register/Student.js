import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {StackActions} from '@react-navigation/native';
import Axios from 'axios';

const url = 'http://3.85.4.188:3333/api/users/register';

const Register = () => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [rePassword, setRePassword] = useState(null);
  const [warning, setWarning] = useState(null);

  const register = () => {
    // Request AXIOS
    Axios.post(url, {
      email: email,
      name: name,
      password: password,
    }).then(resolve => {
      if (resolve.data.token) {
        this.props.navigation.dispatch(StackActions.replace('login-student'));
      }
    });
  };

  return (
    <View>
      <Text>Daftar</Text>
      <Text>{warning}</Text>
      <TextInput
        placeholder="email"
        onChange={e => setEmail(e.nativeEvent.text)}
      />
      <TextInput
        placeholde="name"
        onChange={e => setName(e.nativeEvent.text)}
      />
      <TextInput
        placeholder="password"
        onChange={e => setPassword(e.nativeEvent.text)}
      />
      <TextInput
        placeholder="re-type password"
        onChange={e => setRePassword(e.nativeEvent.text)}
      />
      <Button onPress={register} />
    </View>
  );
};

export default Register;
