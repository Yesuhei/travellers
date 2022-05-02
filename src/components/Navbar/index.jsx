import React from 'react'
import Header from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import {Route, Link} from 'react-router-dom'

const Navbar = () => {

  return (
    <nav className={Header.Navbar}>
      <h1 id={Header.Logo}>
        <a href="">TRAVELLERS</a>
      </h1>
      <div className={Header.center}>
        <ul className='Header.nav_menu'>
          <li className={Header.nav_item}>
            {/*<a href="/explore">EXPLORE</a>*/}
            <Link to='/explore'>
                    EXPLORE
            </Link>
            </li>
          <li className={Header.nav_item}><a href="#Donate-scroll">DONATE</a> </li>
          <li className={Header.nav_item}><a href="#Contact-scroll">CONTACT US</a></li>
          <li className={Header.nav_item}><a href="#About-scroll">ABOUT</a></li>
        </ul>
      </div>
      <h3 id={Header.Lang}>LANG</h3>
    </nav>
  )
}

export default Navbar