import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './containers/home/Home'
import About from './containers/about/About'
import Contacts from './containers/contacts/Contacts'
import Work from './containers/work/Work'

import useGlobalState from './store/useGlobalState'
import Context from './store/context'

const Index = () => {
  const store = useGlobalState()

  return (
    <Context.Provider value={store}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route exact path='/work/:slug' element={<Work />} />
        </Route>
      </Routes>
    </Context.Provider>
  )
}

import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
