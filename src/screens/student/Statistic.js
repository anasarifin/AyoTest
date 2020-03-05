import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';

import font from '../Fonts';
import styles from './Style';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import {useSelector, useDispatch} from 'react-redux';

const studentHome = props => {
  const stats = useSelector(state => state.user.userStats);
  console.log(stats);

  return (
    <KeyboardAvoidingView style={styles.containerView}>
      <View style={[styles.MainContainer]}>
        <ScrollView style={{width: '100%'}}>
          <View>
            <Text
              style={[
                font.Aquawax,
                {fontSize: 40, padding: 20, paddingTop: 40, paddingBottom: 10},
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

            {/* this */}
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: 'gray',
                padding: 10,
              }}>
              {stats.map(x => {
                return (
                  <View>
                    <Collapse>
                      <CollapseHeader
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                        }}>
                        <Text style={{width: '10%'}}>1</Text>
                        <Text style={{width: '70%'}} numberOfLines={1}>
                          {x.assessment}
                        </Text>
                        <Text style={{width: '20%', textAlign: 'center'}}>
                          {x.score}
                        </Text>
                      </CollapseHeader>
                      <CollapseBody>
                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            paddingVertical: 20,
                            paddingHorizontal: 10,
                            borderWidth: 1,
                            borderColor: 'gray',
                            borderRadius: 5,
                            marginVertical: 20,
                          }}>
                          <Text style={{width: '45%'}}>Nama Guru</Text>
                          <Text style={{width: '5%'}}>:</Text>
                          <Text style={{width: '50%', fontWeight: '700'}}>
                            {x.teacher}
                          </Text>
                          <Text style={{width: '45%'}}>
                            Tanggal Mengikuti Test
                          </Text>
                          <Text style={{width: '5%'}}>:</Text>
                          <Text style={{width: '50%', fontWeight: '700'}}>
                            {x.date.slice(0, 10)}
                          </Text>
                        </View>
                      </CollapseBody>
                    </Collapse>
                  </View>
                );
              })}
            </View>
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
            </View>

            <View
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
          {/* <TouchableOpacity
            onPress={() => props.navigation.navigate('teacher-home')}>
            <View
              style={[
                styles.submit,
                styles.bgPurle,
                styles.shadow,
                {marginTop: 0, width: '100%', alignSelf: 'center'},
              ]}>
              <Text style={{color: '#fff', textAlign: 'center'}}>Teacher</Text>
            </View>
          </TouchableOpacity> */}
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
                <Icon name="user-alt" size={25} style={styles.textGreen} />
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default studentHome;
