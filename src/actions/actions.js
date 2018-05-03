export const addColor = (title, color) =>
  (dispatch, getState) => {
    setTimeout(() =>
      dispatch({

      }),
      2000
    )
  };

export const issueTidAction = (name, partnerId, cid, amount, email, phone, birth) => {
  console.log(name);
  console.log(email);

  return {
    type : "ISSUE_TID",
    values : {
      name,
      partner_id: partnerId,
      cid,
      amount: parseInt(amount),
      email,
      phone,
      birth
    }
  };
};
