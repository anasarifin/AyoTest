const initialValue = {
  email: 'riantosm@gmail.com',
  name: 'Rian Tosm',
  phone: '089921022022',
  address: 'Jl. Raya Senen',
  gender: 0,
  image: '',
  complete: false,
};

const getUser = (state = initialValue, action) => {
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
    case 'GET_USER':
      //   const random = randomize(action.payload);
      //   const assessment = random.map(x => x.question);
      //   const choices = random.map(x => randomize(x.answer));
      return state;
    // case 'SAVE_ANSWER':
    //   return {
    //     ...state,
    //     answer: {
    //       ...state.answer,
    //       [action.payload.no]: action.payload.answer,
    //     },
    //   };
    default:
      return state;
  }
};

export default getUser;
