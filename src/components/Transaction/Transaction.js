import React from 'react';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {connect} from 'react-redux';
import {toggleModal, transaction} from "../../actions/actions";

export class Transaction extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.transaction(
      e.target.tid.value,
      e.target.partnerId.value,
      e.target.cid.value,
      e.target.crossCheckDate.value
    )
  };

  render() {
    return (
      <div>
        <h1>적립</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label sm={5}>
              TID :
              <Input type="text" name="tid" id="tid"/>
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
              일대사 날짜
              <Input type="date" name="crossCheckDate" id="crossCheckDate"/>
            </Label>
          </FormGroup>
          <Button>발급</Button>

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
    tid            : state.tid,
    accountId      : state.accountId,
    errorCode      : state.errorCode,
    errorMsg       : state.errorMsg,
    errorModalIsOpen    : state.errorModalIsOpen,
    crossCheckDate : state.crossCheckDate
  };
}

function mapDispatchToProps(dispatch) {
  return {
    transaction : (tid, partnerId, cid, crossCheckDate) => dispatch(transaction(tid, partnerId, cid, crossCheckDate)),
    toggleModal : () => dispatch(toggleModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);
