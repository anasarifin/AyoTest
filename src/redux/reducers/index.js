import {combineReducers} from 'redux';
// import countReducer from './count';
// import moveToCart from './cart';
import getAssessment from './assessment';
// import getCategory from './category';

const reducers = combineReducers({
  //   count: countReducer,
  //   cart: moveToCart,
  assessment: getAssessment,
});

export default reducers;
