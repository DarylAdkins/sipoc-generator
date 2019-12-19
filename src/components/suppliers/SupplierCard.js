import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import "./SipocCard.css"



class SupplierCard extends Component {
  render() {

        return (

                <div className="card">
                    <div className="sipoc-card-content">

                        <p className="sipoc-name1">Supplier Name: <span> {this.props.supplier.name}</span></p>

                        <Link to={`/supplier/${this.props.supplier.id}`}><button className="details-button">Details</button></Link>
                    </div>
                </div>

        );
    }
    }


export default SupplierCard;

