import React, { Component } from 'react';
import SIPOCManager from '../../modules/SIPOCManager';
import SupplierManager from "../../modules/SupplierManager"
import "./SipocForm.css"



class SipocForm extends Component {
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
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create sipoc object, invoke the sipoc Manager post method, and redirect to the sipoc list
    */
    constructNewSipoc = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.process === "") {
            window.alert("Please input name, and process");
        } else if (this.state.supplierId === "") {
            window.alert("Please select a supplier from the dropdown");
        } else {
            this.setState({ loadingStatus: true });
            const newSipoc = {
                name: this.state.name,
                supplierId: +this.state.supplierId,
                inputs: this.state.inputs,
                process: this.state.process,
                outputs: this.state.outputs,
                customer: this.state.customer,
                timeSaved: Date.now(),
                userId: +sessionStorage.getItem("credentials"),
                archive: false

            };

            // Create the sipoc and redirect user to SipocList
            SIPOCManager.post(newSipoc)
                .then(() => this.props.history.push("/sipoc"));
        }
    };

    componentDidMount() {
        //getAll from supplier Manager and hang on to that data; put it in state
        SupplierManager.getAll()
            .then((suppliersFromDataBase) => {
                console.log(suppliersFromDataBase)
                this.setState({
                    suppliers: suppliersFromDataBase
                })
            })
    }


    render() {

        return (
            <>
                <div className="card">
                    <div className="card-content"> <form>

                        <fieldset>
                            <div className="sipoc-name">
                                <label htmlFor="name">SIPOC Title </label>
                                <input
                                    type="text"
                                    required
                                    onChange={this.handleFieldChange}
                                    //id must exactly match variable in state
                                    id="name"
                                    placeholder="SIPOC Title"
                                />
                            </div>



                            <div className="flex-container">
                                <div className="column">
                                    <div className="titleboxes">
                                        <label htmlFor="supplierId">Select Supplier</label>
                                    </div>
                                    <div className="contentboxes">
                                        <select
                                            className="form-control"
                                            id="supplierId"
                                            value={this.state.supplier}
                                            onChange={this.handleFieldChange}
                                        >
                                            {this.state.suppliers.map(supplier =>
                                                <option key={supplier.id}
                                                    value={supplier.id}>
                                                    {supplier.name}
                                                </option>
                                            )}
                                        </select>
                                    </div>

                                </div>


                                <div className="column">
                                    <div className="titleboxes">
                                        <label htmlFor="Inputs">Inputs</label>
                                    </div>
                                    <div className="contentboxes">
                                    <textarea
                                            type="text"
                                            required
                                            onChange={this.handleFieldChange}
                                            id="inputs"
                                            placeholder="Inputs"
                                        />
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="titleboxes">
                                        <label htmlFor="process">Process</label>
                                    </div>

                                    <div className="contentboxes">
                                        <textarea
                                            type="textarea"
                                            required
                                            onChange={this.handleFieldChange}
                                            id="process"
                                            placeholder="Process"
                                        />
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="titleboxes">
                                        <label htmlFor="outputs">Outputs</label>
                                    </div>
                                    <div className="contentboxes">
                                    <textarea
                                            type="text"
                                            required
                                            onChange={this.handleFieldChange}
                                            id="outputs"
                                            placeholder="Outputs"
                                        />
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="titleboxes">
                                        <label htmlFor="customer">Customers</label>
                                    </div>
                                    <div className="contentboxes">
                                    <textarea
                                            type="text"
                                            required
                                            onChange={this.handleFieldChange}
                                            id="customer"
                                            placeholder="Customers"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="alignRight">
                                <button
                                    type="button"
                                    // disabled={this.state.loadingStatus}
                                    onClick={this.constructNewSipoc}
                                >Submit</button>
                            </div>
                            {/* </div> */}
                        </fieldset>
                    </form>
                    </div>
                </div>
            </>
        )
    }
}

export default SipocForm


{/* < div className = "card" >
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
                </div > */}