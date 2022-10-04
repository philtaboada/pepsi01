import React from 'react'
import logo from '../assets/logo-large.png'
import liryc from '../assets/pepsilogolyric.png'

const Menu = () => {
    return (
        <div className='menu'>
            <div className='logo_pepsi'>
                <img src={logo} alt="logo pepsi" className="logo" />
                <img src={liryc} alt="pepsi" className='logo_lyric' />
            </div>
            <div>
                <ul className='ul_list'>
                    <li className="menu_list"><a className='a_menu' href="#"> PRODUCTS  </a></li>
                    <li className="menu_list"><a className='a_menu' href="#"> WHAT'S NEW</a></li>
                    <li className="menu_list"><a className='a_menu' href="#"> NEWSLETTER</a></li>
                    <li className="menu_list"><a className='a_menu' href="#"> CONTACT US</a></li>
                </ul>
            </div>
            <div className='menu_buy'>BUY PRODUCTS</div>
        </div>
    )
}

export default Menu