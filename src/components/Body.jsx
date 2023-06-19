import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './Home'
import About from './About'

export default class Body extends Component {
  render() {
    return (
        <Container>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/About" element={<About />}></Route>
                </Routes>
            </Router>
        </Container>
    )
  }
}
