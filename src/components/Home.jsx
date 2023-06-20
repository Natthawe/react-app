import React, { Component } from 'react'
import Connection from './Connection'

export default class Home extends Component {
  state = {}


  render() {
    return (
      <main>
        <h1 className='text-center m-3'>Robot Control</h1>
        <Connection />
      </main>
    )
  }
}
