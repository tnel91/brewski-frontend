import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

const Nav = ({ authenticated, user, handleLogout}) => {
    let authenticatedOptions
    if (user) {
        authenticatedOptions = (
            <nav>
                <h2>Welcome {user.id}</h2>
                <Link to="/breweries">Breweries</Link>
                <Link to="/profile">Profile</Link>
                <Link onClick={handleLogout} to="/">Sign Out</Link>
            </nav>
        )
    }

    const publicOptions = (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/signin">Sign In</Link>
        </nav>
    )

    return (
        <header>
            <Link to="/">
                <div className="logo">
                    <img className="header-logo"
                    src="https://toppng.com/uploads/preview/cartoon-beer-can-f4000-04-beer-can-clip-art-11563059745sqzfdescqc.png"
                    alt="welcome logo"
                    />
                </div>
            </Link>
            {authenticated && user ? authenticatedOptions : publicOptions}
        </header>
    )
}

export default Nav;