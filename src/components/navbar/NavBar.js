import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import './NavBar.css'
import auth0Client from "../auth/Auth";

class NavBar extends Component {
    signOut = () => {
        auth0Client.signOut();
        sessionStorage.clear()
        this.props.history.replace("/");
    };

    render() {

        return (
            <header>
                <h1 className="site-title">SIPOC Generator</h1>
                <nav>

                    {!auth0Client.isAuthenticated() ? (
                        <p id="signinbuttonposition"><button id="signinbutton" className="btn btn-success" onClick={auth0Client.signIn}>Please Sign In</button></p>
                    ) : (
                            <React.Fragment>
                                <div className="container">
                                    <p><Link className="nav-link" to="/home">Home</Link></p>
                                    <p><Link className="nav-link" to="/sipoc">  View/Create/Edit SIPOCS  </Link></p>
                                    <p><Link className="nav-link" to="/supplier/new">  Enter New Supplier  </Link></p>

                                    <div id="userdiv">
                                        <div id="user"> 
                                            {auth0Client.getProfile().name}
                                        </div>
                                    </div>

                                    <div id="signoutcontainer">
                                        <button id="signoutbutton"
                                        className="btn btn-danger"
                                        onClick={this.signOut}
                                    >
                                        Sign Out
                                     </button>
                                    </div>
                                </div>


                            </React.Fragment>
                        )}

                </nav>
            </header>
        )
    }
}

export default withRouter(NavBar);