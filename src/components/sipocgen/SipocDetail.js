import React, { Component } from 'react';
import SIPOCManager from '../../modules/SIPOCManager';
import { Link } from "react-router-dom";
import './SipocDetail.css'



class SipocDetail extends Component {

    state = {
        name: "",
        supplierId: "",
        inputs: "",
        process: "",
        outputs: "",
        customer: "",
        timeSaved: "",
        userId: "",
        suppliers: [],
        loadingStatus: true,
    }

    deleteSipoc = id => {

        SIPOCManager.softDelete(this.state.id)
            .then(() => { this.props.history.push("/sipoc") });
    };


    isValid = () => this.state.name !== undefined

    componentDidMount() {
        console.log("SIPOC Manager: ComponentDidMount");
        //get(id) from SIPOCManager and hang on to that data; put it into state
        SIPOCManager.getOne(this.props.sipocId)
            .then((sipoc) => {
                this.setState({
                    id: sipoc.id,
                    name: sipoc.name,
                    step: sipoc.step,
                    supplierId: sipoc.supplierId,
                    inputs: sipoc.inputs,
                    process: sipoc.process,
                    outputs: sipoc.outputs,
                    customer: sipoc.customer,
                    timeSaved: Date.now(),
                    userId: sessionStorage.getItem("credentials"),
                    supplier: sipoc.supplier.name,
                    loadingStatus: false,
                });
            });
    }

    render() {
        console.log(this.state.supplierId)
        return (
            this.isValid() ?
                <div className="card">
                    <div className="card-content">

                        <h3 className="detail-sipoc-name">SIPOC Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span>
                          Step: <span>{this.state.step}</span></h3>
                        <div className="flex-container">

                            <div className="search-column">
                                <p className="search-titleboxes">Supplier:</p>
                                <p className="search-contentboxes">{this.state.supplier}</p>
                            </div>
                            <p><i className="right"></i></p>

                            <div className="search-column">
                                <p className="search-titleboxes">Input:</p>
                                <p className="search-contentboxes">{this.state.inputs}</p>
                            </div>
                            <p><i className="right"></i></p>

                            <div className="search-column">
                                <p className="search-titleboxes">Process:</p>
                                <p className="search-contentboxes">{this.state.process}</p>

                            </div>
                            <p><i className="right"></i></p>

                            <div className="search-column">
                                <p className="search-titleboxes">Output:</p>
                                <p className="search-contentboxes">{this.state.outputs}</p>
                            </div>
                            <p><i className="right"></i></p>

                            <div className="search-column">
                                <p className="search-titleboxes">Customer:</p>
                                <p className="search-contentboxes">{this.state.customer}</p>
                            </div>
                            </div>


                            <p><div className="sipoc-detail-button-container">
                                <button type="button" disabled={this.state.loadingStatus} onClick={this.deleteSipoc}>Delete SIPOC</button>
                                <br></br>
                                <Link to={`/sipoc/${this.state.id}/edit`}><button>Edit SIPOC</button></Link>
                            </div></p>
                        </div>
                    </div>

                    :
                <p>Item does not exist</p>
                    );
                }
            }

            export default SipocDetail;

