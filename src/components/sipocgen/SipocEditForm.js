import React, { Component } from "react"
import SIPOCManager from "../../modules/SIPOCManager";
import SupplierManager from "../../modules/SupplierManager"


class SipocEditForm extends Component {
    //set the initial state
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
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingSipoc = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedSipoc = {
            id: this.props.match.params.sipocId,
            name: this.state.name,
            supplierId: this.state.supplierId,
            inputs: this.state.inputs,
            process: this.state.process,
            outputs: this.state.outputs,
            customer: this.state.customer,

        };

        SIPOCManager.update(editedSipoc)
            .then(() => this.props.history.push("/sipoc"))
    }

    componentDidMount() {
        SIPOCManager.getOne(this.props.match.params.sipocId)
            .then(sipoc => {
                this.setState({
                    name: sipoc.name,
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
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                //id must exactly match variable in state
                                id="name"
                                value={this.state.name}
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
                                value={this.state.inputs}
                                placeholder="Inputs"
                            />
                            <label htmlFor="Inputs">Inputs</label>

                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="process"
                                value={this.state.process}
                                placeholder="Process"
                            />
                            <label htmlFor="process">Process</label>

                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="outputs"
                                value={this.state.outputs}
                                placeholder="Outputs"
                            />
                            <label htmlFor="outputs">Outputs</label>

                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="customer"
                                value={this.state.customer}
                                placeholder="Customers"
                            />
                            <label htmlFor="customer">Customers</label>
                        </div>

                        <div className="alignRight">
                            <button
                                type="button"
                                // disabled={this.state.loadingStatus}
                                onClick={this.updateExistingSipoc}
                            >Save Changes</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default SipocEditForm