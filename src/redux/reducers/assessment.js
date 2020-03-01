const initialValue = {
  assessment: [],
  assessmentRandom: [],
  choicesRandom: [],
  answer: {},
  complete: false,
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
        complete: true,
        // assessment: action.payload,
        assessmentRandom: assessment,
        choicesRandom: choices,
        answer: createAnswerStore(action.payload.length),
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
