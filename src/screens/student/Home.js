import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {assessment} from '../../redux/actions/assessment';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

const StudentHome = props => {
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
        onPress={() => {
          AsyncStorage.setItem('code', code);
          props.dispatch(assessment());
          props.navigation.dispatch(
            StackActions.replace('student-test', {code: code}),
          );
        }}
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

const mapStateToProps = state => {
  return {
    assessment: state.assessment,
  };
};
export default connect(mapStateToProps)(StudentHome);
