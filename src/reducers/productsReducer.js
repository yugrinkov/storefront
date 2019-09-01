import { FETCH_PRODUCTS } from '../actions/types';

export default function githubReducer(state = [], action) {
  switch (action.type) {
      case FETCH_PRODUCTS:
      return action.data;
    default:
      return state;
  }
}