import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./SipocSearch.css"



class SipocSearchCard extends Component {
  render() {

        return (

                <div className="card">
                    <div className="card-content">

                        {/* <h3>SIPOC Name: <span style={{ color: 'darkslategrey', fontFamily: 'ariel' }}>{this.props.returnedSipoc.name}</span></h3> */}

                        <h3 className="sipoc-name">SIPOC Name: <span style={{ color: 'darkslategrey' }}>{this.props.returnedSipoc.name}</span></h3>

                        <div className="flex-container">
                        <p className="search-step-number">Step: {this.props.returnedSipoc.step}</p>
                            <div className="column"><p className="titleboxes">Supplier:</p> <p className="contentboxes">{this.props.returnedSipoc.supplier.name}</p></div><br></br>
                            <p><i class="arrow right"></i></p>
                            <div className="column"><p className="titleboxes">Input:</p> <p className="contentboxes">{this.props.returnedSipoc.inputs}</p></div><br></br>
                            <p><i class="arrow right"></i></p>
                            <div className="column"><p className="titleboxes">Process:</p> <p className="contentboxes">{this.props.returnedSipoc.process}</p></div><br></br>
                            <p><i class="arrow right"></i></p>
                            <div className="column"><p className="titleboxes">Output:</p> <p className="contentboxes">{this.props.returnedSipoc.outputs}</p></div><br></br>
                            <p><i class="arrow right"></i></p>
                            <div className="column"><p className="titleboxes">Customer:</p> <p className="contentboxes">{this.props.returnedSipoc.customer}</p></div><br></br>
                        </div>

                        <div className="search-details-button">
                        <Link to={`/sipoc/searchedit/details/${this.props.returnedSipoc.id}?_expand=supplier`}><button>Details</button></Link>
                        </div>



                    </div>
                </div>

        );
    }
    }


export default SipocSearchCard;

