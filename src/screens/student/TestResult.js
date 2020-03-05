import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {CommonActions, StackActions} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import font from '../Fonts';
import styles from './Style';

const resetAction = CommonActions.reset({
  index: 0,
  routes: [{name: 'login-student'}],
});

const TestResult = props => {
  const answer = useSelector(state => state.assessment.answer);
  const answerToArray = Object.values(answer);
  const correct = answerToArray.filter(x => x === 1).length;
  const score = (100 / answerToArray.length) * correct;
  const data = useSelector(state => state.assessment.data);
  // console.log(answer);

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
                  paddingBottom: 10,
                  textAlign: 'center',
                },
              ]}>
              nilai
              <Text style={score >= 70 ? styles.textGreen : styles.textPurle}>
                Kamu
              </Text>
              .
            </Text>
            <View
              style={{
                width: 50,
                marginHorizontal: 20,
                borderColor: '#000',
                borderWidth: 1,
                alignSelf: 'center',
              }}></View>
          </View>
          {/* <Text
            style={[
              {textAlign: 'center', marginBottom: 10, fontSize: 80},
              styles.textGreen,
            ]}>
            90
          </Text> */}
          <View
            style={[
              score >= 70 ? styles.bgGreen : styles.bgPurle,
              styles.shadow,
              {
                width: 130,
                height: 130,
                borderRadius: 100,
                alignSelf: 'center',
                marginTop: 20,
                padding: 15,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            <Text style={[{marginBottom: 10, fontSize: 80}, styles.textWhite]}>
              {Math.round(score)}
            </Text>
          </View>
          <View style={[styles.boxWrapp, styles.shadow, {marginBottom: 100}]}>
            <Text
              style={{
                width: '100%',
                textAlign: 'center',
                marginBottom: 10,
                fontSize: 25,
              }}>
              Detail Nilai
            </Text>
            {/* <Text style={{fontWeight:'700'}}>Data</Text> */}
            {/* <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                borderBottomWidth: 1,
                borderColor: 'gray',
                padding: 10,
              }}>
              <Text style={{width: '40%'}}>Nama Matkul </Text>
              <Text style={{width: '10%'}}>:</Text>
              <Text style={{width: '50%', fontWeight: '700'}}>
                Bahasa indonesia dasar
              </Text>
            </View> */}

            {/* this */}
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                borderBottomWidth: 1,
                borderColor: 'gray',
                padding: 10,
              }}>
              <Text style={{width: '40%'}}>Jumlah Soal</Text>
              <Text style={{width: '10%'}}>:</Text>
              <Text style={{width: '50%', fontWeight: '700'}}>
                {answerToArray.length}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                borderBottomWidth: 1,
                borderColor: 'gray',
                padding: 10,
              }}>
              <Text style={{width: '40%'}}>Jawaban Benar</Text>
              <Text style={{width: '10%'}}>:</Text>
              <Text style={{width: '50%', fontWeight: '700'}}>{correct}</Text>
            </View>
            {/* this */}

            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                padding: 10,
              }}>
              <Text
                style={{width: '100%', textAlign: 'center', fontWeight: '700'}}>
                Keterangan
              </Text>

              {/* kalo nilai diatas kkm */}
              {score >= 70 ? (
                <Text
                  style={[
                    {
                      width: '100%',
                      marginTop: 10,
                      textAlign: 'center',
                      fontWeight: '700',
                    },
                    styles.textGreen,
                  ]}>
                  "Hore! Anda lulus dalam mata kuliah ini."
                </Text>
              ) : (
                <Text
                  style={[
                    {
                      width: '100%',
                      marginTop: 10,
                      textAlign: 'center',
                      fontWeight: '700',
                    },
                    styles.textPurle,
                  ]}>
                  Sayang sekali, nilai kamu masih dibawah rata - rata. Silakan
                  mengikuti test selanjutnya, SEMANGAT!
                </Text>
              )}

              {/* kalo nilai diatas kkm */}

              {/* kalo nilai dibawah kkm */}

              {/* kalo nilai dibawah kkm */}
            </View>
          </View>

          {/*  */}
        </ScrollView>
        <View style={styles.bottomViewSm}>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              padding: 25,
            }}>
            <View style={{width: '100%', padding: 0}}>
              <TouchableOpacity
                style={{marginTop: 0}}
                onPress={() => {
                  props.navigation.navigate('student-home');
                  // console.log(data);
                }}>
                <View
                  style={[
                    styles.boxSm,
                    score >= 70 ? styles.bgGreen : styles.bgPurle,
                    styles.shadow,
                    {
                      width: '100%',
                      marginTop: 0,
                    },
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
                    Lihat Daftar Nilai
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default TestResult;

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   Button,
//   KeyboardAvoidingView,
//   ScrollView,
//   TouchableOpacity,
//   Modal,
// } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
// import {StackActions} from '@react-navigation/native';
// import {assessment} from '../../redux/actions/assessment';
// import {connect} from 'react-redux';
// import Icon from 'react-native-vector-icons/FontAwesome5';

// import font from '../Fonts';
// import styles from './Style';
// import {TextInput} from 'react-native-gesture-handler';

// const radio_props = [
//   {label: 'Itu adalah', value: 0},
//   {label: 'Adalah itu', value: 1},
//   {label: 'Semua benar', value: 2},
//   {label: 'Semua salah', value: 3},
//   {label: 'Gatau', value: 4},
// ];
// const FinishScreen = props => {
//   const [modalQuestion, modal] = useState(false);
//   const [answer, setAnswer] = useState(null);
//   return (
//     <KeyboardAvoidingView style={styles.containerView}>
//       <View style={[styles.MainContainer]}>
//         <ScrollView style={{width: '100%'}}>
//           <View>
//             <Text
//               style={[
//                 font.Aquawax,
//                 {
//                   fontSize: 45,
//                   padding: 20,
//                   paddingBottom: 10,
//                   textAlign: 'center',
//                 },
//               ]}>
//               nilai<Text style={styles.textGreen}>Kamu</Text>.
//             </Text>
//             <View
//               style={{
//                 width: 50,
//                 marginHorizontal: 20,
//                 borderColor: '#000',
//                 borderWidth: 1,
//                 alignSelf: 'center',
//               }}></View>
//           </View>
//           {/* <Text
//             style={[
//               {textAlign: 'center', marginBottom: 10, fontSize: 80},
//               styles.textGreen,
//             ]}>
//             90
//           </Text> */}
//           <View
//             style={[
//               styles.bgGreen,
//               styles.shadow,
//               {
//                 width: 130,
//                 height: 130,
//                 borderRadius: 100,
//                 alignSelf: 'center',
//                 marginTop: 20,
//                 padding: 15,
//                 flex: 1,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               },
//             ]}>
//             <Text style={[{marginBottom: 10, fontSize: 80}, styles.textWhite]}>
//               62
//             </Text>
//           </View>
//           <View style={[styles.boxWrapp, styles.shadow, {marginBottom: 100}]}>
//             <Text
//               style={{
//                 width: '100%',
//                 textAlign: 'center',
//                 marginBottom: 10,
//                 fontSize: 25,
//               }}>
//               Detail Nilai
//             </Text>
//             {/* <Text style={{fontWeight:'700'}}>Data</Text> */}
//             <View
//               style={{
//                 flexDirection: 'row',
//                 flexWrap: 'wrap',
//                 borderBottomWidth: 1,
//                 borderColor: 'gray',
//                 padding: 10,
//               }}>
//               <Text style={{width: '40%'}}>Nama Matkul </Text>
//               <Text style={{width: '10%'}}>:</Text>
//               <Text style={{width: '50%', fontWeight: '700'}}>
//                 Bahasa indonesia dasar
//               </Text>
//             </View>

//             {/* this */}
//             <View
//               style={{
//                 flexDirection: 'row',
//                 flexWrap: 'wrap',
//                 borderBottomWidth: 1,
//                 borderColor: 'gray',
//                 padding: 10,
//               }}>
//               <Text style={{width: '40%'}}>Jumlah Soal </Text>
//               <Text style={{width: '10%'}}>:</Text>
//               <Text style={{width: '50%', fontWeight: '700'}}>50 soal</Text>
//             </View>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 flexWrap: 'wrap',
//                 borderBottomWidth: 1,
//                 borderColor: 'gray',
//                 padding: 10,
//               }}>
//               <Text style={{width: '40%'}}>Jawaban benar </Text>
//               <Text style={{width: '10%'}}>:</Text>
//               <Text style={{width: '50%', fontWeight: '700'}}>46</Text>
//             </View>
//             {/* this */}

//             <View
//               style={{
//                 flexDirection: 'row',
//                 flexWrap: 'wrap',
//                 padding: 10,
//               }}>
//               <Text
//                 style={{width: '100%', textAlign: 'center', fontWeight: '700'}}>
//                 Keterangan
//               </Text>

//               {/* kalo nilai diatas kkm */}
//               <Text
//                 style={[
//                   {
//                     width: '100%',
//                     marginTop: 10,
//                     textAlign: 'center',
//                     fontWeight: '700',
//                   },
//                   styles.textGreen,
//                 ]}>
//                 Hore! Anda lulus dalam mata kuliah ini.
//               </Text>
//               {/* kalo nilai diatas kkm */}

//               {/* kalo nilai dibawah kkm */}
//               {/* <Text
//                 style={[
//                   {
//                     width: '100%',
//                     marginTop: 10,
//                     textAlign: 'center',
//                     fontWeight: '700',
//                   },
//                   styles.textPurle,
//                 ]}>
//                 Sayang sekali, nilai kamu masih dibawah rata - rata. Silakan
//                 mengikuti test selanjutnya, SEMANGAT!
//               </Text> */}
//               {/* kalo nilai dibawah kkm */}
//             </View>
//           </View>

//           {/*  */}
//         </ScrollView>
//         <View style={styles.bottomViewSm}>
//           <View
//             style={{
//               flexWrap: 'wrap',
//               flexDirection: 'row',
//               padding: 25,
//             }}>
//             <View style={{width: '100%', padding: 0}}>
//               <TouchableOpacity
//                 style={{marginTop: 0}}
//                 onPress={() => props.navigation.navigate('student-home')}>
//                 <View
//                   style={[
//                     styles.boxSm,
//                     styles.bgGreen,
//                     styles.shadow,
//                     {
//                       width: '100%',
//                       marginTop: 0,
//                     },
//                   ]}>
//                   <Text
//                     style={[
//                       font.Aquawax,
//                       {
//                         color: '#fff',
//                         textAlign: 'center',
//                         textAlignVertical: 'center',
//                         fontSize: 14,
//                       },
//                     ]}>
//                     Lihat Daftar Nilai
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     assessment: state.assessment,
//   };
// };
// export default connect(mapStateToProps)(FinishScreen);
