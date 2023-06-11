import React from 'react'
import hamburgerIcon from '../assets/images/icon-hamburger.svg'
import hamburgerClose from '../assets/images/icon-close.svg'

const HamburgerMenu = ({isToggleOn}) => {
  console.log('Inside Hamburger comp')  
  console.log(isToggleOn)

  return (
    <div className=''>
        <img className='' src={isToggleOn ? hamburgerClose : hamburgerIcon} alt='hamburger-menu.svg'/>
        <div className={`hamburger-comp-items${isToggleOn ? ` show-menu` :''}`}>
            <div className='items-list'>
                <img className='hamburger-x' src={hamburgerClose} alt='hamburger-close.svg'/>
                <div><button className='item-btn' href='#'>ABOUT</button></div>
                <div><button className='item-btn' href='#'>CAREERS</button></div>
                <div><button className='item-btn' href='#'>EVENTS</button></div>
                <div><button className='item-btn' href='#'>PRODUCTS</button></div>
                <div><button className='item-btn' href='#'>SUPPORT</button></div>
            </div>
        </div>
    </div>
  )
}

export default HamburgerMenu