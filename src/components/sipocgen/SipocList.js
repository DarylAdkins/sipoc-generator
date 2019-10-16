import React, { Component } from 'react'
//import the components we will need
import SipocCard from './SipocCard'
import SIPOCManager from '../../modules/SIPOCManager'
import { Link } from "react-router-dom";

class SipocList extends Component {
    //define what this component needs to render
    state = {
        sipocs: [],
    }




    componentDidMount() {
        console.log("SIPOC List: ComponentDidMount");
        //getAll from SIPOCManager and hang on to that data; put it in state
        SIPOCManager.getAll()
            .then((sipocsFromDataBase) => {
                console.log(sipocsFromDataBase)
                this.setState({
                    sipocs: sipocsFromDataBase
                })
            })
    }

    render() {
    
        return (
            <>
                <section className="section-content">
                    <div>
                        <Link to="/sipoc/new"><button>Create New SIPOCs</button></Link>
                    </div>
                </section>
                <div className="container-cards">

                    {this.state.sipocs.map(sipoc =>
                        <SipocCard
                            key={sipoc.id}
                            sipoc={sipoc}
                        />
                    )}
                </div>
            </>
        )
    }
}

export default SipocList
