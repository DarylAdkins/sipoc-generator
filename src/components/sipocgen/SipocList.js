import React, { Component } from 'react'
//import the components we will need
import SipocCard from './SipocCard'
import SIPOCManager from '../../modules/SIPOCManager'
import { Link } from "react-router-dom";
import "./SipocList.css"

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
                        <p><Link to="/sipoc/new"><button>Create New SIPOCs</button></Link>
                           <Link to="/sipoc/search"><button>Search for Existing SIPOCs</button></Link></p>
                    </div>
                </section>
                <div className="container-cards">

                    {this.state.sipocs.map(sipoc =>
                         !sipoc.archived ? (
                            <p><SipocCard
                              deleteSipocProp={this.deleteSipoc}
                              key={sipoc.id}
                              sipoc={sipoc}
                            /></p>
                          ) : (
                            null
                          )
                        )}
                </div>
            </>
        )
    }
}

export default SipocList
