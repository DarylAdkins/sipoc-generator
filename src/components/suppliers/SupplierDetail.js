import React, { Component } from 'react';
import SupplierManager from '../../modules/SupplierManager';
import { Link } from "react-router-dom";
import './SupplierDetail.css'



class SupplierDetail extends Component {

    state = {
        id: "",
        name: "",
        address: "",
        phone: "",
        active: true,
        userId:"",
        loadingStatus: false,
        archived: false,
    }

    deleteSupplier = id => {

        SupplierManager.softDelete(this.state.id)
            .then(() => { this.props.history.push("/supplier") });
    };


    isValid = () => this.state.name !== undefined

    componentDidMount() {

        //get(id) from SIPOCManager and hang on to that data; put it into state
        SupplierManager.getOne(this.props.supplierId)
            .then((supplier) => {
                this.setState({
                    id: supplier.id,
                    name: supplier.name,
                    address: supplier.address,
                    phone: supplier.phone,
                    userId: sessionStorage.getItem("credentials"),
                    loadingStatus: false,

                });
            });
    }

    render() {
        console.log(this.state.id)
        return (
            this.isValid() ?
                <div className="card">
                    <div className="card-content">

                        <h3 className="supplier-detail-supplier-name">Supplier Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
                        <div className="supplier-detail-flex-container">

                            <p className="supplier-detail-titleboxes">Address:</p>
                            <p className="supplier-detail-contentboxes">{this.state.address}</p><br></br>
                            <p className="supplier-detail-titleboxes">Phone:</p>
                            <p className="supplier-detail-contentboxes">{this.state.phone}</p><br></br>


                        </div>

                        <div className="supplier-detail-button-container">
                            <button type="button" disabled={this.state.loadingStatus} onClick={this.deleteSupplier}>Delete Supplier</button>
                            <br></br>
                            <Link to={`/supplier/${this.state.id}/edit`}><button>Edit Supplier</button></Link>
                        </div>
                    </div>
                </div>
                :
                <p>Supplier does not exist</p>
        );
    }
}

export default SupplierDetail;

