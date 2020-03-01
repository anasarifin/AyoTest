import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {CommonActions, StackActions} from '@react-navigation/native';
import QuestionDetail from '../../components/QuestionDetail';
import {useDispatch, useSelector} from 'react-redux';
import {connect} from 'react-redux';

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

  const assessmentRandom = useSelector(
    state => state.assessment.assessmentRandom,
  );
  const answer = useSelector(state => state.assessment.answer);
  const answerToArray = Object.values(answer).some(x => x === 0);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('question-' + (index + 1), {
            data: item,
            no: index + 1,
          })
        }>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text>THIS IS STUDENT TEST SCREEN</Text>
      <FlatList
        data={assessmentRandom}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* <QuestionDetail
          show={this.state.show}
          question={this.state.question}
          index={this.state.index}
          close={this.showModal}
        /> */}
      <Button
        title="Finish"
        onPress={() => {
          if (!answerToArray) {
            props.navigation.navigate('question-result');
          } else {
            Alert.alert('Belom diisi semua woy!');
          }
        }}
      />
      {/* <Button
        title="Check"
        onPress={() => console.log(this.props.assessment.assessment)}
      /> */}
    </View>
  );
};

// const mapStateToProps = state => {
//   return {
//     assessment: state.assessment,
//   };
// };
export default TestList;
