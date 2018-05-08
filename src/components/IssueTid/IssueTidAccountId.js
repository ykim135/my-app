import React from 'react';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import { connect } from 'react-redux';
import {toggleModalSuccess, toggleModal, issueTid} from "../../actions/actions";

export class IssueTidAccountId extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.issueTid(
      e.target.accountId.value,
      e.target.partnerId.value,
      e.target.cid.value,
      e.target.amount.value
    )
  };

  render() {
    return (
      <div>
        <h1>TID 발급 (어카운트 아이디)</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label sm={5}>
              어카운트 아이디 :
              <Input type="text" name="accountId" id="accountId"/>
            </Label>
          </FormGroup>
          <FormGroup>
            <Label sm={5}>
              파트너 아이디 :
              <Input type="text" name="partnerId" id="partnerId"/>
            </Label>
          </FormGroup>
          <FormGroup>
            <Label sm={5}>
              CID :
              <Input type="text" name="cid" id="cid"/>
            </Label>
          </FormGroup>
          <FormGroup>
            <Label sm={5}>
              금액 :
              <Input type="number" name="amount" id="amount"/>
            </Label>
          </FormGroup>
          <Button>발급</Button>

          <Modal isOpen = {this.props.successModalIsOpen}>
            <ModalHeader>
              성공
            </ModalHeader>
            <ModalBody>
              TID  : {this.props.tid}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.props.toggleModalSuccess}>확인</Button>
            </ModalFooter>
          </Modal>

          <Modal isOpen = {this.props.errorModalIsOpen}>
            <ModalHeader>
              서버 에러
            </ModalHeader>
            <ModalBody>
              에러 코드  : {this.props.errorCode}
            </ModalBody>
            <ModalBody>
              에러 메시지 : {this.props.errorMsg}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.props.toggleModal}>확인</Button>
            </ModalFooter>
          </Modal>
        </Form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tid                : state.tid,
    accountId          : state.accountId,
    errorCode          : state.errorCode,
    errorMsg           : state.errorMsg,
    errorModalIsOpen   : state.errorModalIsOpen,
    successModalIsOpen : state.successModalIsOpen
  };
}

function mapDispatchToProps(dispatch) {
  return {
    issueTid           : (accountId, partnerId, cid, amount) => dispatch(issueTid(accountId, partnerId, cid, amount)),
    toggleModal        : () => dispatch(toggleModal()),
    toggleModalSuccess : () => dispatch(toggleModalSuccess())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueTidAccountId);
