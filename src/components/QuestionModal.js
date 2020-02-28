import React, {useState} from 'react';
import {View, Text, Modal} from 'react-native';

const QuestionModal = props => {
  const [show, showModal] = useState(props.show);

  return (
    <Modal animationType="slide" transparent={false} visible={show}>
      <Text>{props.data}</Text>
    </Modal>
  );
};

export default QuestionModal;
