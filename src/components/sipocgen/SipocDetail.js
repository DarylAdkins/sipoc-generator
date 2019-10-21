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

                        <h3 className="sipoc-name">SIPOC Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
                        <div className="flex-container">
                            <div className="column"><p className="titleboxes">Supplier:</p> <p className="contentboxes">{this.state.supplier}</p></div><br></br>
                            <div className="column"><p className="titleboxes">Input:</p> <p className="contentboxes">{this.state.inputs}</p></div><br></br>
                            <div className="column"><p className="titleboxes">Process:</p> <p className="contentboxes">{this.state.process}</p></div><br></br>
                            <div className="column"><p className="titleboxes">Output:</p> <p className="contentboxes">{this.state.outputs}</p></div><br></br>
                            <div className="column"><p className="titleboxes">Customer:</p> <p className="contentboxes">{this.state.customer}</p></div><br></br>
                        </div>

                        <div className="button-container">
                            <button type="button" disabled={this.state.loadingStatus} onClick={this.deleteSipoc}>Delete SIPOC</button>
                            <br></br>
                            <Link to={`/sipoc/${this.state.id}/edit`}><button>Edit SIPOC</button></Link>
                        </div>
                    </div>
                </div>
                :
                <p>Item does not exist</p>
        );
    }
}

export default SipocDetail;

