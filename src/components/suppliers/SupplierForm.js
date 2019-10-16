import React, { Component } from 'react';
import SIPOCManager from '../../modules/SIPOCManager';
import SupplierManager from '../../modules/SupplierManager'



class SupplierForm extends Component {
    state = {
        id: "",
        name: "",
        address: "",
        phone: "",
        active: true,
        userId:"",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create supplier object, invoke the SupplierManager post method, and redirect to home
    */
    constructNewSupplier = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.address === "" || this.state.phone === "") {
            window.alert("Please input supplier name, address and phone number");
        } else {
            this.setState({ loadingStatus: true });
            const newSupplier = {
                name: this.state.name,
                address: this.state.address,
                phone: this.state.phone,
                userId: sessionStorage.getItem("credentials"),
                loadingStatus: true,
            };


            // Create the supplier and redirect user to home
            SupplierManager.post(newSupplier)
                .then(() => this.props.history.push("/home"));
        }
    };

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
                                placeholder="Supplier Name"
                            />
                            <label htmlFor="name">Supplier Name</label>
                            <p><input
                                type="text"
                                required
                                onChange={this.handleFieldChange}

                                id="address"
                                placeholder="Address"
                            />
                            <label htmlFor="address">Supplier Address</label></p>

                            <p><input
                                type="text"
                                required
                                onChange={this.handleFieldChange}

                                id="phone"
                                placeholder="Phone"
                            />
                            <label htmlFor="phone">Supplier Phone Number</label></p>

                            </div>

                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewSupplier}
                            >Save New Supplier</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default SupplierForm