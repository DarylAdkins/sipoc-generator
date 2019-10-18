import React, { Component } from 'react';
import { Link } from "react-router-dom";



class SipocSearchCard extends Component {
  render() {

        return (

                <div className="card">
                    <div className="card-content">

                        <h3>SIPOC Name: <span style={{ color: 'darkslategrey', fontFamily: 'ariel' }}>{this.props.sipoc.name}</span></h3>


                        <Link to={`/sipoc/${this.props.sipoc.id}?_expand=supplier`}><button>Details</button></Link>



                    </div>
                </div>

        );
    }
    }


export default SipocSearchCard;

