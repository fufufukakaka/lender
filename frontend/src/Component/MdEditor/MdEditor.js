import React from 'react'
import { Card, Button, CardTitle, Row, Col, Form, FormGroup, Input, FormText } from 'reactstrap'
import './MdEditor.css'

class MdEditor extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Row>
        <Col sm="12">
          <Card body styleName="inputCard">
            <CardTitle>Memo Input</CardTitle>
            <Form>
              <FormGroup>
                {' '}
                <Input type="textarea" name="text" styleName="editorInput" />
                <FormText color="muted">データの説明について。マークダウンにしたかったけど、、、</FormText>
              </FormGroup>
            </Form>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default MdEditor
