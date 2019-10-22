import React, { Component } from 'react';
import SupplierManager from '../../modules/SupplierManager'
import "./SupplierForm.css"



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
                            <div className="input-box-container">
                            <p><input className="input-box"
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                //id must exactly match variable in state
                                id="name"
                                placeholder="Supplier Name"
                            /></p>
                            <p><label htmlFor="name">  Enter the Supplier's Name</label></p>
                            <p><input className="input-box"
                                type="text"
                                required
                                onChange={this.handleFieldChange}

                                id="address"
                                placeholder="Supplier Address"
                            /></p>
                            <p> <label htmlFor="address">  Enter the Supplier's Address</label></p>

                            <p><input className="input-box"
                                type="text"
                                required
                                onChange={this.handleFieldChange}

                                id="phone"
                                placeholder="Supplier Phone"
                            /></p>
                            <p> <label htmlFor="phone">  Enter the Supplier's Telephone number</label></p>

                            </div>
                            </div>

                        <div className="supplier-form-save-button">
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