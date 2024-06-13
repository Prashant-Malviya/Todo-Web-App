import React from 'react';
import { useContext } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import TokenContext from '../../context/TokenContext.js';
import "../../css/header.css"
function Header() {
    const token = localStorage.getItem("authToken");
    const { user } = useContext(TokenContext);
    console.log("user", user);
    const logout = () => {
        localStorage.removeItem("authToken");
        window.location.href = "/login";
    }

    return (
        <div>
            <nav className='header bg-slate-200 flex justify-between items-center py-8 fixed w-full z-50'>
                <div className="logo w-1/4 text-center">
                    <NavLink to="/">Todo</NavLink>
                </div>
                <div className='flex justify-between'>
                    {
                        token ? (
                            <div className='flex items-center justify-center'>
                                <p className='mr-5 font-bold text-lg'>welcome, <span className=' text-xl bg-gradient-to-r from-amber-700 to-purple-600 bg-clip-text text-transparent capitalize'>{user.name}</span></p>
                                <button onClick={logout} className="logout mr-4">Logout</button>
                            </div>
                        ) : (
                            <ul className='flex justify-end gap-3 w-3/4 pr-6'>
                                <li>
                                    <NavLink to="/login">Login</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/register">Register</NavLink>
                                </li>
                            </ul>
                        )
                    }
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

export default Header;