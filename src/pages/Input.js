import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class input extends React.Component {
	constructor(props) {
		super(props);
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