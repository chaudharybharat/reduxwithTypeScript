import {takeEvery, put} from 'redux-saga/effects';
import {UserActionKind} from './domin/userReducer';

function* getUserList(): any {
  const baseUrl = 'https://dummyjson.com/users';
  let data = yield fetch(baseUrl);
  data = yield data.json();
  yield put({type: UserActionKind.SET_USER_DATA, data});
}
function* SagaData() {
  yield takeEvery(UserActionKind.USER_LIST, getUserList);
}
export default SagaData;
