import React, { Component } from 'react'
// import SIPOCManager from '../../modules/SIPOCManager'
// import SipocList from '../sipocgen/SipocList'
import { Link } from "react-router-dom";

class Home extends Component {

    render() {

        return (

            <form >
                <div>
                <h1>Welcome to SIPOC Generator</h1>

                <h2>Getting Started:</h2>
                <h3>Users can create, view, edit, and archive SIPOCs.</h3>
                <h3>Users are limited to viewing, editing and archiving only the SIPOCS that they created.</h3>

                {/* <div>
                    <Link to="/sipoc"><button>View Previous SIPOCs</button></Link>
                </div>

                <div>
                    <Link to="/sipoc/new"><button>Create New SIPOC</button></Link>
                </div>

                <div>
                    <Link to="/supplier/new"><button>Create New Supplier</button></Link>
                </div> */}
                </div>






            </form>
        )
    }
}


export default Home




