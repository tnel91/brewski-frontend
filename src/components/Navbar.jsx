import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

const Nav = ({ authenticated, user, handleLogout}) => {
    let authenticatedOptions
    if (user) {
        authenticatedOptions = (
            <nav>
                <h2>Welcome!</h2>
                <Link className="link" to="/breweries">Breweries</Link>
                <Link className="link" to="/profile">Profile</Link>
                <Link className="link" onClick={handleLogout} to="/">Sign Out</Link>
            </nav>
        )
    }

    const publicOptions = (
        <nav>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/register">Register</Link>
            <Link className="link" to="/signin">Sign In</Link>
        </nav>
    )

    return (
        <header>
            <Link to="/">
                <div className="logo">
                    <img className="header-logo"
                    src="https://i.imgur.com/vVyyud0.png"
                    alt="welcome logo"
                    />
                </div>
            </Link>
            {authenticated && user ? authenticatedOptions : publicOptions}
        </header>
    )
}

export default Nav;