import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../../store/context'

import './header.scss'

const Header = () => {
  const { state, actions } = useContext(Context)

  const toggleMenu = () => {
    actions({ type: 'setState', payload: { ...state, value: !state.value } })
    const body = document.body
    body.classList.toggle('menu-is-open')
    const header = document.querySelector('.header')
    header.classList.toggle('is-open')
  }

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">
          <Link to="/" className="header__logo-link">
            Victor Neves
          </Link>
        </div>
        <span className="header__toggle-menu" onClick={() => toggleMenu()}>
          <i className="icon-menu"></i>
        </span>
      </div>
    </header>
  )
}

export default Header
