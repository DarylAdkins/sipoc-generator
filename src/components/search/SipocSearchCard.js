import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./SipocSearch.css"



class SipocSearchCard extends Component {
  render() {

        return (

                <div className="card">
                    <div className="card-content">

                        {/* <h3>SIPOC Name: <span style={{ color: 'darkslategrey', fontFamily: 'ariel' }}>{this.props.returnedSipoc.name}</span></h3> */}

                        <h3 className="search-sipoc-name"><span style={{ color: 'darkslategrey' }}>{this.props.returnedSipoc.name}   Step: {this.props.returnedSipoc.step}</span></h3>
                        {/* <h2 className="search-step-number">Step: {this.props.returnedSipoc.step}></h2> */}

                        <div className="flex-container">

                            <div className="search-column">
                                <p className="search-titleboxes">Supplier:</p>
                                <p className="search-contentboxes">{this.props.returnedSipoc.supplier.name}</p>
                            </div>
                                <p><i className="right"></i></p>

                            <div className="search-column">
                                <p className="search-titleboxes">Input:</p>
                                <p className="search-contentboxes">{this.props.returnedSipoc.inputs}</p>
                            </div>
                                 <p><i className="right"></i></p>

                            <div className="search-column">
                                <p className="search-titleboxes">Process:</p>
                                <p className="search-contentboxes">{this.props.returnedSipoc.process}</p>

                            </div>
                                <p><i className="right"></i></p>

                            <div className="search-column">
                                <p className="search-titleboxes">Output:</p>
                                <p className="search-contentboxes">{this.props.returnedSipoc.outputs}</p>
                            </div>
                                <p><i className="right"></i></p>

                            <div className="search-column">
                                <p className="search-titleboxes">Customer:</p>
                                <p className="search-contentboxes">{this.props.returnedSipoc.customer}</p>
                            </div>
                        </div>

                        <div className="search-details-button">
                        <Link to={`/sipoc/searchedit/details/${this.props.returnedSipoc.id}?_expand=supplier`}><button>Details</button></Link>

                        </div>
                        <div className="search-down-arrow-container">
                        <i className="down"></i>
                        </div>



                    </div>
                </div>

        );
    }
    }


export default SipocSearchCard;

