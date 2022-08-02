import { CHANGE_SCORE, CHANGE_ITEM } from "./actionsTypes";

export const handlerScoreChange = (payload) => ({
  type: CHANGE_SCORE,
  payload,
});

export const handlerItemChange = (payload) => ({
  type: CHANGE_ITEM,
  payload,
});
