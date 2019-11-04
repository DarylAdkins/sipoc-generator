import React, { Component } from 'react'
// import SIPOCManager from '../../modules/SIPOCManager'
// import SipocList from '../sipocgen/SipocList'
import { Link } from "react-router-dom";
import "./Home.css"

class Home extends Component {

    render() {

        return (

            <form id="welcome">
                <div>
                <h1>Welcome to the SIPOC Generator</h1>

                <li id="list">Users can create, view, edit, and archive Suppliers.</li>
                <li id="list">Users can create, view, edit, and archive SIPOCs.</li>
                <li id="list">Users are limited to viewing, editing and archiving only the SIPOCS that they created.</li>
                <li id="list">Use the Navigation Bar to move throughout the application.</li>
                </div>
            </form>
        )
    }
}


export default Home




