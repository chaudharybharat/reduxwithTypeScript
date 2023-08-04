import {combineReducers} from 'redux';
import {productReducer} from './domin/productReducer';
import {userReducer} from './domin/userReducer';

export default combineReducers({
  productReducer,
  userReducer,
});
