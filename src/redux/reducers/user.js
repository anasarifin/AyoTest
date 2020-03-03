const initialValue = {
  email: 'riantosm@gmail.com',
  name: 'Rian Tosm',
  phone: '089921022022',
  address: 'Jl. Raya Senen',
  gender: 0,
  image: '',
  complete: false,
  user: {
    id_users: 3,
    name: 'id3',
    email: 'gnti3',
    password: '$2a$10$phVEGeNcKBWPq0dturL7BeTx7T2relJ8cq5/8a8xA7TasWPH2hmim',
    picture: 'img-1583060473982-7.jpg',
    gender: 1,
    phone: '2345',
    address: 'indonesia',
    deleted: 0,
  },
  backup: {
    answer: {'1': 3, '2': 0, '3': 4, '4': 2, '5': 1},
  },
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
      return {
        ...state,
        user: action.payload,
      };
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
