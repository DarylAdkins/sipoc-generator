import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./SipocCard.css"



class SipocCard extends Component {
  render() {

        return (

                <div className="card">
                    <div className="card-content">

                        <p className="sipoc-name1">SIPOC Name: <span>{this.props.sipoc.name}</span></p>
                        <p className="sipoc-name1">Step: <span>{this.props.sipoc.step}</span></p>
                        <Link to={`/sipoc/${this.props.sipoc.id}?_expand=supplier`}><button className="details-button">Details</button></Link>
                    </div>
                </div>

        );
    }
    }


export default SipocCard;

