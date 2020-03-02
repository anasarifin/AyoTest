import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  ScrollView,
  Modal,
} from 'react-native';
import {CommonActions, StackActions} from '@react-navigation/native';
// import QuestionDetail from '../../components/QuestionDetail';
import {useDispatch, useSelector} from 'react-redux';
import RadioButtonRN from 'radio-buttons-react-native';
// import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import font from '../Fonts';
import styles from './Style';
import {TextInput} from 'react-native-gesture-handler';
import {saveAnswer} from '../../redux/actions/assessment';

// const resetAction = CommonActions.reset({
//   index: 0,
//   routes: [{name: 'login-student'}],
// });

const TestList = props => {
  // constructor() {
  //   super();
  //   this.state = {
  //     data: [1, 2, 3, 4, 5, 6, 7, 8],
  //     show: false,
  //     detail: '',
  //   };
  //   this.showModal = this.showModal.bind(this);
  // }

  // showModal(item) {
  //   this.setState({show: this.state.show ? false : true});
  // }

  // nextQuestion(index) {
  //   if (index > 0) {
  //     this.setState({
  //       question: this.state.data[index + 1],
  //     });
  //   }
  // }
  // backQuestion(index) {
  //   if (index < index.length) {
  //     this.setState({
  //       question: this.state.data[index - 1],
  //     });
  //   }
  // }

  // questionNavigation(no) {
  //   this.props.navigation.navigate('question-' + no);
  // }

  const assessment = useSelector(state => state.assessment.assessmentRandom);
  const answer = useSelector(state => state.assessment.answer);
  const answerToArray = Object.values(answer).some(x => x === 0);
  const choices = useSelector(state => state.assessment.choicesRandom);
  const [modalQuestion, modal] = useState(false);
  const [index, setIndex] = useState(null);
  // const answerInit = useSelector(state => state.assessment.answer);
  const [answerLocal, setAnswer] = useState(0);
  const dispatch = useDispatch();
  // const [answer, setAnswer] = useState(null);

  // const renderItem = ({item, index}) => {
  //   return (
  //     <TouchableOpacity
  //       onPress={() =>
  //         props.navigation.navigate('question-' + (index + 1), {
  //           data: item,
  //           no: index + 1,
  //         })
  //       }>
  //       <Text>{item}</Text>
  //     </TouchableOpacity>
  //   );
  // };

  // const renderItem = ({item, i}) => {
  //   return (
  //     <TouchableOpacity style={[styles.boxWrappSm]} onPress={() => modal(true)}>
  //       <View style={styles.boxWrappSmQu}>
  //         <Text>{i + 1}</Text>
  //       </View>
  //     </TouchableOpacity>

  //     // <TouchableOpacity
  //     //   onPress={() =>
  //     //     props.navigation.navigate('question-' + (index + 1), {
  //     //       data: item,
  //     //       no: index + 1,
  //     //     })
  //     //   }>
  //     //   <Text>{item}</Text>
  //     // </TouchableOpacity>
  //   );
  // };
  // console.log('index = ' + index);
  // console.log(choices[index]);
  // console.log('answer = ' + answer[index + 1]);
  // console.log(
  //   'ini = ' + choices[index].findIndex(x => x.value === answer[index + 1]),
  // );

  return (
    <KeyboardAvoidingView style={styles.containerView}>
      <View style={[styles.MainContainer]}>
        <ScrollView style={{width: '100%', paddingBottom: 200}}>
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
            <View style={{margin: 10}}>
              <Text style={{textAlign: 'center'}}>Bahasa indonesia</Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                margin: 20,
                width: '90%',
                paddingBottom: 150,
              }}>
              {/* <FlatList
                data={assessmentRandom}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
              /> */}

              {assessment.map((x, i) => {
                if (answer[i + 1] === 0) {
                  return (
                    <TouchableOpacity
                      key={i}
                      style={[styles.boxWrappSm]}
                      onPress={() => {
                        modal(true);
                        setIndex(i);
                      }}>
                      <View style={styles.boxWrappSmQu}>
                        <Text>{i + 1}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                } else {
                  return (
                    <TouchableOpacity
                      key={i}
                      style={[styles.boxWrappSm]}
                      onPress={() => {
                        modal(true);
                        setIndex(i);
                      }}>
                      <View style={[styles.boxWrappSmQu, styles.bgGreen]}>
                        <Text style={styles.textWhite}>{i + 1}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                }
              })}

              {/* belum diisi */}
              {/* <TouchableOpacity
                style={[styles.boxWrappSm]}
                onPress={() => modal(true)}>
                <View style={styles.boxWrappSmQu}>
                  <Text>1</Text>
                </View>
              </TouchableOpacity> */}
              {/* belum diisi */}

              {/* udah diisi */}
              {/* <TouchableOpacity style={[styles.boxWrappSm]}>
                <View style={[styles.boxWrappSmQu, styles.bgGreen]}>
                  <Text style={styles.textWhite}>2</Text>
                </View>
              </TouchableOpacity> */}
              {/* udah diisi */}

              {/* ragu */}
              {/* <TouchableOpacity style={[styles.boxWrappSm]}>
                <View style={[styles.boxWrappSmQu, styles.bgPurle]}>
                  <Text style={styles.textWhite}>3</Text>
                </View>
              </TouchableOpacity> */}
              {/* ragu */}
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
            <View
              style={{
                width: '100%',
                padding: 0,
                margin: 0,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                <View
                  style={[
                    styles.bgWhite,
                    styles.shadow,
                    {padding: 10, borderRadius: 4},
                  ]}></View>
                <Text> Belum diisi </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                <View
                  style={[
                    styles.bgGreen,
                    styles.shadow,
                    {padding: 10, borderRadius: 4},
                  ]}></View>
                <Text> Sudah diisi </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                <View
                  style={[
                    styles.bgPurle,
                    styles.shadow,
                    {padding: 10, borderRadius: 4},
                  ]}></View>
                <Text> Masih ragu </Text>
              </View>
            </View>
            <View style={{width: '100%', padding: 0}}>
              <TouchableOpacity
                style={{marginTop: 0}}
                onPress={() => {
                  if (!answerToArray) {
                    props.navigation.dispatch(
                      StackActions.replace('question-result'),
                    );
                  } else {
                    Alert.alert('Blom diisi semua woy !!!');
                  }
                }}>
                <View
                  style={[
                    styles.boxSm,
                    styles.bgGreen,
                    styles.shadow,
                    {
                      width: '100%',
                      marginTop: 20,
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
                    Selesai !
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalQuestion}
        onRequestClose={() => {
          modal(false);
          dispatch(saveAnswer({no: index + 1, answer: answerLocal}));
        }}>
        <View style={[styles.MainContainer]}>
          <ScrollView style={{width: '100%', marginBottom: 100}}>
            <Text
              style={[
                font.Aquawax,
                {
                  fontSize: 45,
                  padding: 20,
                  paddingBottom: 0,
                  textAlign: 'center',
                },
              ]}>
              soalNo
              <Text style={styles.textGreen}>
                <Text style={font.Questriasl}>{index + 1}</Text>
              </Text>
              .
            </Text>
            <View
              style={{
                width: 50,
                marginVertical: 10,
                marginBottom: 20,
                borderColor: '#0FB63F',
                borderWidth: 1,
                alignSelf: 'center',
              }}></View>
            <View style={{padding: 20}}>
              <Text style={{fontSize: 20}}>{assessment[index]}</Text>
            </View>
            <View style={{paddingHorizontal: 20}}>
              <RadioButtonRN
                data={choices[index]}
                initial={
                  index !== null
                    ? choices[index].findIndex(
                        x => x.value === answer[index + 1],
                      ) + 1
                    : 0
                }
                // selectedBtn={e =>
                //   dispatch(saveAnswer({no: index + 1, answer: e.value}))
                // }
                animationTypes={['shake']}
                selectedBtn={e => (e ? setAnswer(e.value) : 0)}
              />
            </View>
          </ScrollView>
          <View style={styles.bottomViewSm}>
            <View
              style={{
                width: '100%',
                padding: 25,
                margin: 0,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={async () => {
                  if (index > 0) {
                    await dispatch(
                      saveAnswer({no: index + 1, answer: answerLocal}),
                    );
                    setIndex(index - 1);
                  }
                }}>
                <View
                  style={[
                    styles.boxSm,
                    styles.bgPurle,
                    styles.shadow,
                    {width: 100},
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
                    <Icon
                      name="angle-left"
                      size={25}
                      style={styles.textWhite}
                    />
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  modal(false);
                  dispatch(saveAnswer({no: index + 1, answer: answerLocal}));
                }}>
                <View
                  style={[
                    styles.boxSm,
                    styles.bgGreen,
                    styles.shadow,
                    {width: 70, marginHorizontal: 10},
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
                    <Icon
                      name="grip-horizontal"
                      size={25}
                      style={styles.textWhite}
                    />
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={async () => {
                  if (index < assessment.length - 1) {
                    await dispatch(
                      saveAnswer({no: index + 1, answer: answerLocal}),
                    );
                    setIndex(index + 1);
                  }
                }}>
                <View
                  style={[
                    styles.boxSm,
                    styles.bgPurle,
                    styles.shadow,
                    {width: 100},
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
                    <Icon
                      name="angle-right"
                      size={25}
                      style={styles.textWhite}
                    />
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>

    // <View>
    //   <Text>THIS IS STUDENT TEST SCREEN</Text>
    //   <FlatList
    //     data={assessmentRandom}
    //     renderItem={renderItem}
    //     keyExtractor={(item, index) => index.toString()}
    //   />

    //   <Button
    //     title="Finish"
    //     onPress={() => {
    //       if (!answerToArray) {
    //         props.navigation.navigate('question-result');
    //       } else {
    //         Alert.alert('Belom diisi semua woy!');
    //       }
    //     }}
    //   />
    //   {/* <Button
    //     title="Check"
    //     onPress={() => console.log(this.props.assessment.assessment)}
    //   /> */}
    // </View>
  );
};

// const mapStateToProps = state => {
//   return {
//     assessment: state.assessment,
//   };
// };
export default TestList;
