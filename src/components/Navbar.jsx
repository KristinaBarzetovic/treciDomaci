import React from 'react'
import { NavLink } from 'react-router-dom'
import { useUserContext } from '../context'

export default function Navbar() {
    const { user } = useUserContext();
    return (
        <nav className="navbar navbar-expand-lg border navbar-light sticky-top bg-light pr-3 pl-3">

            <div className="navbar-collapse collapse pl-3">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item mx-auto">
                        <NavLink className='nav-link' to='/'>Clothes</NavLink>
                    </li>
                    <li className="nav-item mx-auto">
                        <NavLink className='nav-link' to='/brands'>Brands</NavLink>
                    </li>
                    {
                        user && (
                            <li className="nav-item mx-auto">
                                <NavLink className='nav-link' to='/create-clothe'>Create clothe</NavLink>
                            </li>
                        )
                    }
                </ul>
                {
                    user && (
                        <button className="btn btn-sm btn-outline-secondary mr-4" type="button">Logout</button>
                    )

                }
                {
                    !user && (
                        <ul className='navbar-nav ml-auto' >
                            <li className="nav-item mx-auto">
                                <NavLink className='nav-link' to='/login'>Login</NavLink>
                            </li>
                            <li className="nav-item mx-auto">
                                <NavLink className='nav-link' to='/login'>Register</NavLink>
                            </li>
                        </ul>
                    )
                }
            </div>
        </nav>
    )
}
