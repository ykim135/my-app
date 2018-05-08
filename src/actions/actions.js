import axios from 'axios';

const baseTen = 10;

export const issueTidEmailPhoneAction = (name, partnerId, cid, amount, email, phone, birth) => {
  return {
    type : "ISSUE_TID_EMAIL_PHONE",
    values : {
      name,
      partner_id: partnerId,
      cid,
      amount: parseInt(amount, baseTen),
      email,
      phone,
      birth
    }
  };
};

export const issueTidAccountIdAction = (accountId, partnerId, cid, amount) => {
  return {
    type : "ISSUE_TID",
    values : {
      account_id: accountId,
      partner_id: partnerId,
      cid,
      amount: parseInt(amount, baseTen)
    }
  };
};

export const schemeValidationAction = (tid, accountId) => {
  return {
    type : "SCHEME_VALIDATION",
    tid,
    values : {
      id : 1,
      accountId: parseInt(accountId, baseTen),
      nickname: "Oliver",
      phoneNumber: "01033905380",
      userAgent: "TEST",
      version: "1.0",
      country: "Korea",
      isActive: true
    }
  };
};

export const schemeValidationSuccess = (response) => {
  return {
    type    : "SCHEME_VALIDATION_SUCCESS",
    payload : response
  }
};

export const schemeValidationError = (err) => {
  return {
    type    : "SCHEME_VALIDATION_ERROR",
    payload : err
  }
};

export const toggleModal = () => {
  return {
    type : "TOGGLE_MODAL"
  }
};

export function validate(tid, accountId) {
  return (dispatch) => {
    const action = schemeValidationAction(tid, accountId);
    axios
      .get(
        'http://localhost:9000/api/v1/validate?id=' + action.tid,
        { headers : { 'talk_user' : JSON.stringify(action.values) } }
      )
      .then( (response) =>{
        dispatch(schemeValidationSuccess(response))
      })
      .catch( (err) => {
        dispatch(schemeValidationError(err))
      });
  }
}
