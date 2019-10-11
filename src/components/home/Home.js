import React, { Component } from 'react'
import SIPOCManager from '../../modules/SIPOCManager'

class Home extends Component {

        state = {
            sipocs:[]
        };

 handleFieldChange = evt => {
            const stateToChange = {};
            stateToChange[evt.target.id] = evt.target.value;
            this.setState(stateToChange);
        };


        componentDidMount() {

            //getAll from Employees Manager and hang on to that data; put it in state
            SIPOCManager.getAll()
                .then((sipocsFromDataBase) => {
                    console.log(sipocsFromDataBase)
                    this.setState({
                        sipocs: sipocsFromDataBase
                    })
                })
        }


        render() {

            return (
                <>
                    <body>



                            <select
                                className="form-control"
                                id="sipocId"
                                value={this.state.sipoc}
                                onChange={this.handleFieldChange}
                            >
                                {this.state.sipoc.map(sipoc =>
                                    <option key={sipoc.id}
                                    value={sipoc.id}>
                                        {sipoc.name}
                                    </option>
                                )}
                            </select>





                    </body>
                </>
            )
        }
    }







export default Home




