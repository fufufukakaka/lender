import React from 'react'
import { Jumbotron, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormText, FormGroup, Input } from 'reactstrap'
import { Button } from 'reactstrap'
import axios from 'axios'

class TopJumbotron extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      username: '',
      password: ''
    }
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }
  handlePassword(password) {
    this.setState({ password: password })
  }
  handleLogin() {
    const { username, password } = this.state
    axios
      .post('/api/v1/register_login_user', { username: username, password: password })
      .then(results => {
        console.log(results)
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Lender</h1>
          <p className="lead">Data Competition Leaderboard</p>
          <Button color="primary" onClick={() => this.toggle()}>
            Register or Login
          </Button>
        </Jumbotron>
        <Modal isOpen={this.state.modal} toggle={() => this.toggle()}>
          <ModalHeader toggle={() => this.toggle()}>ユーザ登録・ログイン</ModalHeader>
          <ModalBody>
            <p>ユーザ登録されていなければ登録されます</p>
            <Form>
              <FormGroup>
                {' '}
                <FormText color="muted">ユーザ名</FormText>
                <Input name="username" onChange={e => this.setState({ username: e.target.value })} />
              </FormGroup>
              <FormGroup>
                {' '}
                <FormText color="muted">パスワード</FormText>
                <Input name="password" onChange={e => this.handlePassword(e.target.value)} />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.handleLogin()}>
              Register Or Login
            </Button>{' '}
            <Button color="secondary" onClick={() => this.toggle()}>
              閉じる
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default TopJumbotron
