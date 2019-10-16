import React, { Component } from 'react'
import SIPOCManager from '../../modules/SIPOCManager'
import SipocList from '../sipocgen/SipocList'
import { Link } from "react-router-dom";

class Home extends Component {

    render() {

        return (

            <form >


                <div>
                    <Link to="/sipoc"><button>View Previous SIPOCs</button></Link>
                </div>

                <div>
                    <Link to="/sipoc/new"><button>Create New SIPOC</button></Link>
                </div>

                <div>
                    <Link to="/supplier/new"><button>Create New Supplier</button></Link>
                </div>






            </form>
        )
    }
}


export default Home




