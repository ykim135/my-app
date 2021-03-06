import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { issueTidEmailPhoneAction } from '../../actions/actions';

export class IssueTidEmailPhone extends React.PureComponent {
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.dispatch(issueTidEmailPhoneAction(
      e.target.name.value,
      e.target.partnerId.value,
      e.target.cid.value,
      e.target.amount.value,
      e.target.email.value,
      e.target.phone.value,
      e.target.birth.value
    ))
  };

  render() {
    return (
      <div>
        <h1>TID 발급</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label sm={2}>
              이름 :
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
          <FormGroup>
            <Label sm={2}>
              이메일 :
              <Input type="email" name="email" id="email"/>
            </Label>
          </FormGroup>
          <FormGroup>
            <Label sm={2}>
              전화번호 :
              <Input type="text" name="phone" id="phone"/>
            </Label>
          </FormGroup>
          <FormGroup>
            <Label sm={2}>
              생년월일 :
              <Input type="text" name="birth" id="birth"/>
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
    name      : state.name,
    partnerId : state.partnerId,
    cid       : state.cid,
    amount    : state.amount,
    email     : state.email,
    phone     : state.phone,
    birth     : state.birth
  };
}

export default connect(mapStateToProps)(IssueTidEmailPhone);
