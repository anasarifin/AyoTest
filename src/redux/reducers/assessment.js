import Axios from 'axios';

const initialValue = {
  assessment: [],
  assessmentRandom: [],
  choicesRandom: [],
  answer: {},
  complete: false,
  questionSave: [],
  data: [],
};

function randomize(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createAnswerStore(length) {
  const answer = {};
  for (let x = 1; x <= length; x++) {
    answer[x] = 0;
  }
  return answer;
}

async function createQuestionList(data) {
  const url = 'http://192.168.1.135:3333/api/answer/insert';
  const final = await data.map(x => x.no);
  Axios.post(url, {
    id_assessment: 1,
    id_user: 5,
    answer: JSON.stringify(createAnswerStore(data.length)),
    question_queue: JSON.stringify(final),
  });
  return final;
}

function restoreQuestion(source, data) {
  const final = [];
  source.forEach(x => {
    final.push(data[data.findIndex(y => y.no === x)]);
  });
  return final;
}

const getAssessment = (state = initialValue, action) => {
  switch (action.type) {
    // case 'GET_CATEGORY_PENDING':
    //   return state;
    // case 'GET_CATEGORY_REJECTED':
    //   return state;
    // case 'GET_CATEGORY_FULFILLED':
    //   return {
    //     ...state,
    //     isFulfilled: true,
    //     categoryList: action.payload.data,
    //   };
    case 'GET_ASSESSMENT':
      const random = randomize(action.payload);
      const assessment = random.map(x => x.question);
      const choices = random.map(x => randomize(x.answer));
      return {
        ...state,
        // assessment: action.payload,
        assessmentRandom: assessment,
        choicesRandom: choices,
        questionSave: createQuestionList(action.payload),
        answer: createAnswerStore(action.payload.length),
        complete: true,
        data: action.payload,
      };
    case 'RESTORE_ASSESSMENT':
      const random2 = randomize(action.payload);
      // const assessment2 = random2.map(x => x.question);
      const choices2 = random2.map(x => randomize(x.answer));
      return {
        ...state,
        complete: true,
        assessmentRandom: restoreQuestion(
          action.saveQuestion,
          action.payload,
        ).map(x => x.question),
        choicesRandom: choices2,
        answer: action.answer,
      };
    case 'SAVE_ANSWER':
      return {
        ...state,
        answer: {
          ...state.answer,
          [action.payload.no]: action.payload.answer,
        },
      };
    default:
      return state;
  }
};

export default getAssessment;
