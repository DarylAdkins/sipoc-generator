import React, { Component } from 'react'
import SIPOCManager from '../../modules/SIPOCManager'
import SipocList from '../sipocgen/SipocList'
import { Link } from "react-router-dom";

class Home extends Component {

    // state = {
    //         id: "",
    //         name: "",
    //         supplierId: "",
    //         inputs: "",
    //         process: "",
    //         outputs: "",
    //         customer: "",
    //         timeSaved: "",
    //         userId: "",
    //         sipocs: [],
    //         loadingStatus: false,
    //     };

    // handleFieldChange = evt => {
    //     const stateToChange = {};
    //     stateToChange[evt.target.id] = evt.target.value;
    //     this.setState(stateToChange);
    // };





    // componentDidMount() {

    //     //getAll from sipoc Manager and hang on to that data; put it in state
    //     SIPOCManager.getAll()
    //         .then((sipocsFromDataBase) => {
    //             console.log(sipocsFromDataBase)
    //             this.setState({
    //                 sipocs: sipocsFromDataBase
    //             })
    //         })
    // };

    // handleSubmit() {
    //     // const sipocId = this.state.id
    //     SIPOCManager.getOne(this.state.id)
    //         .then(() => { this.props.history.push("/sipoc") });
    // };

    // handleNewSipoc() {
    //     this.history.push("/sipoc/new")
    // };

    // handleNewSupplier() {
    //     this.props.history.push("/supplier/new")
    // }



    render() {

        return (

            <form >


                <div>
                <Link  to="/sipoc"><button>View Previous SIPOCs</button></Link>
                </div>

                <div>
                <Link  to="/sipoc/new"><button>Create New SIPOC</button></Link>
                </div>

                <div>
                <Link  to="/supplier/new"><button>Create New Supplier</button></Link>
                </div>






            </form>
        )
    }
}


export default Home




