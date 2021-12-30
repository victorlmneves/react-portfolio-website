import React from 'react'

import './spinner.scss'

function Spinner() {
  return (
    <div id="nprogress">
      <div
        className="bar"
        role="bar"
        style={{ 'transform': `translate3d(-0.6%, 0px, 0px) transition: all 200ms ease 0s` }}
      >
        <div className="peg"></div>
      </div>
      <div className="spinner" role="spinner"><div className="spinner-icon"></div></div>
    </div>
  )
}

export default Spinner
