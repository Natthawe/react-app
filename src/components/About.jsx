import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <main>
        <div>
            <h1 className='text-center m-3'>About</h1>
            <p className='text-center m-5'>This react app controls and monitors ROS-enabled robots through a Web</p>
        </div>
      </main>        
    )
  }
}
