import React, {useState} from "react"
import './register.css';

export default function Register() {

    const registerURL = 'http://4.237.58.241:3000/user/register'

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        fetch(registerURL, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({ email, username, password})
            })
            .then(res => {
                if (res.ok) {
                    return res.json().then(data => {
                        setError('User created successfully');
                    });
                } else if (res.status === 400){
                    return res.json().then(data => {
                        setError(data.message);
                    })
                } else if (res.status === 409){
                    return res.json().then(data => {
                        setError(data.message)
                    })
                } else {
                    setError('Unknown error occured')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            })

    }
    return (
        <div className="register">
            <h1>Registration</h1>
            <form id="register_form" onSubmit={handleRegister}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required onChange={e=>setEmail(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required onChange={e=>setUserName(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required onChange={e=>setPassword(e.target.value)}></input>
                </div>
            </form>
                <label id="login_label" htmlFor="register">Already have an account? Login <a href="/login">here</a></label>
                <br/>
                <button type="submit" onClick={handleRegister}>Register</button>
            {
                error ? (<p>{error}</p>) : null
            }
        </div>
    )
}