import React, {useEffect, useState} from "react";

export default Protected = () => {
    const [message, setMessage] = useState('');
    useEffect(() => {
        fetch('http://localhost:3000/protected', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
            .then(res => {
                if (res.ok){
                    return res.json().then(data => setMessage(data.message));
                } else if (res.status === 401){
                    return res.json().then(data => setMessage(data.error));
                }})
        })
    }, []);

    return (
        <div>
            <h1>Protected Resource</h1>
            <p>{message}</p>
        </div>
    )
}