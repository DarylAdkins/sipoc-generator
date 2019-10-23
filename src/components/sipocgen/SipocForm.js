import React, { Component } from 'react';
import SIPOCManager from '../../modules/SIPOCManager';
import SupplierManager from "../../modules/SupplierManager"
import "./SipocForm.css"



class SipocForm extends Component {
    state = {
        name: "",
        step: "",
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
                step: +this.state.step,
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

                            <label htmlFor="step">   Process Step Number </label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                //id must exactly match variable in state
                                id="step"
                                placeholder="Enter Step Number (ex. 1)"
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
                        <br></br>
                        <br></br>
                        <div className="form-submit-button">
                            <button
                                type="button"
                                // disabled={this.state.loadingStatus}
                                onClick={this.constructNewSipoc}
                            >Submit</button>
                        </div>
                        {/* </div> */}

                    </form>
                    </div>
                </div>
            </>
        )
    }
}

export default SipocForm