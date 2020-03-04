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
} from 'react-native';

import font from '../Fonts';
import styles from './Style';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

const radio_props = [
  {label: 'Laki - laki', value: 0},
  {label: 'Perempuan', value: 1},
];
const teacherLive = props => {
  const [modalDelete, modal] = useState(false);
  const [answer, setAnswer] = useState(null);
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
                  paddingTop: 40,
                  paddingBottom: 10,
                  color: '#333333',
                },
              ]}>
              Live <Text style={styles.textWhite}>Score</Text>.
            </Text>
            <View
              style={{
                width: 50,
                marginHorizontal: 20,
                marginBottom: 20,
                borderColor: '#333333',
                borderWidth: 1,
              }}></View>
          </View>
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
          <View style={[styles.boxWrapp, styles.shadow]}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                borderBottomWidth: 1,
                borderColor: 'gray',
                padding: 10,
              }}>
              <Text style={{width: '10%', fontWeight: '700'}}>#</Text>
              <Text style={{width: '70%', fontWeight: '700'}}>Nama Siswa</Text>
              <Text
                style={{width: '20%', fontWeight: '700', textAlign: 'center'}}>
                Nilai
              </Text>
            </View>

            {/* looping ini */}
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                borderBottomWidth: 1,
                borderColor: 'gray',
                padding: 10,
              }}>
              <Text style={{width: '10%'}}>1</Text>
              <Text style={{width: '70%'}} numberOfLines={1}>
                Bambang sudirman{' '}
              </Text>
              <Text style={{width: '20%', textAlign: 'center'}}>80</Text>
            </View>
            {/* looping ini */}
            <TouchableOpacity onPress={() => modal(true)}>
              <View
                style={[
                  styles.submit,
                  styles.bgBlack,
                  styles.shadow,
                  {marginTop: 20, width: '100%', alignSelf: 'center'},
                ]}>
                <Text style={{color: '#fff', textAlign: 'center'}}>
                  Refresh
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
    </KeyboardAvoidingView>
  );
};

export default teacherLive;
