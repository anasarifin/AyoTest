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
      'siapa dia?',
      'siapa kamu?',
      'siapa kita?',
      'siapakah?',
      'siapapun',
    ],
    // [
    //   'siapa kamu?',
    //   'siapa saya?',
    //   'dimana kita?',
    //   'kapan nikah?',
    //   'apa itu?',
    // ],
  };
};
