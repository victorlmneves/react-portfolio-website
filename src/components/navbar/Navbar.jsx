import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../../store/context'

import './navbar.scss'

function Navbar() {
  const { state, actions } = useContext(Context)

  const toggleMenu = () => {
    actions({ type: 'setState', payload: { ...state, value: !state.value } })
    const body = document.body
    body.classList.remove('menu-is-open')
    const header = document.querySelector('.header')
    header.classList.remove('is-open')
  }

  const closeMenu = () => {
    toggleMenu()
  }

  return (
    <nav
      className={`main-menu ${state.value ? 'main-menu--open' : ''}`}
      role="navigation"
    >
      <span className="main-menu__icon" onClick={() => toggleMenu()}>
        <i className="icon-close"></i>
      </span>
      <div className="main-menu__wrapper">
        <ul className="main-menu__content">
          <li className="main-menu__item">
            <Link className="main-menu__link" to="/" onClick={() => closeMenu()}>
              Home
            </Link>
          </li>
          <li className="main-menu__item">
            <Link className="main-menu__link" to="/contacts" onClick={() => closeMenu()}>
              Contacts
            </Link>
          </li>
          <li className="main-menu__item">
            <Link className="main-menu__link" to="/about" onClick={() => closeMenu()}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
