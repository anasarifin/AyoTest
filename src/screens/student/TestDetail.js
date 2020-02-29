import React, {useState} from 'react';
import {View, Text, Modal, Button} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {connect} from 'react-redux';

// eslint-disable-next-line prettier/prettier
const radio_props = [
  {label: 'A', value: 0},
  {label: 'B', value: 1},
  {label: 'C', value: 2},
  {label: 'D', value: 3},
  {label: 'E', value: 4},
];

const TestDetail = props => {
  const [answer, setAnswer] = useState(null);
  const [redux] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const question = props.route.params.data;
  const no = props.route.params.no;
  const data = props.assessment.assessmentRandom;

  return (
    <View>
      <Text onPress={() => props.navigation.navigate('question-list')}>
        Close
      </Text>
      <Text>{question}</Text>
      <RadioForm
        radio_props={radio_props}
        initial={-1}
        onPress={value => setAnswer(value)}
      />
      <Text>Answer: {answer}</Text>
      <Button
        title="Back"
        onPress={() => {
          if (no > 1) {
            props.navigation.navigate('question-' + (no - 1), {
              data: data[no - 2],
              no: no - 1,
            });
          }
        }}
      />
      <Button
        title="Next"
        onPress={() => {
          if (no < data.length) {
            props.navigation.navigate('question-' + (no + 1), {
              data: data[no],
              no: no + 1,
            });
          }
        }}
      />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    assessment: state.assessment,
  };
};
export default connect(mapStateToProps)(TestDetail);
