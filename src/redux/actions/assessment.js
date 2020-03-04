import Axios from 'axios';

// export const category = () => {
//   return {
//     type: 'GET_CATEGORY',
//     payload: Axios.get('http://100.24.32.116:9999/api/v1/category'),
//   };
// };

export const assessment = data => {
  return {
    type: 'GET_ASSESSMENT',
    payload: data,
    // [
    //   {
    //     no: 1,
    //     question: 'Question 1?',
    //     answer: [
    //       {label: 'This 1 is A', value: 1},
    //       {label: 'This 1 is B', value: 2},
    //       {label: 'This 1 is C', value: 3},
    //       {label: 'This 1 is D', value: 4},
    //       {label: 'This 1 is E', value: 5},
    //     ],
    //   },
    //   {
    //     no: 2,
    //     question: 'Question 2?',
    //     answer: [
    //       {label: 'This 2 is A', value: 1},
    //       {label: 'This 2 is B', value: 2},
    //       {label: 'This 2 is C', value: 3},
    //       {label: 'This 2 is D', value: 4},
    //       {label: 'This 2 is E', value: 5},
    //     ],
    //   },
    //   {
    //     no: 3,
    //     question: 'Question 3?',
    //     answer: [
    //       {label: 'This 3 is A', value: 1},
    //       {label: 'This 3 is B', value: 2},
    //       {label: 'This 3 is C', value: 3},
    //       {label: 'This 3 is D', value: 4},
    //       {label: 'This 3 is E', value: 5},
    //     ],
    //   },
    //   {
    //     no: 4,
    //     question: 'Question 4?',
    //     answer: [
    //       {label: 'This 4 is A', value: 1},
    //       {label: 'This 4 is B', value: 2},
    //       {label: 'This 4 is C', value: 3},
    //       {label: 'This 4 is D', value: 4},
    //       {label: 'This 4 is E', value: 5},
    //     ],
    //   },
    //   {
    //     no: 5,
    //     question: 'Question 5?',
    //     answer: [
    //       {label: 'This 5 is A', value: 1},
    //       {label: 'This 5 is B', value: 2},
    //       {label: 'This 5 is C', value: 3},
    //       {label: 'This 5 is D', value: 4},
    //       {label: 'This 5 is E', value: 5},
    //     ],
    //   },
    // ],
  };
};

export const restoreAssessment = data => {
  return {
    type: 'RESTORE_ASSESSMENT',
    payload: [
      {
        no: 1,
        question: 'Question 1?',
        answer: [
          {label: 'This 1 is A', value: 1},
          {label: 'This 1 is B', value: 2},
          {label: 'This 1 is C', value: 3},
          {label: 'This 1 is D', value: 4},
          {label: 'This 1 is E', value: 5},
        ],
      },
      {
        no: 2,
        question: 'Question 2?',
        answer: [
          {label: 'This 2 is A', value: 1},
          {label: 'This 2 is B', value: 2},
          {label: 'This 2 is C', value: 3},
          {label: 'This 2 is D', value: 4},
          {label: 'This 2 is E', value: 5},
        ],
      },
      {
        no: 3,
        question: 'Question 3?',
        answer: [
          {label: 'This 3 is A', value: 1},
          {label: 'This 3 is B', value: 2},
          {label: 'This 3 is C', value: 3},
          {label: 'This 3 is D', value: 4},
          {label: 'This 3 is E', value: 5},
        ],
      },
      {
        no: 4,
        question: 'Question 4?',
        answer: [
          {label: 'This 4 is A', value: 1},
          {label: 'This 4 is B', value: 2},
          {label: 'This 4 is C', value: 3},
          {label: 'This 4 is D', value: 4},
          {label: 'This 4 is E', value: 5},
        ],
      },
      {
        no: 5,
        question: 'Question 5?',
        answer: [
          {label: 'This 5 is A', value: 1},
          {label: 'This 5 is B', value: 2},
          {label: 'This 5 is C', value: 3},
          {label: 'This 5 is D', value: 4},
          {label: 'This 5 is E', value: 5},
        ],
      },
    ],
    answer: {'1': 1, '2': 1, '3': 0, '4': 4, '5': 5},
    saveQuestion: [2, 3, 5, 4, 1],
  };
};

export const saveAnswer = data => {
  return {
    type: 'SAVE_ANSWER',
    payload: data,
  };
};
