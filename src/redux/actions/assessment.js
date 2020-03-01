import Axios from 'axios';

// export const category = () => {
//   return {
//     type: 'GET_CATEGORY',
//     payload: Axios.get('http://100.24.32.116:9999/api/v1/category'),
//   };
// };

export const assessment = url => {
  return {
    type: 'GET_ASSESSMENT',
    payload: [
      {
        question: 'Question 1?',
        answer: [
          {label: 'This is A', value: 1},
          {label: 'This is B', value: 2},
          {label: 'This is C', value: 3},
          {label: 'This is D', value: 4},
          {label: 'This is E', value: 5},
        ],
      },
      {
        question: 'Question 2?',
        answer: [
          {label: 'This is A', value: 1},
          {label: 'This is B', value: 2},
          {label: 'This is C', value: 3},
          {label: 'This is D', value: 4},
          {label: 'This is E', value: 5},
        ],
      },
      {
        question: 'Question 3?',
        answer: [
          {label: 'This is A', value: 1},
          {label: 'This is B', value: 2},
          {label: 'This is C', value: 3},
          {label: 'This is D', value: 4},
          {label: 'This is E', value: 5},
        ],
      },
      {
        question: 'Question 4?',
        answer: [
          {label: 'This is A', value: 1},
          {label: 'This is B', value: 2},
          {label: 'This is C', value: 3},
          {label: 'This is D', value: 4},
          {label: 'This is E', value: 5},
        ],
      },
      {
        question: 'Question 5?',
        answer: [
          {label: 'This is A', value: 1},
          {label: 'This is B', value: 2},
          {label: 'This is C', value: 3},
          {label: 'This is D', value: 4},
          {label: 'This is E', value: 5},
        ],
      },
    ],
  };
};

export const saveAnswer = data => {
  return {
    type: 'SAVE_ANSWER',
    payload: data,
  };
};
