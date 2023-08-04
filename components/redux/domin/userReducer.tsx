import {UserType} from '../type';

const initState: UserType[] = [];

export enum UserActionKind {
  USER_LIST = 'user_list',
  SET_USER_DATA = 'set_user_data',
}

type UserAction = {
  type: UserActionKind;
  data: any;
};

export const userReducer = (state = initState, action: UserAction) => {
  switch (action.type) {
    case UserActionKind.SET_USER_DATA:
      return action.data.users;
    default:
      return state;
  }
};
