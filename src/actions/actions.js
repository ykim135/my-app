import axios from 'axios';

const baseTen = 10;

export const transactionAction = (tid, partnerId, cid, crossCheckDate) => {

  return {
    payload : {
      tid             : parseInt(tid, baseTen),
      partner_id      : partnerId,
      cid             : cid,
      crosscheck_date : crossCheckDate.replace(/-/g, '')
    }
  };
};

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
      account_id: parseInt(accountId, baseTen),
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

export const issueTidSuccess = (response) => {
  return {
    type    : "ISSUE_TID_SUCCESS",
    payload : response
  }
};

export const issueTidError = (err) => {
  return {
    type    : "ISSUE_TID_ERROR",
    payload : err
  }
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

export const transactionSuccess = (response) => {
  return {
    type    : "TRANSACTION_SUCCESS",
    payload : response
  }
};

export const transactionError = (err) => {
  return {
    type    : "TRANSACTION_ERROR",
    payload : err
  }
};

export const toggleModal = () => {
  return {
    type : "TOGGLE_MODAL"
  }
};

export const toggleModalSuccess = () => {
  return {
    type : "TOGGLE_MODAL_SUCCESS"
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

export function issueTid(accountId, partnerId, cid, amount) {
  return (dispatch) => {
    const action = issueTidAccountIdAction(accountId, partnerId, cid, amount)
    axios
      .post (
        'http://localhost:9000/api/v1/issue-tid-account-id',
        JSON.stringify(action.values),
        { headers: { 'Content-Type' : 'application/json' } }
      )
      .then ( (response) => {
        dispatch(issueTidSuccess(response))
      })
      .catch( (err) => {
        dispatch(issueTidError(err))
      });
  }
}

export function transaction(tid, partnerId, cid, crossCheckDate) {
  return (dispatch) => {
    const action = transactionAction(tid, partnerId, cid, crossCheckDate);
    axios
      .post(
        'http://localhost:9000/api/v1/transaction',
        JSON.stringify(action.payload),
        { headers: { 'Content-Type' : 'application/json' } }
      )
      .then( (response) =>{
        dispatch(transactionSuccess(response))
      })
      .catch( (err) => {
        dispatch(transactionError(err))
      });
  }
}
