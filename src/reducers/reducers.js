import {
  fetchWithJson,
  fetchWithHeader
} from "../store/store";

const parseResponse = response => response.json();

const initialState = {
  tid         : "",
  accountId   : "",
  errorCode   : "",
  errorMsg    : "",
  modalIsOpen : false
};

export function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ISSUE_TID_EMAIL_PHONE':
      return fetchWithJson(
        'http://localhost:9000/api/v1/issue_tid_email_phone',
        'POST',
        JSON.stringify(action.values)
      ).then(parseResponse);
    case 'ISSUE_TID_ACCOUNT_ID':
      return fetchWithJson(
        'http://localhost:9000/api/v1/issue_tid_account_id',
        'POST',
        JSON.stringify(action.values)
      ).then(parseResponse);
    case 'SCHEME_VALIDATION':
      return fetchWithHeader(
        'http://localhost:9000/api/v1/validate?id=' + action.tid,
        JSON.stringify(action.values)
      ).then(parseResponse);
    case 'SCHEME_VALIDATION_SUCCESS':
      return state;
    case 'SCHEME_VALIDATION_ERROR':
      const newState = {
        modalIsOpen : true,
        errorCode   : action.payload.response.data['error_code'],
        errorMsg    : action.payload.response.data['error_message']
      };

      return newState;
    case 'TOGGLE_MODAL' :
      return !state.modalIsOpen;
    default:
      return state;
  }
}
