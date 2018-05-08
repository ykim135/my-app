import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { issueTidAccountIdAction } from '../../actions/actions';

export class IssueTidAccountId extends React.PureComponent {
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.dispatch(issueTidAccountIdAction(
      e.target.accountId.value,
      e.target.partnerId.value,
      e.target.cid.value,
      e.target.amount.value
    ))
  };

  render() {
    return (
      <div>
        <h1>TID 발급 (어카운트 아이디)</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label sm={2}>
              어카운트 아이디 :
              <Input type="text" name="name" id="name"/>
            </Label>
          </FormGroup>
          <FormGroup>
            <Label sm={2}>
              파트너 아이디 :
              <Input type="text" name="partnerId" id="partnerId"/>
            </Label>
          </FormGroup>
          <FormGroup>
            <Label sm={2}>
              CID :
              <Input type="text" name="cid" id="cid"/>
            </Label>
          </FormGroup>
          <FormGroup>
            <Label sm={2}>
              금액 :
              <Input type="number" name="amount" id="amount"/>
            </Label>
          </FormGroup>
          <Button>발급</Button>
        </Form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    accountId : state.accountId,
    partnerId : state.partnerId,
    cid       : state.cid,
    amount    : state.amount
  };
}

export default connect(mapStateToProps)(IssueTidAccountId);
