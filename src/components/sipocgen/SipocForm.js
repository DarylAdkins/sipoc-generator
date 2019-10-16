import React, { Component } from 'react';
import SIPOCManager from '../../modules/SIPOCManager';
import SupplierManager from "../../modules/SupplierManager"



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
            window.alert("Please input name and process");
        } else {
            this.setState({ loadingStatus: true });
            const newSipoc = {
                name: this.state.name,
                supplier: +this.state.supplierId,
                inputs: this.state.inputs,
                process: this.state.process,
                outputs: this.state.outputs,
                customer: this.state.customer,
                timeSaved: Date.now(),
                userId: sessionStorage.getItem("credentials"),
                loadingStatus: false,

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
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                //id must exactly match variable in state
                                id="name"
                                placeholder="SIPOC Title"
                            />
                            <label htmlFor="name">SIPOC Title</label>


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

                        <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="inputs"
                                placeholder="Inputs"
                            />
                            <label htmlFor="Inputs">Inputs</label>

                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="process"
                                placeholder="Process"
                            />
                            <label htmlFor="process">Process</label>

                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="outputs"
                                placeholder="Outputs"
                            />
                            <label htmlFor="outputs">Outputs</label>

                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="customer"
                                placeholder="Customers"
                            />
                            <label htmlFor="customer">Customers</label>
                        </div>

                        <div className="alignRight">
                            <button
                                type="button"
                                // disabled={this.state.loadingStatus}
                                onClick={this.constructNewSipoc}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default SipocForm