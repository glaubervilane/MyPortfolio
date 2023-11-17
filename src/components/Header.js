import React from 'react'
import Typed from 'react-typed'

function Header() {
  return (
    <div className='header-wraper' id='header-wrapper'>
      <div className='main-info'>
        <h1>Web Development / Full stack</h1>
        <Typed
          className='typed-text'
          strings={['Web Development', 'Web Design', 'Full stack', 'Back end', 'Front end']}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href='#contact-wrapper' className='btn-main-offer'>Contact me</a>
      </div>
    </div>
  )
}

export default Header