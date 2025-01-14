import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import './login.css'

export default function Login() {
    const loginURL = 'http://4.237.58.241:3000/user/login'
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        fetch(loginURL, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({email, password})
        })
        .then(res =>{
            if (res.ok){
                return res.json().then(data => {
                    console.log('User logged in successfully')
                    localStorage.setItem('token', data.token);
                    navigate(-1)
                });
            } else if (res.status === 400){
                return res.json().then(data => setError(data.message))
            } else if (res.status === 401){
                return res.json().then(data=>setError(data.message))
            }
        })
        .catch(error => console.error('Error:', error))

    }

    return (
        <div className="login">
        <h1>Log in</h1>
            <form id-="login_form" onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required onChange={e => setPassword(e.target.value)}></input>
                </div>
            </form>
                <label id="register_label" htmlFor="register">Don't have an account? Register <a href="/register">here</a></label>
                <br/>
                <button type="submit" onClick={handleLogin}>Login</button>
            {error ? (<p>{error}</p>) : null}
        </div>
    )
}