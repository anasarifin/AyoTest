import React, {useState} from 'react';
import {View, Text, CheckBox, Button} from 'react-native';
// import RadioForm, {
//   RadioButton,
//   RadioButtonInput,
//   RadioButtonLabel,
// } from 'react-native-simple-radio-button';
import RadioButtonRN from 'radio-buttons-react-native';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {saveAnswer} from '../../redux/actions/assessment';
// import {addCount} from './store/counter/actions';

// eslint-disable-next-line prettier/prettier
const radio_props = [
  {label: 'A', value: 1},
  {label: 'B', value: 2},
  {label: 'C', value: 3},
  {label: 'D', value: 4},
  {label: 'E', value: 5},
];

// function randomize(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

// const radio_randomize = randomize(radio_props);

const TestDetail = props => {
  const [no, setNo] = useState(0);
  const data = useSelector(state => state.assessment.assessmentRandom);
  // const saveAnswerAll = useSelector(state => state.assessment.answer);
  const answer = useSelector(state => state.assessment.answer[no.toString()]);
  const choices = useSelector(state => state.assessment.choicesRandom);
  const [answerLocal, setAnswer] = useState(0);
  const question = props.route.params.data;
  // const data = props.assessment.assessmentRandom;
  const dispatch = useDispatch();
  // console.log(data);
  // console.log(choices);

  // console.log(
  //   [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}].findIndex(
  //     x => {
  //       return x.value === 4;
  //     },
  //   ),
  // );

  return (
    <View>
      <Text
        onPress={() => {
          props.navigation.navigate('question-list');
          dispatch(saveAnswer({no: no, answer: answerLocal}));
        }}>
        Close
      </Text>
      <Text>{question}</Text>
      <RadioButtonRN
        data={choices[no - 1]}
        initial={answer || 0}
        // selectedBtn={e => dispatch(saveAnswer({no: no, answer: e.value}))}
        animationTypes={['shake']}
        selectedBtn={e => setAnswer(e.value)}
        // e => console.log('select = ' + e.value)
        // saveAnswer - 1 || -1
      />
      <Text>No. {no}</Text>
      <View style={{flexDirection: 'row'}}>
        <CheckBox />
        <Text>Doubt?</Text>
      </View>
      <Button
        title="Back"
        disabled={no > 1 ? false : true}
        onPress={() => {
          if (no > 1) {
            props.navigation.navigate('question-' + (no - 1), {
              data: data[no - 2],
              no: no - 1,
            });
            dispatch(saveAnswer({no: no, answer: answerLocal}));
          }
        }}
      />
      <Button
        title="Next"
        disabled={no < data.length ? false : true}
        onPress={() => {
          if (no < data.length) {
            props.navigation.navigate('question-' + (no + 1), {
              data: data[no],
              no: no + 1,
            });
            dispatch(saveAnswer({no: no, answer: answerLocal}));
          }
        }}
      />
    </View>
  );
};

// const mapStateToProps = state => {
//   return {
//     assessment: state.assessment,
//   };
// };
// export default connect(mapStateToProps)(TestDetail);

export default TestDetail;
