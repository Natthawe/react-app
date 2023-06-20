import React, { Component } from 'react'

export default class Home extends Component {
  state = {
    counter: 0,
  }

  increment_counter(){
    // this.state.counter = this.state.counter + 1
    this.setState({counter: this.state.counter + 1})
    console.log(this.state.counter)
  }

  render() {
    return (
      <main>
        <h1 className='text-center'>Robot Control</h1>
        <h5>Counter:
          <span>{this.state.counter}</span>
        </h5>
        <button onClick={() => this.increment_counter()}>Increment</button>
      </main>
    )
  }
}
