import { useState, useEffect } from "react";

export default function useToken(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    },[])

    const clearToken = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        return true;
    }

    return {isLoggedIn,clearToken};
}