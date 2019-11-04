import React, { Component } from 'react'
//import the components we will need
import SupplierCard from './SupplierCard'
import SupplierManager from '../../modules/SupplierManager'
import { Link } from "react-router-dom";
// import "./SipocList.css"

class SupplierList extends Component {
    //define what this component needs to render
    state = {
        suppliers: [],
    }




    componentDidMount() {

        //getAll from Supplier Manager and hang on to that data; put it in state
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
                <section className="section-content">
                    <div>
                        <p><Link to="/supplier/new"><button>Create New Supplier</button></Link>
                           {/* <Link to="/supplier/search"><button>Search for Existing Suppliers</button></Link> */}
                           </p>
                    </div>
                </section>
                <div className="container-cards">

                    {this.state.suppliers.map(supplier =>
                         !supplier.archived ? (
                            <p><SupplierCard
                              deleteSupplierProp={this.deleteSupplier}
                              key={supplier.id}
                              supplier={supplier}
                            /></p>
                          ) : (
                            null
                          )
                        )}
                </div>
            </>
        )
    }
}

export default SupplierList
