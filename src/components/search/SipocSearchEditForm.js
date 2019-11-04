import React, { Component } from "react"
import SIPOCManager from "../../modules/SIPOCManager";
import SupplierManager from "../../modules/SupplierManager"
import "./SipocSearchEditForm.css"


class SipocEditForm extends Component {
    //set the initial state
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
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingSearchSipoc = evt => {

        evt.preventDefault()
        if (this.state.supplierId === "0") {
            window.alert("Please select a supplier from the dropdown");
        } else {

            this.setState({ loadingStatus: true });

            const editedSipoc = {
                id: this.props.match.params.sipocId,
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


            SIPOCManager.update(editedSipoc)
                .then(() => this.props.history.push("/sipoc/search"))
        }
    }

    componentDidMount() {
        SIPOCManager.getOne(this.props.match.params.sipocId)
            .then(sipoc => {
                this.setState({
                    name: sipoc.name,
                    step: +sipoc.step,
                    supplierId: sipoc.supplierId,
                    inputs: sipoc.inputs,
                    process: sipoc.process,
                    outputs: sipoc.outputs,
                    customer: sipoc.customer,
                    loadingStatus: false,
                });
            });

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

                    <div className="search-edit-form-formgrid">

                        <div className="search-edit-form-sipoc-name">
                            <label htmlFor="name">SIPOC Title </label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                //id must exactly match variable in state
                                id="name"
                                value={this.state.name}
                                placeholder="SIPOC Title"
                            />

                            <label htmlFor="step">   Process Step Number </label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                //id must exactly match variable in state
                                id="step"
                                value={this.state.step}
                                placeholder="Enter Step Number (ex. 1)"
                            />
                        </div>

                        <div className="edit-form-flex-container">
                            <div className="edit-form-column">
                                <div className="edit-form-titleboxes">
                                    <label htmlFor="supplierId">Select Supplier</label>
                                </div>
                                <div className="edit-form-contentboxes">
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

                            <div className="edit-form-column">
                                <div className="edit-form-titleboxes">
                                    <label htmlFor="Inputs">Inputs</label>
                                </div>
                                <div className="edit-form-contentboxes">
                                    <textarea
                                        type="text"
                                        required
                                        onChange={this.handleFieldChange}
                                        id="inputs"
                                        value={this.state.inputs}
                                        placeholder="Inputs"
                                    />
                                </div>
                            </div>

                            <div className="edit-form-column">
                                <div className="edit-form-titleboxes">
                                    <label htmlFor="process">Process</label>
                                </div>

                                <div className="edit-form-contentboxes">
                                    <textarea
                                        type="textarea"
                                        required
                                        onChange={this.handleFieldChange}
                                        id="process"
                                        value={this.state.process}
                                        placeholder="Process"
                                    />
                                </div>
                            </div>

                            <div className="edit-form-column">
                                <div className="edit-form-titleboxes">
                                    <label htmlFor="outputs">Outputs</label>
                                </div>
                                <div className="edit-form-contentboxes">
                                    <textarea
                                        type="text"
                                        required
                                        onChange={this.handleFieldChange}
                                        id="outputs"
                                        value={this.state.outputs}
                                        placeholder="Outputs"
                                    />
                                </div>
                            </div>

                            <div className="edit-form-column">
                                <div className="edit-form-titleboxes">
                                    <label htmlFor="customer">Customers</label>
                                </div>
                                <div className="edit-form-contentboxes">
                                    <textarea
                                        type="text"
                                        required
                                        onChange={this.handleFieldChange}
                                        id="customer"
                                        value={this.state.customer}
                                        placeholder="Customers"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="search-edit-form-sipoc-name">
                        <button
                            type="button"
                            // disabled={this.state.loadingStatus}
                            onClick={this.updateExistingSearchSipoc}
                        >Save Changes</button>
                    </div>

                </form>
            </>
        );
    }
}

export default SipocEditForm