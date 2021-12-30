import { useContext } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import './assets/scss/app.scss'

import {
  Navbar,
  Header,
  Copyright
} from './components'

import Context from './store/context'

function App () {
  const location = useLocation()
  const isWorkDetailsPage = location.pathname.includes('/work/')
  const { state } = useContext(Context)

  return (
    <div className="App">
      <div className={`${state.value ? 'menu-is-open' : ''}`}></div>
      <div className={`container ${isWorkDetailsPage ? 'container--full' : ''}`}>
        <Navbar />
        <Header />
        <Outlet />
        <Copyright />
      </div>
    </div>
  )
}

export default App
