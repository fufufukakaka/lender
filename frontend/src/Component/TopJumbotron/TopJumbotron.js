import React from 'react'
import { Jumbotron } from 'reactstrap'
import { Button } from 'reactstrap'

const TopJumbotron = () => (
  <div>
    <Jumbotron>
      <h1 className="display-3">Lender</h1>
      <p className="lead">Data Competition Leaderboard</p>
      <Button color="primary">Login</Button>
    </Jumbotron>
  </div>
)

export default TopJumbotron
