import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
// import './NavBar.css'
import auth0Client from "../auth/Auth";

class NavBar extends Component {
 signOut = () => {
    auth0Client.signOut();
    sessionStorage.clear()
    this.props.history.replace("/");
  };

  render(){

    return (
      <header>
        <h1 className="site-title">SIPOC Generator<br />

        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            {!auth0Client.isAuthenticated() ? (
              <button className="btn btn-success" onClick={auth0Client.signIn}>Sign In</button>
        ) : (
            <React.Fragment>
             <label>
                {auth0Client.getProfile().name}
              </label>
              <button
                className="btn btn-danger"
                onClick={this.signOut}
              >
                Sign Out
              </button>
             <Link className="nav-link" to="/sipoc">  View/Create/Edit SIPOCS  </Link>
             <Link className="nav-link" to="/supplier/new">  Enter New Supplier  </Link>

             </React.Fragment>
            )}
          </ul>
        </nav>
      </header>
    )
  }
}

export default withRouter(NavBar);