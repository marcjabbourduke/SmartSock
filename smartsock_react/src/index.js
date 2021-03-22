import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Page from './views/page'
import PressureInsole from './views/pressure_insole'
import SetUp from './views/set_up'
import ShockTraining from './views/shock_training'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Page} path="/" />
        <Route exact component={PressureInsole} path="/pressure_insole" />
        <Route exact component={SetUp} path="/set_up" />
        <Route exact component={ShockTraining} path="/shock_training" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
