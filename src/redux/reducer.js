import { CHANGE_SCORE, CHANGE_ITEM } from "./actionsTypes";

const initialState = {
  score: 4,
  itemsValue: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    case CHANGE_ITEM:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
