import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logos/loooogo.png'

const Header = () => {
    const menuItems = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><NavLink to="/appointment">Appointment</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            
        </>
    );

    return (
        <div>
            <div className="navbar shadow-sm px-4">
                {/* Navbar Start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                            {menuItems}
                        </ul>
                    </div>

                    {/* Logo for large screens */}
                    <Link to="/" className="w-28 hidden lg:block">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>

                {/* Center Logo for small/medium devices */}
                <div className="navbar-center lg:hidden">
                    <Link to="/" className="w-28 mx-auto">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>

                {/* Center Menu for large screens */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
