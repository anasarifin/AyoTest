import React, {useState} from 'react';
import {View, Text, Modal, Button} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

// eslint-disable-next-line prettier/prettier
const radio_props = [
  {label: 'A', value: 0},
  {label: 'B', value: 1},
  {label: 'C', value: 2},
  {label: 'D', value: 3},
  {label: 'E', value: 4},
];

const QuestionModal = props => {
  const [answer, setAnswer] = useState(null);
  return (
    <View>
      <Text onPress={props.close}>Close</Text>
      <Text>{props.question}</Text>
      <RadioForm
        radio_props={radio_props}
        initial={0}
        onPress={value => setAnswer(value)}
      />
      <Text>Answer: {answer}</Text>
      <Text>Index {props.index}</Text>
      <Button title="Back" />
      <Button title="Next" />
    </View>
  );
};

export default QuestionModal;
