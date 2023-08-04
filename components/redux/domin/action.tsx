import {ProductActionKind} from './productReducer';
import {UserActionKind} from './userReducer';
export function addToCard(item: any) {
  return {
    type: ProductActionKind.ADD_TO_CARD,
    data: item,
  };
}
export function removeFromCard(item: any) {
  return {
    type: ProductActionKind.REMOVE_FROM_CARD,
    data: item,
  };
}
export function clearCard() {
  return {
    type: ProductActionKind.CLEAR_CARD,
    data: {},
  };
}
export function getUserDataList() {
  return {
    type: UserActionKind.USER_LIST,
  };
}
export function getCardDataList() {
  return {
    type: ProductActionKind.GET_ADD_TO_CARD_LIST,
  };
}
