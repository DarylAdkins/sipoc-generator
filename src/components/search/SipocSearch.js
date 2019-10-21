import React, { Component } from 'react';
import SIPOCManager from "../../modules/SIPOCManager"
import SipocSearchCard from "./SipocSearchCard"
import { Link } from "react-router-dom";



class SipocSearch extends Component {
    state = {
        search: "",
        returnedSipocs: [],
        loadingStatus: false
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    searchSipoc = evt => {
        evt.preventDefault();
        this.setState({ loadingStatus: true });
        const search = this.state.search;

        SIPOCManager.searchAll(search)
        .then(returnedSearch => {
            console.log(returnedSearch)
            this.setState({
                returnedSipocs: returnedSearch,
                loadingStatus: true
            });

            sessionStorage.setItem("keyword", this.state.search)
        });
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
                                id="search"
                                // value={sessionStorage.getItem("keyword")}
                                placeholder="Search by Keyword"
                            />
                            <label htmlFor="search">SIPOC Search</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"

                                onClick={this.searchSipoc}
                            >Search</button>
                        </div>


                        <br />
                        <br />
                        <div className="container-cards">

                            {this.state.returnedSipocs.map(returnedSipoc =>
                                !returnedSipoc.archived ? (
                                    <SipocSearchCard
                                        deleteSipocProp={this.deleteRetunedSipoc}
                                        key={returnedSipoc.id}
                                        returnedSipoc={returnedSipoc}
                                    />
                                ) : (
                                        null
                                    )
                            )}
                        </div>




                    </fieldset>
                </form>
            </>);
    }
}


export default SipocSearch;