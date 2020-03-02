import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const register = () => {
    // Request AXIOS
  };

  return (
    <View>
      <Text>Daftar</Text>
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
