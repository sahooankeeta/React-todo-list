import * as actionType from "./../helpers/constants";
//ADD TASK INTO TODO LIST
export const addTodo = (formdata) => (dispatch) => {
  dispatch({
    type: actionType.ADD,
    payload: formdata,
  });
};
//REMOVE TASK FROM TODO LIST
export const removeTodo = (id) => (dispatch) => {
  dispatch({ type: actionType.REMOVE, payload: id });
};
//FETCH ALL ITEMS FROM TODO LIST
export const fetchAll = () => (dispatch) => {
  dispatch({ type: actionType.FETCH_ALL });
};
//MARK A TASK AS COMPLETED
export const markCompleted = (data) => (dispatch) => {
  dispatch({ type: actionType.MARK_COMPLETE, payload: data });
};
//RESET THE LIST
export const resetList = () => (dispatch) => {
  dispatch({ type: actionType.RESET });
};
