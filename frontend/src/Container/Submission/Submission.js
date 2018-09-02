import React from 'react'
import { Card, Button, CardTitle, Row, Col, Form, FormGroup, Input, FormText, FormFeedback } from 'reactstrap'
import axios from 'axios'
import './Submission.css'

class Submission extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fileInputCheck: false,
      fileInputCheckResult: true,
      submitFile: '',
      submissionMemo: ''
    }
  }
  handleFileInput(files) {
    this.setState({ submitFile: files })
    if (files.name.indexOf('.csv') > -1) {
      this.setState({ fileInputCheck: true, fileInputCheckResult: true })
    } else {
      this.setState({ fileInputCheck: true, fileInputCheckResult: false })
    }
  }
  handleMemoInput(value) {
    this.setState({ submissionMemo: value })
  }
  handleSubmit() {
    const { submitFile, submissionMemo } = this.state
    axios
      .post('/api/v1/receive_submission', { submitFile: submitFile, submissionMemo: submissionMemo })
      .then(results => {
        console.log('success')
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    return (
      <Form>
        <Row>
          <Col sm="12">
            <Card body styleName="inputCard">
              <CardTitle>File Input</CardTitle>
              <FormGroup>
                {' '}
                <Input invalid type="file" name="file" onChange={e => this.handleFileInput(e.target.files[0])} />
                <FormText color="muted">csvのみ受付。データ形式は出た説明のタブで確認。</FormText>
                {this.state.fileInputCheckResult ? null : <FormFeedback>csvではありません。</FormFeedback>}
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
                <Input
                  type="textarea"
                  name="text"
                  styleName="submissionMemo"
                  onChange={e => this.handleMemoInput(e.target.value)}
                />
                <FormText color="muted">今回のSubmitに関するメモ。後で入力も可能。</FormText>
              </FormGroup>
            </Card>
          </Col>
        </Row>
        <div styleName="submitButton">
          <Button color="success" outline onClick={() => this.handleSubmit()}>
            Submit
          </Button>
        </div>
      </Form>
    )
  }
}

export default Submission
