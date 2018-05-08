import {fetchWithJson} from "../store/store";

const parseResponse = response => response.json();

const initialState = {
  tid              : "",
  accountId        : "",
  errorCode        : "",
  errorMsg         : "",
  errorModalIsOpen : false,
  successModalIsOpen : false
};

export function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ISSUE_TID_EMAIL_PHONE':
      return fetchWithJson(
        'http://localhost:9000/api/v1/issue_tid_email_phone',
        'POST',
        JSON.stringify(action.values)
      ).then(parseResponse);
    case 'ISSUE_TID_SUCCESS':
      return {
        successModalIsOpen : true,
        tid                : action.payload.data['request_id']
      };
    case 'ISSUE_TID_ERROR':
      return {
        errorModalIsOpen : true,
        errorCode   : action.payload.response.data['error_code'],
        errorMsg    : action.payload.response.data['error_message']
      };
    case 'SCHEME_VALIDATION_SUCCESS':
      return state;
    case 'SCHEME_VALIDATION_ERROR':
      return {
        errorModalIsOpen : true,
        errorCode   : action.payload.response.data['error_code'],
        errorMsg    : action.payload.response.data['error_message']
      };
    case 'TRANSACTION_SUCCESS':
      return state;
    case 'TRANSACTION_ERROR':
      return {
        errorModalIsOpen : true,
        errorCode   : action.payload.response.data['error_code'],
        errorMsg    : action.payload.response.data['error_message']
      };
    case 'TOGGLE_MODAL_SUCCESS' :
      return !state.successModalIsOpen;
    case 'TOGGLE_MODAL' :
      return !state.errorModalIsOpen;
    default:
      return state;
  }
}
