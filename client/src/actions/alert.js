import { v4 as uuid } from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./type";

export const setAlert = (msg, alertType, timeOut = 3000) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: {
      msg,
      alertType,
      id
    }
  });
  setTimeout(() => {
    dispatch({
      type: REMOVE_ALERT,
      payload: id
    });
  }, timeOut);
};