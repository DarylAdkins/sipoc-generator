import React, { Component } from 'react';
import SIPOCManager from '../../modules/SIPOCManager';
import { Link } from "react-router-dom";
import "./SipocSearchDetail.css"


class SipocSearchDetail extends Component {

    state = {
        name: "",
        step: 1,
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
            .then(() => { this.props.history.push("/sipoc/searchedit") });
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
                    <div className="search-detail-card-content">

                    <h3 className="search-detail-sipoc-name">SIPOC Name:  <span style={{ color: 'darkslategrey' }}>{this.state.name}</span>
                      Step: {this.state.step}</h3>
                        <div className="search-detail-flex-container">


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


                        </div>

                        <div className="button-container">
                            <button type="button" disabled={this.state.loadingStatus} onClick={this.deleteSipoc}>Delete SIPOC</button>
                            <br></br>
                            <Link to={`/sipoc/${this.state.id}/searchedit`}><button>Edit SIPOC</button></Link>
                        </div>



                </div>
                
                :
                <p>Item does not exist</p>
        );
    }
}

export default SipocSearchDetail;

