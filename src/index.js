import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"

import SIPOC from './components/SIPOC'

ReactDOM.render(
  <Router>
    <SIPOC />
  </Router>
  , document.getElementById('root'))
