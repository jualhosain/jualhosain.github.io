import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = () => {
    return (
        <>
            <header>
                <div className="menu-btn">
                    <span className="menu-btn__burger"></span>
                </div>
                <nav>
                    <div className="logo">
                        <NavLink to="/"><h2>JH</h2></NavLink>
                    </div>
                    <ul className="menu-nav">
                        <li className="menu-nav__item active">
                            <NavLink  exact activeClassName='active' to="/" className='menu-nav__link'>
                                Home
                            </NavLink>
                        </li>
                        <li className="menu-nav__item">
                            <NavLink  exact activeClassName='active' to="/about" className='menu-nav__link'>
                                About Me
                            </NavLink>
                        </li>
                        <li className="menu-nav__item">
                            <NavLink  exact activeClassName='active' to="/project" className='menu-nav__link'>
                                My Projects
                            </NavLink>
                        </li>
                        <li className="menu-nav__item">
                            <NavLink exact activeClassName='active'  to="/contact" className='menu-nav__link'>
                                Contact Me
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Nav;