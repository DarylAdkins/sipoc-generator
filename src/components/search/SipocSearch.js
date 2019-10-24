import React, { Component } from 'react';
import SIPOCManager from "../../modules/SIPOCManager"
import SipocSearchCard from "./SipocSearchCard"
import { Link } from "react-router-dom";
import "./SipocSearch.css"



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

                        <div className="search-container">
                            <p><input className="search-box"
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                //id must exactly match variable in state
                                id="search"
                                // value={sessionStorage.getItem("keyword")}
                                placeholder="Search by Keyword"
                            /></p>
                            <p><label className="search-label" htmlFor="search">Search for SIPOCs by keyword</label></p>

                            <div className="search-submit-button">
                                <button
                                    type="button"

                                    onClick={this.searchSipoc}
                                >Search</button>
                            </div>
                        </div>


                        <br />
                        <br />
                        <div className="search-container-cards">

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





                </form>
            </>);
    }
}


export default SipocSearch;