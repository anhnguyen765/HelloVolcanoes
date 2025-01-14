import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import useToken from '/src/token.jsx';

import './logout.css';

export default function Logout() {
    const navigate = useNavigate();
    const {clearToken} = useToken();
    const [logoutClicked, setLogoutClicked] = useState(false);

    const handleLogout = () => {
        if(clearToken()){
            setLogoutClicked(true);
        }
    }

    useEffect(()=>{
        if(logoutClicked){
            navigate('/login');
        }
    },[logoutClicked, navigate])

    return(
        <div className="logout">
            <h1>Logout</h1>
            <p>Are you sure you want to log out?  <a onClick={handleLogout}>Go back</a>
            </p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}