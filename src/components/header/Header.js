import React from 'react'
import './header.css'
import logo from './../../assets//icons//logoo.png'

const Header = () => {
  return (
    <div>
        <header>
            <a href='#' className='logo'>
                 <img src={logo} alt=''/>
                 </a>

            <a href='#' className='menu'>
            <ion-icon name="apps-outline"></ion-icon>
            </a>
            <ul className='nav'>
                <li> <a href='#'>Mobile Legend</a></li>
                <li> <a href='#'>Mobile Legend</a></li>
                <li> <a href='#'>Mobile Legend</a></li>
            </ul>

            <div className='search'>
                <input type='text' placeholder='search'/>
                <ion-icon name="search-outline"></ion-icon>
            </div>

            <ul className='nav-collapse'>
            <li> <a href='#'>Mobile Legend</a></li>
             <li> <a href='#'>Mobile Legend</a></li>
             <li> <a href='#'>Mobile Legend</a></li>
            </ul>
        </header>
    </div>
  )
}

export default Header