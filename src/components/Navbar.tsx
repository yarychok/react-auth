import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Navbar = (props: { name: string, setName: (name: string) => void }) => {

    const logout = async () => {

        await fetch('https://localhost:8000/api/logout', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });

        props.setName('');
    }

    let menu;

    if (props.name === '') {
        menu = (
        <div className="container-fluid">
                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Sign in</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Sign up</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    } else {
        menu = (
            <div>
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/login" onClick={logout}>Log out</Link>
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Pathmentor</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div>
                    { menu }
                </div>
            </div>
        </nav>
    )
}

export default Navbar