import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
// import './NavBar.css'
// import auth0Client from "../auth/Auth";

class NavBar extends Component {
    //  signOut = () => {
    //     auth0Client.signOut();
    //     sessionStorage.clear()
    //     this.props.history.replace("/");
    //   };

    render() {

        return (

<header>
            <h1 className="site-title">SIPOC Generator</h1>

            <nav>
                <ul className="container">
                    <li><Link className="nav-link" to="/">Home</Link></li>
                </ul>
            </nav>
            </header>
    )
    }
}

export default NavBar;