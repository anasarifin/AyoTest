import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Modal,
  Image,
  Alert,
  Linking,
} from 'react-native';

import font from '../Fonts';
import styles from './Style';
import {TextInput} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import {StackActions} from '@react-navigation/native';
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';

const studentHome = props => {
  const dummy = {name: 'Rian Tosm', email: 'riantosm@gmail.com'};
  const [modalDelete, modal] = useState(false);
  const user = useSelector(state => state.user.user);

  const logout = async () => {
    AsyncStorage.removeItem('tokenX');
    props.navigation.navigate('login-teacher');
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
                {fontSize: 40, padding: 20, paddingBottom: 10, marginTop: 20},
              ]}>
              Profile{' '}
              <Text style={styles.textWhite}>{user.name.split(' ')[0]}</Text>.
            </Text>
            <View
              style={{
                width: 50,
                marginHorizontal: 20,
                borderColor: '#333',
                borderWidth: 1,
              }}></View>
          </View>
          <View style={[styles.boxWrapp, styles.shadow]}>
            {/* <Text style={{fontWeight:'700'}}>Data</Text> */}
            <Image
              style={styles.profileImage}
              source={{uri: `http://3.85.4.188:3333/uploads/${user.picture}`}}
            />
            <Text style={{textAlign: 'center', marginTop: 20}}>
              {user.name}
            </Text>
            <Text style={{textAlign: 'center'}}>{user.email}</Text>
            <TouchableOpacity
              onPress={() => {
                modal(true);
              }}>
              <View
                style={[
                  styles.submit,
                  styles.bgBlack,
                  {marginTop: 20, width: '100%', alignSelf: 'center'},
                ]}>
                <Text style={{color: '#fff', textAlign: 'center'}}>
                  Edit Profile
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL('http://3.85.4.188:3333/premium')}>
              <View
                style={[
                  styles.submit,
                  styles.bgBlack,
                  styles.shadow,
                  {marginTop: 20, width: '100%', alignSelf: 'center'},
                ]}>
                <Text style={{color: '#fff', textAlign: 'center'}}>
                  Upgrade
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => logout()}>
            <View
              style={[
                styles.submit,
                styles.bgBlack,
                {marginTop: 20, width: 'auto', alignSelf: 'center'},
              ]}>
              <Text style={{color: '#fff', textAlign: 'center'}}>Logout</Text>
            </View>
          </TouchableOpacity>
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
                <Icon name="user-alt" size={23} style={styles.textBlack} />
              </Text>
            </View>
          </TouchableOpacity>
          {/* profile teacher */}
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
            <TouchableOpacity style={{margin: 20}}>
              <Image
                style={styles.profileImage}
                source={{uri: `http://3.85.4.188:3333/uploads/${user.picture}`}}
              />
            </TouchableOpacity>
            <Text style={{fontSize: 18}}>Nama Lengkap</Text>
            <TextInput
              style={[styles.inputText]}
              placeholder="Masukan nama lengkap"
              defaultValue={user.name}
              onChange={e => setName(e.nativeEvent.text)}
            />
            <Text style={{fontSize: 18}}>Email</Text>
            <TextInput
              style={[styles.inputText]}
              placeholder="Masukan email"
              defaultValue={user.email}
              onChange={e => setEmail(e.nativeEvent.text)}
            />
            <Text style={{fontSize: 18}}>Alamat</Text>
            <TextInput
              style={[styles.inputText]}
              placeholder="Masukan alamat"
              defaultValue={user.address}
              onChange={e => {
                setAddress(e.nativeEvent.text);
              }}
            />
            <Text style={{fontSize: 18}}>No. Telepon</Text>
            <TextInput
              style={[styles.inputText]}
              placeholder="Masukan no. telp"
              defaultValue={user.phone}
              onChange={e => setPhone(e.nativeEvent.text)}
            />
            <Text style={{fontSize: 18, paddingBottom: 0}}>Jenis Kelamin</Text>
            <RadioButtonRN
              data={[
                {label: 'Pria', value: 0},
                {label: 'Wanita', value: 1},
              ]}
              box={false}
              initial={parseFloat(user.gender) + 1}
              textStyle={{fontSize: 16, marginLeft: -10}}
              circleSize={12}
              activeColor="green"
              deactiveColor="grey"
            />
            {/* <RadioForm
              radio_props={radio_props}
              initial={0}
              onPress={value => setAnswer(value)}
              buttonColor={'#0FB63F'}
              borderColor={'#0FB63F'}
              innerColor={'#0FB63F'}
            /> */}
          </ScrollView>
          <TouchableOpacity
            onPress={() => {
              modal(false);
            }}>
            <View
              style={[
                styles.boxSm,
                styles.bgGreen,
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
                ]}
                onPress={() => handleClickEdit()}>
                Simpan
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
  );
};

export default studentHome;
