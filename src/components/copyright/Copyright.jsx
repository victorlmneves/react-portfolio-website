import React from 'react'
import { useLocation } from 'react-router-dom'

import './copyright.scss'

function Copyright() {
  const location = useLocation()
  const isWorkDetailsPage = location.pathname.includes('/work/')

  return (
    <div className={`copyright ${isWorkDetailsPage ? 'is-hidden' : ''}`}>
      <p className="copyright__text">
        Copyright ©2020 All rights reserved | info@victorneves.dev
      </p>
    </div>
  )
}

export default Copyright
