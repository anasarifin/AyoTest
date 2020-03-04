import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {assessment} from '../../redux/actions/assessment';
import AsyncStorage from '@react-native-community/async-storage';
import font from '../Fonts';
import styles from './Style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import jwt_decode from 'jwt-decode';

const StudentHome = props => {
  const [modalDelete, modal] = useState(false);
  const [code, inputCode] = useState('');
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const complete = useSelector(state => state.assessment.complete);
  // console.log(AsyncStorage.getItem('token'));

  const check = async () => {
    const token = await AsyncStorage.getItem('token');
    console.log(token);
  };

  return (
    <KeyboardAvoidingView style={styles.containerView}>
      <View style={[styles.MainContainer]}>
        <ScrollView style={{width: '100%'}}>
          <View>
            <Text
              style={[
                font.Aquawax,
                {
                  fontSize: 45,
                  padding: 20,
                  paddingTop: 40,
                  paddingBottom: 10,
                  textAlign: 'center',
                },
              ]}>
              ayo<Text style={styles.textGreen}>Test</Text>.
            </Text>
            <View
              style={{
                width: 50,
                marginHorizontal: 20,
                borderColor: '#0FB63F',
                borderWidth: 1,
                alignSelf: 'center',
              }}></View>
          </View>
          <View style={[styles.boxWrapp, styles.shadow]}>
            <Text>Tanyakan kepada dosen anda apa kode nya:v</Text>
            {/* <Text style={{fontWeight: '700'}}>Kode : </Text> */}
            <TextInput
              placeholder="kode"
              placeholderTextColor="gray"
              style={[
                styles.inputText,
                styles.bgGrey,
                styles.textBlack,
                {textAlign: 'center'},
              ]}
              onChange={e => inputCode(e.nativeEvent.text)}
            />
            <TouchableOpacity onPress={() => modal(true)}>
              <View
                style={[
                  styles.submit,
                  styles.bgGreen,
                  {marginTop: 20, width: 'auto', alignSelf: 'center'},
                ]}>
                <Text style={{color: '#fff'}}>Submit</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.bottomView}>
          <TouchableOpacity
            style={{
              width: '40%',
              height: '100%',
            }}
            onPress={() => props.navigation.navigate('student-statistic')}>
            <View style={styles.icoMenu}>
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
            <View style={styles.circleIcon}>
              <Text style={styles.textStyle}>
                <Icon name="user-alt" size={25} style={styles.textGreen} />
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalDelete}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={[styles.wrapp, styles.containerView]}>
          <ScrollView style={{height: '85%'}}>
            <View>
              <View>
                <Text style={{textAlign: 'center', fontSize: 18}}>
                  <Text style={{}}>Kode : </Text>
                  <Text style={[styles.textGreen, {fontWeight: 'bold'}]}>
                    {code}
                  </Text>
                  <Text style={{}}>{'\n'}Jumlah soal : </Text>
                  <Text style={[styles.textGreen, {fontWeight: 'bold'}]}>
                    40
                  </Text>
                  <Text style={{}}>{'\n'}Waktu : </Text>
                  <Text style={[styles.textGreen, {fontWeight: 'bold'}]}>
                    10 menit
                  </Text>
                </Text>
                <Text
                  style={[
                    font.Aquawax,
                    {textAlign: 'center', paddingVertical: 200, fontSize: 30},
                  ]}>
                  Apakah anda siap untuk mengikuti ujian ini?
                </Text>
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity
            onPress={async () => {
              modal(false);
              // props.navigation.navigate('student-test-nya');
              AsyncStorage.setItem('code', code);
              Axios.get('http://3.85.4.188:3333/api/question/' + code).then(
                resolve => {
                  console.log(resolve.data.data.length);
                  console.log(user.id_users);
                  // dispatch(assessment(resolve.data.data));
                  if (resolve.data.data.length > 0) {
                    const id = resolve.data.data[0].id_assessment;
                    Axios.post('http://3.85.4.188:3333/api/answer/users', {
                      id_assessment: 1,
                      id_users: 3,
                    }).then(resolve2 => {
                      console.log(resolve2.data.data);
                      // console.log(resolve.data.data);
                      // const final = {
                      //   question: resolve.data.data,
                      //   answer: JSON.parse(resolve2.data.data[0].answer),
                      //   queue: JSON.parse(resolve2.data.data[0].question_queue),
                      // };
                      // console.log(final);
                    });
                    // props.navigation.dispatch(
                    //   StackActions.replace('student-test', {code: code}),
                    // );
                  } else {
                    Alert.alert('kode salah woy!');
                  }
                },
              );
              // dispatch(assessment())
            }}>
            <View style={[styles.boxSm, styles.bgGreen, styles.shadow]}>
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
                Siap !
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => modal(false)}>
            <View
              style={[
                styles.boxSm,
                styles.bgPurle,
                styles.shadow,
                {marginTop: 20},
              ]}>
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
                Kembali
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </KeyboardAvoidingView>

    // <View>
    //   <Text>THIS IS STUDENT HOME SCREEN</Text>
    //   <TextInput
    //     placeholder="Kode tes masukin sini"
    //     onChange={e => inputCode(e.nativeEvent.text)}
    //   />
    //   <Button
    //     title="Masuk ke soal sesuai kode tes"
    //     onPress={() => {
    //       AsyncStorage.setItem('code', code);
    //       props.dispatch(assessment());
    //       props.navigation.dispatch(
    //         StackActions.replace('student-test', {code: code}),
    //       );
    //     }}
    //   />
    //   <Button
    //     title="Buat ngeliat statistik user"
    //     onPress={() => props.navigation.navigate('student-statistic')}
    //   />
    //   <Button
    //     title="Logout"
    //     onPress={() => props.navigation.navigate('login-student')}
    //   />
    // </View>
  );
};

// const mapStateToProps = state => {
//   return {
//     assessment: state.assessment,
//   };
// };
// export default connect(mapStateToProps)(StudentHome);

export default StudentHome;
