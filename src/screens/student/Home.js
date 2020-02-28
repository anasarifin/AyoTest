import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

const studentHome = props => {
  const [code, inputCode] = useState('');

  return (
    <View>
      <Text>THIS IS STUDENT HOME SCREEN</Text>
      <TextInput
        placeholder="Kode tes masukin sini"
        onChange={e => inputCode(e.nativeEvent.text)}
      />
      <Button
        title="Masuk ke soal sesuai kode tes"
        onPress={() => props.navigation.navigate('student-test', {code: code})}
      />
      <Button
        title="Buat ngeliat statistik user"
        onPress={() => props.navigation.navigate('student-statistic')}
      />
      <Button
        title="Logout"
        onPress={() => props.navigation.navigate('login-student')}
      />
    </View>
  );
};

export default studentHome;
