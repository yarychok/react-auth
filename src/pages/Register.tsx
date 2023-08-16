import React, { useState, SyntheticEvent } from 'react';
import { redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

type Props = {}

const Register = (props: Props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [redirectState, setRedirectState] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch('https://localhost:8000/api/register', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ username, email, password, confirmPassword })
        });

        setRedirectState(true);

        if (redirectState) {
            return redirect("/login");
        }
        
        // console.log({
        //     username,
        //     email,
        //     password,
        //     confirmPassword,
        // })
    }

    return (
        <div className="form-signup w-100 m-auto">
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
                <div className="form-floating">
                    <input className="form-control" id="floatingUsername" placeholder="Username" onChange={e => setUsername(e.target.value)} />
                    <label htmlFor="floatingUsername">Username</label>
                </div>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" onChange={e => setEmail(e.target.value)} />
                    <label htmlFor="floatingEmail">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingConfirmPassword" placeholder="Confirm password" onChange={e => setConfirmPassword(e.target.value)} />
                    <label htmlFor="floatingConfirmPassword">Confirm password</label>
                </div>
                <button className="btn btn-primary w-100 py-2" type="submit">Sign up</button>
                <p>Already have an account? <Link to="/login">Log in</Link> </p>
            </form>
        </div>
    )
}

export default Register