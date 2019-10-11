import React, { Component } from 'react'
import NavBar from "./navbar/NavBar"
import ApplicationViews from "./ApplicationViews"
// import {withRouter} from './node_modules/react-router-dom';
// import auth0Client from "./auth/Auth"

// import "./SIPOC.css"

class Home extends Component {
  render() {
    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>
    )
  }
//   async componentDidMount() {
//     if (this.props.location.pathname === '/callback') return;
//     try {
//       await auth0Client.silentAuth();
//       this.forceUpdate();
//     } catch (err) {
//       if (err.error !== 'login_required') console.log(err.error);
//     }
//   }
}

export default Home;

