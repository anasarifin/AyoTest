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
} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {assessment} from '../../redux/actions/assessment';
import AsyncStorage from '@react-native-community/async-storage';
import font from '../Fonts';
import styles from './Style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Axios from 'axios';
import {useDispatch} from 'react-redux';

const StudentHome = props => {
  const [modalDelete, modal] = useState(false);
  const [code, inputCode] = useState('');
  const dispatch = useDispatch();

  return (
    <KeyboardAvoidingView style={styles.containerView}>
      <View style={[styles.MainContainer]}>
        <ScrollView style={{width: '100%'}}>
          <View>
            <Text
              style={[
                font.Aquawax,
                {
                  fontSize: 40,
                  padding: 20,
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
              style={[styles.inputText, {textAlign: 'center'}]}
              onChange={e => inputCode(e.nativeEvent.text)}
            />
            <TouchableOpacity onPress={() => modal(true)}>
              <View
                style={[
                  styles.submit,
                  styles.bgGreen,
                  {marginTop: 20, width: 100, alignSelf: 'center'},
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

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalDelete}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.wrapp}>
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
              Axios.get('http://3.85.4.188:3333/api/question').then(resolve =>
                dispatch(assessment(resolve.data.data)),
              );
              // dispatch(assessment())
              props.navigation.dispatch(
                StackActions.replace('student-test', {code: code}),
              );
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
