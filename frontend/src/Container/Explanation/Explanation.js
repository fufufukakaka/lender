import React from 'react'
import { Card, Button, CardTitle, CardHeader, Row, Col, Form, FormText, FormGroup, Input } from 'reactstrap'
import axios from 'axios'
import './Explanation.css'

class Explanation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      explanation: ''
    }
  }
  onChangeSendData(value) {
    this.setState({ explanation: value })
    axios
      .post('/api/v1/save_explanation', { explanation: value })
      .then(results => {
        console.log('success')
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    return (
      <div>
        <Row>
          <Col sm="12">
            <Card body styleName="explanationCard">
              <CardHeader>Competition Explanation</CardHeader>
              {this.state.explanation.split('\n').map((m, index) => (
                <p key={index}>{m}</p>
              ))}
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="2">
            <p>(管理者ロールのときのみ出現)</p>
            <Button color="success" outline>
              Edit
            </Button>
          </Col>
          <Col sm="10">
            <Card body styleName="inputCard">
              <CardTitle>Explanation Input</CardTitle>
              <Form>
                <FormGroup>
                  {' '}
                  <Input
                    type="textarea"
                    name="text"
                    styleName="explanationMemo"
                    value={this.state.explanation}
                    onChange={e => this.onChangeSendData(e.target.value)}
                  />
                  <FormText color="muted">データの説明について。マークダウンにしたかったけど、、、</FormText>
                </FormGroup>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Explanation
