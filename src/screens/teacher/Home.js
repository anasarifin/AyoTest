import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  Button,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Modal,
  StatusBar,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Axios from 'axios';
import {assessment} from '../../redux/actions/assessment';

import font from '../Fonts';
import styles from './Style';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

import jwt_decode from 'jwt-decode';
import {getUser, getStats, getAss} from '../../redux/actions/user';

const URL_STRING = 'http://192.168.1.135:3333/api';

const urlx = 'http://192.168.1.135:3333/api/assessment/detailbyadmin/';

const teacherHome = props => {
  const [code, inputCode] = useState('');
  const [modalDetail, modalD] = useState(false);
  const [idAssessmentE, setIdAssessmentE] = useState(null);
  const [idAssessmentA, setIdAssessmentA] = useState(null);
  const [idAdmin, setId] = useState(0);
  const [modalAdd, modalA] = useState(false);
  const [modalEdit, modalE] = useState(false);
  const [modalAddSoal, modalAS] = useState(false);
  const [modalEditSoal, modalES] = useState(false);
  const [loading, setLoading] = useState(false);
  const [post, setpost] = useState(true);
  const [idAss, setIdAss] = useState(true);
  const user = useSelector(state => state.user.user);
  // state addModal
  const [boxSoal, createSoal] = useState(null);
  const [assessmentName, setAssessmentName] = useState('');
  const [total, setTotal] = useState(null);
  // end state addModal

  // state add assessment
  const dispatch = useDispatch();
  // end state add assessment

  // state submit soal in ModalAdd
  const [soal, setSoal] = useState('');
  const [answerA, setAnswerA] = useState('');
  const [answerB, setAnswerB] = useState('');
  const [answerC, setAnswerC] = useState('');
  const [answerD, setAnswerD] = useState('');
  const [answerE, setAnswerE] = useState('');
  // end state submit soal in ModalAdd
  const [detail, setDetail] = useState([]);
  const [detailQ, setDetailQ] = useState({});
  const [render, setRender] = useState(null);
  const assessment = useSelector(state => state.user.adminAss);

  // state detail
  const renderFile = () => {
    let items = [];
    for (let i = 0; i < total; i++) {
      items.push(
        <TouchableOpacity
          onPress={() => {
            setDetailQ(x);
            modalES(true);
          }}>
          <View
            style={[
              styles.boxWrapp,
              styles.shadow,
              {margin: 0, flexDirection: 'row', flexWrap: 'wrap'},
            ]}>
            <Text numberOfLines={1}>muncul</Text>
          </View>
        </TouchableOpacity>,
      );
    }
    return setRender(items);
  };

  return (
    <>
      {loading === false ? (
        <KeyboardAvoidingView style={styles.containerView}>
          <View style={[styles.MainContainer]}>
            <ScrollView
              style={{width: '100%', marginBottom: 40, marginTop: 20}}>
              <View style={{marginBottom: 20}}>
                <Text
                  style={[
                    font.Aquawax,
                    {
                      fontSize: 40,
                      padding: 20,
                      paddingBottom: 10,
                      color: '#333333',
                    },
                  ]}>
                  Daftar <Text style={styles.textWhite}>Pelajaran</Text>.
                </Text>
                <View
                  style={{
                    width: 50,
                    marginHorizontal: 20,
                    borderColor: '#333333',
                    borderWidth: 1,
                  }}></View>
              </View>
              {/* loop segini */}
              <View
                style={[
                  styles.boxWrappSearch,
                  styles.shadow,
                  styles.listMinMargin,
                  {
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                  },
                ]}>
                <TextInput
                  placeholder="Search ..."
                  style={{width: '90%'}}></TextInput>
                <TouchableOpacity>
                  <Text style={{paddingVertical: 20}}>
                    <Icon name="search" size={23} style={styles.textBlack} />
                  </Text>
                </TouchableOpacity>
              </View>
              {assessment.map(x => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      Axios.get(
                        'http://192.168.1.135:3333/api/question/' + x.code,
                      ).then(resolve => {
                        setDetail(resolve.data.data);
                        modalE(true);
                      });
                    }}>
                    <View
                      style={[
                        styles.boxWrapp,
                        styles.shadow,
                        styles.listMinMargin,
                      ]}>
                      <Text numberOfLines={1}>
                        {x.name} | {x.code}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}

              <View style={{padding: 20}}>
                <TouchableOpacity
                  onPress={() => {
                    modalA(true);
                  }}>
                  <View
                    style={[
                      styles.submit,
                      styles.bgBlack,
                      styles.shadow,
                      {marginTop: 0, width: '100%', alignSelf: 'center'},
                    ]}>
                    <Text style={{color: '#fff', textAlign: 'center'}}>
                      Tambah Pelajaran
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>

            <View style={styles.bottomView}>
              {/* list murid */}
              <TouchableOpacity
                style={{
                  width: '40%',
                  height: '100%',
                }}
                onPress={() => props.navigation.navigate('teacher-live')}>
                <View>
                  <Text style={styles.textStyle}>
                    <Icon
                      name="street-view"
                      size={23}
                      style={styles.textBlack}
                    />
                  </Text>
                </View>
              </TouchableOpacity>
              {/* list murid */}
              {/* add assessment */}
              <TouchableOpacity
                style={[styles.btnCircle, styles.bgBlack, styles.shadow]}>
                <View style={styles.circleIcon}>
                  <Text style={{color: '#fff'}}>
                    <Icon
                      name="book-reader"
                      size={30}
                      style={styles.textWhite}
                    />
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '20%',
                  height: '100%',
                }}
                onPress={() => props.navigation.navigate('teacher-home')}>
                {/* hanya sepasi */}
              </TouchableOpacity>
              {/* add assessment */}
              {/* profile teacher */}
              <TouchableOpacity
                style={{
                  width: '40%',
                  height: '100%',
                }}
                onPress={() => {
                  props.navigation.navigate('teacher-profile');
                }}>
                <View>
                  <Text style={styles.textStyle}>
                    <Icon name="user-alt" size={23} style={styles.textBlack} />
                  </Text>
                </View>
              </TouchableOpacity>
              {/* profile teacher */}
            </View>
          </View>

          {/* modal detail pelajaran */}
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalDetail}
            // visible={true}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={[styles.wrapp, styles.containerView]}>
              <ScrollView style={{height: '85%'}}>
                <View style={{marginBottom: 20}}>
                  <Text
                    style={[
                      font.Aquawax,
                      {fontSize: 35, paddingHorizontal: 0, paddingBottom: 10},
                    ]}>
                    Detail <Text style={styles.textWhite}>Pelajaran</Text>.
                  </Text>
                  <View
                    style={{
                      width: 50,
                      marginHorizontal: 0,
                      borderColor: '#333333',
                      borderWidth: 1,
                    }}></View>
                </View>
                <View
                  style={[
                    styles.boxWrapp,
                    styles.shadow,
                    {margin: 0, flexDirection: 'row', flexWrap: 'wrap'},
                  ]}>
                  <Text style={{width: '40%'}}>Nama Matkul </Text>
                  <Text style={{width: '10%'}}>:</Text>
                  <Text style={{width: '50%', fontWeight: '700'}}>
                    {detail === null ? '' : detail.name}
                  </Text>
                  <Text style={{width: '40%', paddingTop: 10}}>Status </Text>
                  <Text style={{width: '10%', paddingTop: 10}}>:</Text>
                  <Text
                    style={{width: '50%', paddingTop: 10, fontWeight: '700'}}>
                    {detail === null ? '' : detail.hide}
                  </Text>
                  <Text style={{width: '40%', paddingTop: 10}}>
                    Jumlah Soal{' '}
                  </Text>
                  <Text style={{width: '10%', paddingTop: 10}}>:</Text>
                  <Text
                    style={{width: '50%', paddingTop: 10, fontWeight: '700'}}>
                    {detail === null ? '' : detail.jumlah_soal}
                  </Text>
                  <Text style={{width: '40%', paddingTop: 10}}>
                    Banyak siswa
                  </Text>
                  <Text style={{width: '10%', paddingTop: 10}}>:</Text>
                  <Text
                    style={{width: '50%', fontWeight: '700', paddingTop: 10}}>
                    {/* {detailAssessment === null
                      ? ''
                      : detailAssessment.jumlah_peserta} */}
                  </Text>
                  <Text style={{width: '40%', paddingTop: 10}}>
                    Rata - rata nilai
                  </Text>
                  <Text style={{width: '10%', paddingTop: 10}}>:</Text>
                  <Text
                    style={{width: '50%', fontWeight: '700', paddingTop: 10}}>
                    79
                  </Text>
                  <TouchableOpacity
                    // onPress={() => {
                    //   addAssesmentModal();
                    //   // modalE(true);
                    // }}
                    style={{width: '100%'}}>
                    <View
                      style={[
                        styles.boxSm,
                        styles.bgBlack,
                        styles.shadow,
                        {marginTop: 20, width: '100%'},
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
                        Rubah Soal
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      modalD(false);
                    }}
                    style={{width: '100%'}}>
                    <View
                      style={[
                        styles.boxSm,
                        styles.bgBlack,
                        styles.shadow,
                        {marginTop: 20, width: '100%'},
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
                        Hapus Pelajaran
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={[
                    styles.boxWrapp,
                    styles.shadow,
                    {margin: 0, flexDirection: 'row', flexWrap: 'wrap'},
                  ]}>
                  <Text style={{width: '40%'}}>Status </Text>
                  <Text style={{width: '10%'}}>:</Text>
                  <Text style={{width: '50%', fontWeight: '700'}}>
                    Tidak Aktif
                  </Text>
                  <TouchableOpacity style={{width: '100%'}}>
                    <View
                      style={[
                        styles.boxSm,
                        styles.bgBlack,
                        styles.shadow,
                        {marginTop: 20, width: '100%'},
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
                        Aktifkan Soal
                      </Text>
                    </View>
                  </TouchableOpacity>
                  {/* <TouchableOpacity
                style={{width: '100%'}}>
                <View
                  style={[
                    styles.boxSm,
                    styles.bgWhite,
                    styles.shadow,
                    {marginTop: 20, width: '100%'},
                  ]}>
                  <Text
                    style={[
                      font.Aquawax,
                      {
                        color: '#333333',
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        fontSize: 14,
                      },
                    ]}>
                    Non-Aktifkan Soal
                  </Text>
                </View>
              </TouchableOpacity> */}
                </View>
              </ScrollView>
              <View
                style={{
                  width: '100%',
                  margin: 0,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    modalD(false);
                  }}
                  style={{width: '100%'}}>
                  <View
                    style={[
                      styles.boxSm,
                      styles.bgWhite,
                      styles.shadow,
                      {marginTop: 20},
                    ]}>
                    <Text
                      style={[
                        font.Aquawax,
                        {
                          color: '#333333',
                          textAlign: 'center',
                          textAlignVertical: 'center',
                          fontSize: 14,
                        },
                      ]}>
                      Statistik Siswa
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => modalD(false)}>
                <View
                  style={[
                    styles.boxSm,
                    styles.bgBlack,
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
          {/* modal detail pelajaran */}

          {/* modal tambah */}
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalAdd}
            // visible={false}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={[styles.wrapp, styles.containerView]}>
              <ScrollView style={{height: '85%'}}>
                <View style={{marginBottom: 20}}>
                  <Text
                    style={[
                      font.Aquawax,
                      {
                        fontSize: 35,
                        paddingHorizontal: 0,
                        paddingBottom: 10,
                        color: '#333333',
                      },
                    ]}>
                    Tambah <Text style={styles.textWhite}>Pelajaran</Text>.
                  </Text>
                  <View
                    style={{
                      width: 50,
                      marginHorizontal: 0,
                      borderColor: '#333333',
                      borderWidth: 1,
                    }}></View>
                </View>
                <View
                  style={[
                    styles.boxWrapp,
                    styles.shadow,
                    {margin: 0, flexDirection: 'row', flexWrap: 'wrap'},
                  ]}>
                  <Text style={{width: '40%'}}>Nama Matkul </Text>
                  <TextInput
                    placeholder="Masukan nama pelajaranx"
                    style={styles.inputText}
                    onChange={e => setAssessmentName(e.nativeEvent.text)}
                  />
                  <Text style={{width: '40%'}}>Jumlah Soal </Text>
                  <TextInput
                    placeholder="Masukan jumlah soal"
                    style={styles.inputText}
                    onChange={e => setTotal(e.nativeEvent.text)}
                    keyboardType={'numeric'}
                  />

                  <TouchableOpacity
                    onPress={() => {
                      console.log(user);
                      Axios.post(
                        'http://192.168.1.135:3333/api/assessment/insert',
                        {
                          id_admin: user.id_admin,
                          name: assessmentName,
                        },
                      ).then(resolve => {
                        console.log(resolve.data.data.insertId);
                        for (let x = 0; x < total; x++) {
                          Axios.post(
                            'http://192.168.1.135:3333/api/question/insert',
                            {
                              choice_1: '',
                              choice_2: '',
                              choice_3: '',
                              choice_4: '',
                              choice_5: '',
                              question: '',
                              id_assessment_name: resolve.data.data.insertId,
                            },
                          ).then(() => {
                            modalA(false);
                          });
                        }
                      });
                    }}
                    style={{width: '100%'}}>
                    <View
                      style={[
                        styles.boxSm,
                        styles.bgBlack,
                        styles.shadow,
                        {marginTop: 20, width: '100%'},
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
                        Simpan
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>
              <TouchableOpacity
                onPress={() => {
                  modalA(false);
                }}>
                <View
                  style={[
                    styles.boxSm,
                    styles.bgBlack,
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
          {/* modal tambah */}

          {/* modal Edit soal */}
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalEdit}
            // visible={true}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={[styles.wrapp, styles.containerView]}>
              <ScrollView style={{height: '85%'}}>
                <View style={{marginBottom: 20}}>
                  <Text
                    style={[
                      font.Aquawax,
                      {
                        fontSize: 35,
                        paddingHorizontal: 0,
                        paddingBottom: 10,
                        color: '#333333',
                      },
                    ]}>
                    Edit <Text style={styles.textWhite}>Pelajaran</Text>.
                  </Text>
                  <View
                    style={{
                      width: 50,
                      marginHorizontal: 0,
                      borderColor: '#333333',
                      borderWidth: 1,
                    }}></View>
                </View>
                <View
                  style={[
                    styles.boxWrapp,
                    styles.shadow,
                    {margin: 0, flexDirection: 'row', flexWrap: 'wrap'},
                  ]}>
                  <Text style={{width: '40%'}}>Nama Matkul </Text>
                  <TextInput
                    placeholder="Masukan nama pelajaran"
                    style={styles.inputText}
                    defaultValue={
                      assessmentName || ''

                      // assessmentName
                      //   ? `${assessmentName}`
                      //   : detailAssessment
                      //   ? `${detailAssessment.name}`
                      //   : ''
                    }
                  />
                </View>

                <View style={{marginBottom: 20}}>
                  <Text
                    style={[
                      font.Aquawax,
                      {
                        fontSize: 35,
                        paddingHorizontal: 0,
                        paddingBottom: 10,
                        color: '#333333',
                      },
                    ]}>
                    Edit <Text style={styles.textWhite}>Soal</Text>.
                  </Text>
                  <View
                    style={{
                      width: 50,
                      marginHorizontal: 0,
                      borderColor: '#333333',
                      borderWidth: 1,
                    }}></View>
                </View>

                {/* satu soal */}
                {detail.map((x, i) => {
                  console.log(detail);
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setDetailQ(x);
                        modalES(true);
                      }}>
                      <View
                        style={[
                          styles.boxWrapp,
                          styles.shadow,
                          {margin: 0, flexDirection: 'row', flexWrap: 'wrap'},
                        ]}>
                        <Text numberOfLines={1}>
                          {i + 1}. {x.question}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
                {/* satu soal */}

                <TouchableOpacity
                  onPress={() => {
                    modalA(false);
                    modalE(false);
                  }}
                  style={{width: '100%'}}>
                  <View
                    style={[
                      styles.boxSm,
                      styles.bgBlack,
                      styles.shadow,
                      {marginTop: 20, width: '100%'},
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
                      Simpan
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    modalA(false);
                    modalE(false);
                    setTotal(null);
                    setAssessmentName('');
                  }}>
                  <View
                    style={[
                      styles.boxSm,
                      styles.bgBlack,
                      styles.shadow,
                      {marginVertical: 20},
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
              </ScrollView>
            </View>
          </Modal>
          {/* modal Edit soal */}

          {/* modal add soal */}
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalAddSoal}
            // visible={true}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={[styles.wrapp, styles.containerView]}>
              <ScrollView style={{height: '85%'}}>
                <View style={{marginBottom: 20}}>
                  <Text
                    style={[
                      font.Aquawax,
                      {
                        fontSize: 35,
                        paddingHorizontal: 0,
                        paddingBottom: 10,
                        color: '#333333',
                      },
                    ]}>
                    Tambah <Text style={styles.textWhite}>Pelajaran</Text>.
                  </Text>
                  <View
                    style={{
                      width: 50,
                      marginHorizontal: 0,
                      borderColor: '#333333',
                      borderWidth: 1,
                    }}></View>
                </View>
                <View
                  style={[
                    styles.boxWrapp,
                    styles.shadow,
                    {margin: 0, flexDirection: 'row', flexWrap: 'wrap'},
                  ]}>
                  <Text style={{width: '40%'}}>Nama Matkul </Text>
                  <TextInput
                    placeholder="Masukan nama pelajaran 123"
                    style={styles.inputText}
                    defaultValue={assessmentName || ''}
                  />
                </View>

                <View style={{marginBottom: 20}}>
                  <Text
                    style={[
                      font.Aquawax,
                      {
                        fontSize: 35,
                        paddingHorizontal: 0,
                        paddingBottom: 10,
                        color: '#333333',
                      },
                    ]}>
                    Tambah <Text style={styles.textWhite}>Soal</Text>.
                  </Text>
                  <View
                    style={{
                      width: 50,
                      marginHorizontal: 0,
                      borderColor: '#333333',
                      borderWidth: 1,
                    }}></View>
                </View>
                {render}
                {/* satu soal */}
                {/* {[1, 2, 3].map(x => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setDetailQ(x);
                        modalES(true);
                      }}>
                      <View
                        style={[
                          styles.boxWrapp,
                          styles.shadow,
                          {margin: 0, flexDirection: 'row', flexWrap: 'wrap'},
                        ]}>
                        <Text numberOfLines={1}>{x.question}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })} */}
                {/* satu soal */}

                <TouchableOpacity
                  onPress={() => {
                    // console.log(12345);
                    // Axios.post('http://192.168.1.135:3333/api/assessment/insert', {
                    //   id_admin: assessment[0].id_admin,
                    //   name: assessmentName,
                    // }).then(resolve => {
                    //   console.log(resolve.data.data.insertId);
                    //   for (let x = 0; x < total; x++) {
                    //     // Axios.
                    //   }
                    // });

                    modalA(false);
                    modalE(false);
                  }}
                  style={{width: '100%'}}>
                  <View
                    style={[
                      styles.boxSm,
                      styles.bgBlack,
                      styles.shadow,
                      {marginTop: 20, width: '100%'},
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
                      Simpan
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    modalA(false);
                    modalAS(false);
                    modalE(false);
                    setTotal(null);
                    setAssessmentName('');
                  }}>
                  <View
                    style={[
                      styles.boxSm,
                      styles.bgBlack,
                      styles.shadow,
                      {marginVertical: 20},
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
              </ScrollView>
            </View>
          </Modal>
          {/* modal add soal */}

          {/* modal edit satu soal */}
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalEditSoal}
            // onRequestClose={() => {
            //   Alert.alert('Modal has been closed.');
            // }}
          >
            <View style={[styles.wrapp, styles.containerView]}>
              <ScrollView style={{height: '85%'}}>
                <View>
                  <View
                    style={[
                      styles.boxWrapp,
                      styles.shadow,
                      {
                        margin: 0,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        paddingHorizontal: 10,
                        paddingVertical: 10,
                      },
                    ]}>
                    <Text style={{fontWeight: '700'}}>Soal</Text>
                    <TextInput
                      defaultValue={detailQ.question || ''}
                      multiline={true}
                      numberOfLines={4}
                      onChange={e => setSoal(e.nativeEvent.text)}
                      style={[
                        styles.inputText,
                        {paddingHorizontal: 10},
                      ]}></TextInput>
                  </View>
                </View>
                <View>
                  <View
                    style={[
                      styles.boxWrapp,
                      styles.shadow,
                      {
                        margin: 0,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        paddingHorizontal: 10,
                        paddingVertical: 10,
                      },
                    ]}>
                    <Text
                      style={{
                        fontWeight: '700',
                        marginBottom: 20,
                      }}>
                      Jawaban
                    </Text>
                    {/* jawaban yang benar */}
                    <View
                      style={[
                        styles.boxWrappSearch,
                        styles.shadow,
                        styles.listMinMargin,
                        {
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        },
                      ]}>
                      <Text style={{paddingVertical: 20}}>
                        <Icon
                          name="check-square"
                          size={23}
                          style={styles.textBlack}
                        />
                      </Text>
                      <TextInput
                        placeholder="Jawaban yang benar"
                        defaultValue={
                          detailQ.answer ? detailQ.answer[0].label : ''
                        }
                        multiline={true}
                        numberOfLines={1}
                        onChange={e => setAnswerA(e.nativeEvent.text)}
                        style={[
                          styles.inputText,
                          {paddingHorizontal: 10, width: '90%'},
                        ]}></TextInput>
                    </View>
                    {/* jawaban yang benar */}

                    {/* jawaban yang salah */}
                    <View
                      style={[
                        styles.boxWrappSearch,
                        styles.shadow,
                        styles.listMinMargin,
                        {
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                          justifyContent: 'space-between',
                        },
                      ]}>
                      <Text style={{paddingVertical: 20}}>
                        <Icon
                          name="window-close"
                          size={21}
                          style={styles.textBlack}
                        />
                      </Text>
                      <TextInput
                        placeholder="Jawaban yang salah"
                        defaultValue={
                          detailQ.answer ? detailQ.answer[1].label : ''
                        }
                        multiline={true}
                        numberOfLines={1}
                        onChange={e => setAnswerB(e.nativeEvent.text)}
                        style={[
                          styles.inputText,
                          {paddingHorizontal: 10, width: '90%'},
                        ]}></TextInput>
                    </View>
                    {/* jawaban yang salah */}

                    {/* jawaban yang salah */}
                    <View
                      style={[
                        styles.boxWrappSearch,
                        styles.shadow,
                        styles.listMinMargin,
                        {
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                          justifyContent: 'space-between',
                        },
                      ]}>
                      <Text style={{paddingVertical: 20}}>
                        <Icon
                          name="window-close"
                          size={21}
                          style={styles.textBlack}
                        />
                      </Text>
                      <TextInput
                        placeholder="Jawaban yang salah"
                        defaultValue={
                          detailQ.answer ? detailQ.answer[2].label : ''
                        }
                        multiline={true}
                        numberOfLines={1}
                        onChange={e => setAnswerC(e.nativeEvent.text)}
                        style={[
                          styles.inputText,
                          {paddingHorizontal: 10, width: '90%'},
                        ]}></TextInput>
                    </View>
                    {/* jawaban yang salah */}

                    {/* jawaban yang salah */}
                    <View
                      style={[
                        styles.boxWrappSearch,
                        styles.shadow,
                        styles.listMinMargin,
                        {
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                          justifyContent: 'space-between',
                        },
                      ]}>
                      <Text style={{paddingVertical: 20}}>
                        <Icon
                          name="window-close"
                          size={21}
                          style={styles.textBlack}
                        />
                      </Text>
                      <TextInput
                        placeholder="Jawaban yang salah"
                        defaultValue={
                          detailQ.answer ? detailQ.answer[3].label : ''
                        }
                        multiline={true}
                        numberOfLines={1}
                        onChange={e => setAnswerD(e.nativeEvent.text)}
                        style={[
                          styles.inputText,
                          {paddingHorizontal: 10, width: '90%'},
                        ]}></TextInput>
                    </View>
                    {/* jawaban yang salah */}

                    {/* jawaban yang salah */}
                    <View
                      style={[
                        styles.boxWrappSearch,
                        styles.shadow,
                        styles.listMinMargin,
                        {
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                          justifyContent: 'space-between',
                        },
                      ]}>
                      <Text style={{paddingVertical: 20}}>
                        <Icon
                          name="window-close"
                          size={21}
                          style={styles.textBlack}
                        />
                      </Text>
                      <TextInput
                        placeholder="Jawaban yang salah"
                        defaultValue={
                          detailQ.answer ? detailQ.answer[4].label : ''
                        }
                        multiline={true}
                        numberOfLines={1}
                        onChange={e => setAnswerE(e.nativeEvent.text)}
                        style={[
                          styles.inputText,
                          {paddingHorizontal: 10, width: '90%'},
                        ]}></TextInput>
                    </View>
                    {/* jawaban yang salah */}
                  </View>
                  <TouchableOpacity
                    style={{width: '100%'}}
                    onPress={() => {
                      // console.log(detailQ.answer[0]);
                      // console.log(answerA);
                      // thissss !!!!!!!!!!
                      Axios.put(
                        'http://192.168.1.135:3333/api/question/update/' +
                          detailQ.id,
                        {
                          question: soal || detailQ.question,
                          id_assessment_name: detail[0].id_assessment,
                          choice_1: answerA || detailQ.answer[0].label,
                          choice_2: answerB || detailQ.answer[1].label,
                          choice_3: answerC || detailQ.answer[2].label,
                          choice_4: answerD || detailQ.answer[3].label,
                          choice_5: answerE || detailQ.answer[4].label,
                        },
                      );
                      // Axios.get(urlx + user.id_admin).then(
                      //   resolve3 => {
                      //      console.log(resolve3.data.data);
                      //     dispatch(getAss(resolve3.data.data));
                      //   },
                      //    jwt_decode(resolve.data.token).id
                      // ),
                      modalES(false);
                    }}>
                    <View
                      style={[
                        styles.boxSm,
                        styles.bgBlack,
                        styles.shadow,
                        {marginTop: 0, width: '100%', marginBottom: 20},
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
                        Simpanx
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </Modal>
          {/* modal edit satu soal */}
        </KeyboardAvoidingView>
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </>
  );
};

export default teacherHome;
