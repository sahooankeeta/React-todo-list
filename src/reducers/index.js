import * as actionType from "../helpers/constants.js";

const initialState = {
  complete: localStorage.getItem("complete")
    ? JSON.parse(localStorage.getItem("complete"))
    : [],
  incomplete: localStorage.getItem("incomplete")
    ? JSON.parse(localStorage.getItem("incomplete"))
    : [],
};
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD:
      return {
        ...state,
        incomplete: [action.payload, ...state.incomplete],
      };
    case actionType.MARK_COMPLETE:
      return {
        ...state,
        incomplete: state.incomplete.filter(
          (item) => item.id !== action.payload.id
        ),
        complete: [action.payload, ...state.complete],
      };
    case actionType.REMOVE:
      return {
        ...state,
        incomplete: state.incomplete.filter(
          (item) => item.id !== action.payload
        ),
        complete: state.complete.filter((item) => item.id !== action.payload),
      };
    case actionType.RESET:
      return {
        ...state,
        incomplete: [],
        complete: [],
      };
    default:
      return state;
  }
};
export default reducers;
