import React, { Component } from 'react';
import SIPOCManager from '../../modules/SIPOCManager';


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

    handleDelete = () => {
        //invoke the delete function in SIPOCManger and re-direct to the Sipoc list.
        this.setState({ loadingStatus: true })
        SIPOCManager.delete(this.props.sipocId)
            .then(() => this.props.history.push("/sipoc"))
    }

    isValid = () => this.state.name !== undefined

    componentDidMount() {
        console.log("SIPOC Manager: ComponentDidMount");
        //get(id) from SIPOCManager and hang on to that data; put it into state
        SIPOCManager.getOne(this.props.sipocId)
            .then((sipoc) => {
                this.setState({
                    name: sipoc.name,
                    supplierId: sipoc.supplierId,
                    inputs: sipoc.inputs,
                    process: sipoc.process,
                    outputs: sipoc.outputs,
                    customer: sipoc.customer,
                    timeSaved: Date.now(),
                    userId: sessionStorage.getItem("credentials"),
                    loadingStatus: false,
                });
            });
    }

    render() {console.log(this.state.name)
        return (
            this.isValid() ?
            <div className="card">
                <div className="card-content">

                <h3>SIPOC Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
                        <p>Supplier:</p> <p>{this.state.supplierId}</p>
                        <p>Input:</p> <p>{this.state.inputs}</p>
                        <p>Process:</p> <p>{this.state.process}</p>
                        <p>Output:</p> <p>{this.state.outputs}</p>
                        <p>Customer:</p> <p>{this.state.customer}</p>


                    <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Delete SIPOC</button>
                </div>
            </div>
            :
            <p>Item does not exist</p>
        );
    }
}

export default SipocDetail;

