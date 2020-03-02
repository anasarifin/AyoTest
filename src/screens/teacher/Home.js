import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Modal,
  StatusBar,
} from 'react-native';

import font from '../Fonts';
import styles from './Style';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TeacherHome = props => {
  const [code, inputCode] = useState('');
  const [modalDetail, modalD] = useState(false);
  const [modalAdd, modalA] = useState(false);
  const [modalEdit, modalE] = useState(false);
  return (
    <KeyboardAvoidingView style={styles.containerView}>
      <View style={[styles.MainContainer]}>
        <ScrollView style={{width: '100%', marginBottom: 40, marginTop: 20}}>
          <View style={{marginBottom: 20}}>
            <Text
              style={[
                font.Aquawax,
                {fontSize: 40, padding: 20, paddingBottom: 10},
              ]}>
              Daftar <Text style={styles.textWhite}>Pelajaran</Text>.
            </Text>
            <View
              style={{
                width: 50,
                marginHorizontal: 20,
                borderColor: '#000',
                borderWidth: 1,
              }}></View>
          </View>
          {/* loop segini */}
          <TouchableOpacity onPress={() => modalD(true)}>
            <View
              style={[styles.boxWrapp, styles.shadow, styles.listMinMargin]}>
              <Text numberOfLines={1}>Matematika Dasar</Text>
            </View>
          </TouchableOpacity>
          {/* loop segini */}

          <TouchableOpacity>
            <View
              style={[styles.boxWrapp, styles.shadow, styles.listMinMargin]}>
              <Text>Bahasa india</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={[styles.boxWrapp, styles.shadow, styles.listMinMargin]}>
              <Text>Agana</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={[styles.boxWrapp, styles.shadow, styles.listMinMargin]}>
              <Text numberOfLines={1}>
                Algoritma dan Pemograman lanjutan tingkat dasar
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={[styles.boxWrapp, styles.shadow, styles.listMinMargin]}>
              <Text>Matematika Dasar</Text>
            </View>
          </TouchableOpacity>

          <View style={{padding: 20}}>
            <TouchableOpacity onPress={() => modalA(true)}>
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
            onPress={() => props.navigation.navigate('teacher-home')}>
            <View>
              <Text style={styles.textStyle}>
                <Icon name="street-view" size={23} style={styles.textBlack} />
              </Text>
            </View>
          </TouchableOpacity>
          {/* list murid */}
          {/* add assessment */}
          <TouchableOpacity
            style={[styles.btnCircle, styles.bgBlack, styles.shadow]}>
            <View style={styles.circleIcon}>
              <Text style={{color: '#fff'}}>
                <Icon name="book-reader" size={30} style={styles.textWhite} />
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
            onPress={() => props.navigation.navigate('teacher-profile')}>
            <View>
              <Text style={styles.textStyle}>
                <Icon name="child" size={23} style={styles.textBlack} />
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
                  borderColor: '#000',
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
                Bahasa indonesia dasar
              </Text>
              <Text style={{width: '40%', paddingTop: 10}}>Jumlah Soal </Text>
              <Text style={{width: '10%', paddingTop: 10}}>:</Text>
              <Text style={{width: '50%', paddingTop: 10, fontWeight: '700'}}>
                50 soal
              </Text>
              <Text style={{width: '40%', paddingTop: 10}}>
                Siswa yang mengikuti test ini
              </Text>
              <Text style={{width: '10%', paddingTop: 10}}>:</Text>
              <Text style={{width: '50%', fontWeight: '700', paddingTop: 10}}>
                20 siswa
              </Text>
              <Text style={{width: '40%', paddingTop: 10}}>
                Rata - rata nilai
              </Text>
              <Text style={{width: '10%', paddingTop: 10}}>:</Text>
              <Text style={{width: '50%', fontWeight: '700', paddingTop: 10}}>
                79
              </Text>
              <TouchableOpacity
                onPress={() => {
                  modalE(true);
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
                    Edit Soal
                  </Text>
                </View>
              </TouchableOpacity>
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
                      color: '#000',
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
                Tambah <Text style={styles.textWhite}>Pelajaran</Text>.
              </Text>
              <View
                style={{
                  width: 50,
                  marginHorizontal: 0,
                  borderColor: '#000',
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
              />

              <TouchableOpacity
                onPress={() => {
                  modalE(true);
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
                    Simpan dan Edit Soal
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <TouchableOpacity onPress={() => modalA(false)}>
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
                Edit <Text style={styles.textWhite}>Pelajaran</Text>.
              </Text>
              <View
                style={{
                  width: 50,
                  marginHorizontal: 0,
                  borderColor: '#000',
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
              />
              <Text style={{width: '40%'}}>Jumlah Soal </Text>
              <TextInput
                placeholder="Masukan jumlah soal"
                style={styles.inputText}
              />
            </View>

            <View style={{marginBottom: 20}}>
              <Text
                style={[
                  font.Aquawax,
                  {fontSize: 35, paddingHorizontal: 0, paddingBottom: 10},
                ]}>
                Edit <Text style={styles.textWhite}>Soal</Text>.
              </Text>
              <View
                style={{
                  width: 50,
                  marginHorizontal: 0,
                  borderColor: '#000',
                  borderWidth: 1,
                }}></View>
            </View>

            <TouchableOpacity>
              <View
                style={[
                  styles.boxWrapp,
                  styles.shadow,
                  {margin: 0, flexDirection: 'row', flexWrap: 'wrap'},
                ]}>
                <Text numberOfLines={1}>
                  1. Apa yang dimaksud dengan warna warni pada ketika manusia{' '}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={[
                  styles.boxWrapp,
                  styles.shadow,
                  {margin: 0, flexDirection: 'row', flexWrap: 'wrap'},
                ]}>
                <Text numberOfLines={1}>
                  2. Apa yang dimaksud dengan warna warni pada ketika manusia{' '}
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={[
                  styles.boxWrapp,
                  styles.shadow,
                  {margin: 0, flexDirection: 'row', flexWrap: 'wrap'},
                ]}>
                <Text numberOfLines={1}>
                  3. Apa yang dimaksud dengan warna warni pada ketika manusia{' '}
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                modalA(false);
                modalD(false);
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
                modalD(false);
                modalE(false);
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
    </KeyboardAvoidingView>
  );
};

export default TeacherHome;
