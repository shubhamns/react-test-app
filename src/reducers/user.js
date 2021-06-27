import { INSERT_USER, SEARCH_USER, USER_DETAILS } from "../actionTypes/user";

const initialState = {
  userList: [],
  userDeatils: "",
};

export function users(state = initialState, action) {
  switch (action.type) {
    case INSERT_USER:
      console.log("1", action.payload);
      return {
        ...state,
        userList: action.payload,
      };
    case SEARCH_USER:
      console.log("2", action.payload);
      return {
        ...state,
        userList: state.userList.filter(
          (o) => o.email.indexOf(action.payload) !== -1
        ),
      };
    case USER_DETAILS:
      console.log("3", action.payload);
      return {
        ...state,
        userDeatils: state.userList.filter(
          (res) => res.login.uuid === action.payload
        ),
      };
    default:
      return state;
  }
}
