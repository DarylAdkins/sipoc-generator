import React, { Component } from 'react';
import { Link } from "react-router-dom";



class SipocCard extends Component {
  render() {

        return (

                <div className="card">
                    <div className="card-content">

                        <h3>SIPOC Name: <span style={{ color: 'darkslategrey' }}>{this.props.sipoc.name}</span></h3>
                        {/* <p>Supplier:</p> <p>{this.props.sipoc.supplierId}</p>
                        <p>Input:</p> <p>{this.props.sipoc.inputs}</p>
                        <p>Process:</p> <p>{this.props.sipoc.process}</p>
                        <p>Output:</p> <p>{this.props.sipoc.outputs}</p>
                        Customer: {this.props.sipoc.customers} */}

                        <Link to={`/sipoc/${this.props.sipoc.id}`}><button>Details</button></Link>
                        <Link to={`/sipoc/${this.props.sipoc.id}/edit`}><button>Edit</button></Link>


                    </div>
                </div>

        );
    }
    }


export default SipocCard;

// import React, { Component } from 'react';
// // import './Animal.css'
// import SipocList from './SipocList'
// import { Link } from "react-router-dom";



// class SipocCard extends Component {



//   render() {

//     return (

//             <div className="card">
//                 <div className="card-content">

//                     <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
//                     Supplier: {this.state.supplierId},
//                     Input: {this.state.inputs},
//                     Process: {this.state.process},
//                     Output: {this.state.outputs},
//                     Customer: {this.state.customers}




//                 </div>
//             </div>

//     );
// }
// }

// export default SipocCard;

