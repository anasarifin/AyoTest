import React, {useState} from 'react';
import {View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import {CommonActions, StackActions} from '@react-navigation/native';
import QuestionDetail from '../../components/QuestionDetail';

// const resetAction = CommonActions.reset({
//   index: 0,
//   routes: [{name: 'login-student'}],
// });

class studentDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [1, 2, 3, 4, 5, 6, 7, 8],
      show: false,
      detail: '',
    };
    this.showModal = this.showModal.bind(this);
  }

  showModal(item) {
    this.setState({show: this.state.show ? false : true});
  }

  nextQuestion(index) {
    if (index > 0) {
      this.setState({
        question: this.state.data[index + 1],
      });
    }
  }
  backQuestion(index) {
    if (index < index.length) {
      this.setState({
        question: this.state.data[index - 1],
      });
    }
  }

  questionNavigation(no) {
    this.props.navigation.navigate('question-' + no);
  }

  renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('question-' + (index + 1), {
            data: item,
            no: index + 1,
          })
        }>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    // const code = this.props.route.params.code;

    return (
      <View>
        <Text>
          THIS IS STUDENT {this.state.data[0]} SCREEN {'code'}
        </Text>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem.bind(this)}
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
          onPress={() => this.props.navigation.navigate('student-finish')}
        />
      </View>
    );
  }
}

export default studentDetail;
