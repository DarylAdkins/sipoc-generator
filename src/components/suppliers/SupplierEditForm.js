import React, { Component } from 'react';
import SupplierManager from '../../modules/SupplierManager'
import "./SupplierForm.css"



class SupplierEditForm extends Component {
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
    constructEditedSupplier = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.address === "" || this.state.phone === "") {
            window.alert("Please input supplier name, address and phone number");
        } else {
            this.setState({ loadingStatus: true });
            const editedSupplier = {
                id: this.state.id,
                name: this.state.name,
                address: this.state.address,
                phone: this.state.phone,
                userId: sessionStorage.getItem("credentials"),
                loadingStatus: true,
            };


            // Create the supplier and redirect user to home
            SupplierManager.update(editedSupplier)
                .then(() => this.props.history.push("/supplier"));
        }
    };

    componentDidMount() {
        SupplierManager.getOne(this.props.match.params.supplierId)
            .then(supplier => {
                this.setState({
                    name: supplier.name,
                    address: supplier.address,
                    phone: supplier.phone,
                    loadingStatus: false,
                });
            });
        }




       render() {

        return (
            <>
                <form>

                        <div className="formgrid">
                            <div className="input-box-container">
                            <p><input className="input-box"
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                //id must exactly match variable in state
                                id="name"
                                value={this.state.name}
                                placeholder="Supplier Name"
                            /></p>
                            <p><label className="label-text" htmlFor="name">  Enter the Supplier's Name</label></p>
                            <p><input className="input-box"
                                type="text"
                                required
                                onChange={this.handleFieldChange}

                                id="address"
                                value={this.state.address}
                                placeholder="Supplier Address"
                            /></p>
                            <p> <label className="label-text" htmlFor="address">  Enter the Supplier's Address</label></p>

                            <p><input className="input-box"
                                type="text"
                                required
                                onChange={this.handleFieldChange}

                                id="phone"
                                value={this.state.phone}
                                placeholder="Supplier Phone"
                            /></p>
                            <p> <label className="label-text" htmlFor="phone">  Enter the Supplier's Telephone number</label></p>

                            </div>
                            </div>

                        <div className="supplier-form-save-button">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructEditedSupplier}
                            >Save Edited Supplier</button>
                        </div>

                </form>
            </>
        )
    }
}

export default SupplierEditForm