import React from 'react'
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import './LeaderBoard.css'

class Leaderboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      editor: false
    }
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }
  editorToggle() {
    this.setState({
      editor: !this.state.editor
    })
  }
  render() {
    return (
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Submission Number</th>
              <th>Submission Date</th>
              <th>Score</th>
              <th>memo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>fukasawa</td>
              <td>1</td>
              <td>2018-08-30 00:00:00</td>
              <td>95%</td>
              <td>
                <Button color="success" outline onClick={() => this.toggle()}>
                  Memo
                </Button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>fukasawa</td>
              <td>1</td>
              <td>2018-08-30 12:00:00</td>
              <td>90%</td>
              <td>
                <Button color="success" outline onClick={() => this.toggle()}>
                  Memo
                </Button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>fukasawa</td>
              <td>3</td>
              <td>2018-08-31 00:00:00</td>
              <td>80%</td>
              <td>
                <Button color="success" outline onClick={() => this.toggle()}>
                  Memo
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <Modal isOpen={this.state.modal} toggle={() => this.toggle()} styleName="modal">
          <ModalHeader toggle={this.toggle}>メモ(どのサブミットに関するメモなのかをここに書く)</ModalHeader>
          <ModalBody>ここに内容が来ます。マークダウンじゃないです</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.editorToggle()}>
              編集
            </Button>{' '}
            <Button color="secondary" onClick={() => this.toggle()}>
              閉じる
            </Button>
          </ModalFooter>
          {this.state.editor ? (
            <Form styleName="modalForm">
              <FormGroup>
                <Label for="exampleText">Editor</Label>
                <Input type="textarea" name="text" />
              </FormGroup>
              <Button color="primary" outline>
                Save
              </Button>{' '}
              <Button color="primary" outline onClick={() => this.editorToggle()}>
                Close Editor
              </Button>
            </Form>
          ) : null}
        </Modal>
      </div>
    )
  }
}

export default Leaderboard
