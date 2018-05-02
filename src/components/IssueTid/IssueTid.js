import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

export default class IssueTid extends React.PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>TID 발급</h1>
        <Form>
          <FormGroup>
            <Label sm={2}>
              어카운트 아이디 :
              <Input/>
            </Label>
          </FormGroup>
          <FormGroup>
            <Label sm={2}>
              파트너 아이디 :
              <Input/>
            </Label>
          </FormGroup>
          <FormGroup>
            <Label sm={2}>
              CID :
              <Input/>
            </Label>
          </FormGroup>
          <FormGroup>
            <Label sm={2}>
              이름 :
              <Input/>
            </Label>
          </FormGroup>
          <FormGroup>
            <Label sm={2}>
              생년월일 :
              <Input/>
            </Label>
          </FormGroup>
          <Button>발급</Button>
        </Form>
      </div>
    )
  }
}