import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Error from './components/Error'
import CryptoFaqs from './components/CryptoFaqs'
import About from './components/About'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/'>
              <CryptoFaqs />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='*'>
              <Error />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
