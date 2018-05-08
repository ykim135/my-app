import React from 'react';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {connect} from 'react-redux';
import {toggleModalSuccess, toggleModal, validate} from "../../actions/actions";

export class SchemeValidation extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.validateScheme(
      e.target.tid.value,
      e.target.accountId.value
    )
  };

  render() {
    return (
      <div>
        <h1>유저 밸리데이션 (스킴)</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label sm={5}>
              TID (암호화) :
              <Input type="text" name="tid" id="tid"/>
            </Label>
          </FormGroup>
          <FormGroup>
            <Label sm={5}>
              어카운트 아이디 (톡유저헤더) :
              <Input type="text" name="accountId" id="accountId"/>
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
            <ModalBody>
              밸리데이션 결과 : {this.props.validationResult}
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
    successModalIsOpen : state.successModalIsOpen,
    validationResult   : state.validationResult
  };
}

function mapDispatchToProps(dispatch) {
  return {
    validateScheme     : (tid, accountId) => dispatch(validate(tid, accountId)),
    toggleModal        : () => dispatch(toggleModal()),
    toggleModalSuccess : () => dispatch(toggleModalSuccess())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SchemeValidation);
