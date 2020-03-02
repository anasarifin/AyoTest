import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';

import font from '../Fonts';
import styles from './Style';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

const studentHome = props => {
  const [topic, setTopic] = useState('');
  const [score, setScore] = useState('');
  const [teacher, setTeacher] = useState('');
  const [date, setDate] = useState('');
  const [modal, showModal] = useState(false);
  const dummy = [
    {topic: 'Mathematic', score: 90, teacher: 'Udin', date: '12 Agustus 2008'},
    {topic: 'Science', score: 72, teacher: 'Asep', date: '12 Agustus 2008'},
    {topic: 'English', score: 99, teacher: 'Asep', date: '12 Agustus 2008'},
    {topic: 'History', score: 55, teacher: 'Asep', date: '12 Agustus 2008'},
    {topic: 'Economy', score: 70, teacher: 'Asep', date: '12 Agustus 2008'},
  ];

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setTopic(item.topic);
          setScore(item.score);
          setTeacher(item.teacher);
          setDate(item.date);
          showModal(true);
        }}
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          borderBottomWidth: 1,
          borderColor: 'gray',
          padding: 10,
        }}>
        <Text style={{width: '10%'}}>{index + 1}</Text>
        <Text style={{width: '70%'}}>{item.topic}</Text>
        <Text style={{width: '20%', textAlign: 'center'}}>{item.score}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <KeyboardAvoidingView style={styles.containerView}>
      {/* <ScrollView style={{height: '100%'}}>
        <View style={[styles.boxWrapp, styles.shadow]}>
          <View style={[styles.box, styles.bgGreen, styles.shadow]}>
            <Text
              style={[
                font.Aquawax,
                {
                  color: '#060709',
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  fontSize: 20,
                },
              ]}>
              Input Code
            </Text>
            <TextInput
              placeholder="ex: 42315"
              style={[styles.inputText, {marginTop: 10}]}></TextInput>
            <TouchableOpacity onPress={() => modal(true)}>
              <View
                style={[
                  styles.submit,
                  styles.shadow,
                  styles.bgBlack,
                  {marginTop: 20},
                ]}>
                <Text style={[font.Aquawax, {color: '#00f28e'}]}>Submit</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('student-statistic')}>
            <View style={[styles.box, styles.shadow, styles.bgPurle]}>
              <Text
                style={[
                  font.Aquawax,
                  {
                    color: '#fff',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontSize: 20,
                  },
                ]}>
                Score Terakhir
              </Text>
              <Text style={{fontSize: 60, marginTop: 25, color: '#fff'}}>
                87
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('login-student')}
            style={{marginTop: 130}}>
            <View style={[styles.boxSm, styles.bgBlack, styles.shadow]}>
              <Text
                style={[
                  font.Aquawax,
                  {
                    color: '#fff',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontSize: 14,
                  },
                ]}>
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView> */}
      <View style={[styles.MainContainer]}>
        <ScrollView style={{width: '100%'}}>
          <View>
            <Text
              style={[
                font.Aquawax,
                {fontSize: 40, padding: 20, paddingBottom: 10},
              ]}>
              Daftar <Text style={styles.textGreen}>Nilai</Text>.
            </Text>
            <View
              style={{
                width: 50,
                marginHorizontal: 20,
                borderColor: '#0FB63F',
                borderWidth: 1,
              }}></View>
          </View>
          <View style={[styles.boxWrapp, styles.shadow]}>
            {/* <Text style={{fontWeight:'700'}}>Data</Text> */}
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                borderBottomWidth: 1,
                borderColor: 'gray',
                padding: 10,
              }}>
              <Text style={{width: '10%', fontWeight: '700'}}>#</Text>
              <Text style={{width: '70%', fontWeight: '700'}}>Nama Matkul</Text>
              <Text
                style={{width: '20%', fontWeight: '700', textAlign: 'center'}}>
                Nilai
              </Text>
            </View>

            <FlatList
              data={dummy}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />

            {/* this */}
            {/* <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                borderBottomWidth: 1,
                borderColor: 'gray',
                padding: 10,
              }}>
              <Text style={{width: '10%'}}>1</Text>
              <Text style={{width: '70%'}}>Matematika Dasar</Text>
              <Text style={{width: '20%', textAlign: 'center'}}>78</Text>
            </View> */}
            {/* this */}

            {/* <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                borderBottomWidth: 1,
                borderColor: 'gray',
                padding: 10,
              }}>
              <Text style={{width: '10%'}}>2</Text>
              <Text style={{width: '70%'}}>Agama</Text>
              <Text style={{width: '20%', textAlign: 'center'}}>80</Text>
            </View> */}
            {/* <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                borderBottomWidth: 1,
                borderColor: 'gray',
                padding: 10,
              }}>
              <Text style={{width: '10%'}}>3</Text>
              <Text style={{width: '70%'}}>Bahasa Indonesia</Text>
              <Text style={{width: '20%', textAlign: 'center'}}>63</Text>
            </View> */}

            {/* <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                padding: 10,
              }}>
              <Text style={{width: '80%', textAlign: 'right'}}>
                Rata - rata :{' '}
              </Text>
              <Text style={{width: '20%', textAlign: 'center'}}>80</Text>
            </View> */}
          </View>
        </ScrollView>

        <View style={styles.bottomView}>
          <TouchableOpacity
            style={{
              width: '40%',
              height: '100%',
            }}
            onPress={() => props.navigation.navigate('student-statistic')}>
            <View>
              <Text style={styles.textStyle}>
                <Icon name="award" size={25} style={styles.textGreen} />
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnCircle, styles.bgGreen, styles.shadow]}>
            <View style={styles.circleIcon}>
              <Text style={{color: '#fff'}}>
                <Icon name="plus" size={30} style={styles.textWhite} />
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '20%',
              height: '100%',
            }}
            onPress={() => props.navigation.navigate('student-home')}>
            {/* hanya sepasi */}
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '40%',
              height: '100%',
            }}
            onPress={() => props.navigation.navigate('student-profile')}>
            <View>
              <Text style={styles.textStyle}>
                <Icon name="child" size={25} style={styles.textGreen} />
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Modal visible={modal}>
        <Button title="back" onPress={() => showModal(false)} />
        <Text>{topic}</Text>
        <Text>{score}</Text>
        <Text>{teacher}</Text>
        <Text>{date}</Text>
        {/* <FlatList
          data={dummyDetail.detail}
          renderItem={({item}) => (
            <View>
              <Text>Date: {item.date}</Text>
              <Text>Score: {item.score}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        /> */}
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default studentHome;
