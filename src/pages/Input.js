import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class input extends Component {
	constructor(props) {
    super(props);
    
    this.state = {

    }
	}

  render() {
    return (
      <>
      <h1>github test</h1>
      <Link to = "/main">
        Click
      </Link>
      </>
    )
    
  }
}

export default input