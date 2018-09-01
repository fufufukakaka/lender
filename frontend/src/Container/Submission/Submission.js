import React from 'react'
import { Card, Button, CardTitle, Row, Col, Form, FormGroup, Input, FormText } from 'reactstrap'
import './Submission.css'

class Submission extends React.Component {
  render() {
    return (
      <Form>
        <Row>
          <Col sm="12">
            <Card body styleName="inputCard">
              <CardTitle>File Input</CardTitle>
              <FormGroup>
                {' '}
                <Input type="file" name="file" />
                <FormText color="muted">csvのみ受付。データ形式は出た説明のタブで確認。</FormText>
              </FormGroup>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <Card body styleName="inputCard">
              <CardTitle>Memo Input</CardTitle>
              <FormGroup>
                {' '}
                <Input type="textarea" name="text" styleName="submissionMemo" />
                <FormText color="muted">今回のSubmitに関するメモ。後で入力も可能。</FormText>
              </FormGroup>
            </Card>
          </Col>
        </Row>
        <div styleName="submitButton">
          <Button color="success" outline>
            Submit
          </Button>
        </div>
      </Form>
    )
  }
}

export default Submission
