import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IssueTidEmailPhone from '../IssueTid/IssueTidEmailPhone'
import IssueTidAccountId from '../IssueTid/IssueTidAccountId'
import SchemeValidation from '../SchemeValidation/SchemeValidation'

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/tid_email_phone">TID 발급 (이메일과 전화번호)</Link>
        </li>
        <li>
          <Link to="/tid_account_id">TID 발급 (어카운트 아이디)</Link>
        </li>
        <li>
          <Link to="/scheme_validation">유저 밸리데이션 (스킴)</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/tid_email_phone" component={IssueTidEmailPhone} />
      <Route path="/tid_account_id" component={IssueTidAccountId} />
      <Route path="/scheme_validation" component={SchemeValidation} />
    </div>
  </Router>
);

export default Routes;