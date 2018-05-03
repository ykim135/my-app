import {fetchWithJson} from "../store/store";

const parseResponse = response => response.json();
//
// const initialState = {
//   name      : "",
//   partnerId : "",
//   cid       : "",
//   amount    : 0,
//   email     : "",
//   phone     : "",
//   birth     : ""
// };

const initialState = {
  count: 0
};

export function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ISSUE_TID':
      return fetchWithJson(
        'http://localhost:9000/api/v1/issue_tid_email_phone',
        'POST',
        JSON.stringify(action.values)
      ).then(parseResponse);

    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}