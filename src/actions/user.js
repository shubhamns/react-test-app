import { INSERT_USER, SEARCH_USER, USER_DETAILS } from "./../actionTypes/user";

export function getUsers() {
  return (dispatch) => {
    fetch("https://randomuser.me/api/?results=100")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: INSERT_USER,
          payload: data.results,
        });
      });
  };
}

export function searchUsers(search) {
  return (dispatch) => {
    dispatch({
      type: SEARCH_USER,
      payload: search,
    });
  };
}

export function getUserDeatils(id) {
  return (dispatch) => {
    dispatch({
      type: USER_DETAILS,
      payload: id,
    });
  };
}
