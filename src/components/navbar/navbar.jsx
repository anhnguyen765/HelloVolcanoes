import './navbar.css';
import { Link } from 'react-router-dom';
import React, {useEffect, useState} from "react"
import useToken from '/src/token.jsx';

export default function NavBar() {

    const {isLoggedIn} = useToken();

    
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/volcanoes">Volcanoes List</Link>
                    </li>
                    <li>
                        {isLoggedIn ? (<Link to="/logout">Logout</Link>) : (<Link to="/login">Login</Link>)}
                    </li>
                </ul>
            </nav>
        </header>
    )
}