import {ProductType} from '../type';

const initiaState: ProductType[] = [];

export enum ProductActionKind {
  ADD_TO_CARD = 'add_to_card',
  REMOVE_FROM_CARD = 'remove_from_card',
  GET_ADD_TO_CARD_LIST = 'get_add_to_card_list',
  CLEAR_CARD = 'clear_card',
}

// An interface for our actions
type ActionType = {
  type: ProductActionKind;
  data: ProductType;
};

export const productReducer = (state = initiaState, action: ActionType) => {
  switch (action.type) {
    case ProductActionKind.ADD_TO_CARD:
      return [...state, action.data];
    case ProductActionKind.REMOVE_FROM_CARD:
      let result = state.filter((item: ProductType) => {
        return item.id !== action.data.id;
      });
      return [...result];
    case ProductActionKind.GET_ADD_TO_CARD_LIST:
      return state;
    case ProductActionKind.CLEAR_CARD:
      state = [];
      return state;
    default:
      return state;
  }
};
