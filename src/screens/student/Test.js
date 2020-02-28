import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {CommonActions, StackActions} from '@react-navigation/native';
import QuestionModal from '../../components/QuestionModal';

// const resetAction = CommonActions.reset({
//   index: 0,
//   routes: [{name: 'login-student'}],
// });

const studentDetail = props => {
  const [data, editData] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [show, showModal] = useState(false);
  const code = props.route.params.code;

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => showModal(true)}>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text>
        THIS IS STUDENT {data[0]} SCREEN {code}
      </Text>
      <Button
        title="Move to add"
        onPress={() => props.navigation.navigate('student-finish')}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <QuestionModal show={show} data={data} />
    </View>
  );
};

export default studentDetail;
