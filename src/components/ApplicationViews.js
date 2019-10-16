import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './home/Home'
import SipocList from "./sipocgen/SipocList"
// import SupplierList from "./suppliers/SupplierList"
import SipocForm from "./sipocgen/SipocForm"
import SupplierForm from "./suppliers/SupplierForm"
import SipocDetail from "./sipocgen/SipocDetail"
import SipocEditForm from "./sipocgen/SipocEditForm"
import Auth0Client from "./auth/Auth";
import Callback from "./auth/Callback"


class ApplicationViews extends Component {

    // isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    render() {
        return (
            <React.Fragment>




                <Route
                    exact
                    path="/home"
                    render={props => {
                        if (Auth0Client.isAuthenticated()) {
                            return <Home {...props} />;
                        } else {
                            Auth0Client.signIn();
                            return null;
                        }
                    }}
                />

                <Route
                    exact
                    path="/sipoc"
                    render={props => {
                        if (Auth0Client.isAuthenticated()) {
                            return <SipocList {...props} />;
                        } else {
                            Auth0Client.signIn();
                            return null;
                        }
                    }}
                />

                <Route
                    exact
                    path="/sipoc/:sipocId(\d+)"
                    render={props => {
                        if (Auth0Client.isAuthenticated()) {
                            return <SipocDetail {...props} sipocId={parseInt(props.match.params.sipocId)} />;
                        } else {
                            Auth0Client.signIn();
                            return null;
                        }
                    }}
                />

                <Route
                    exact
                    path="/sipoc/new"
                    render={props => {
                        if (Auth0Client.isAuthenticated()) {
                            return <SipocForm {...props} sipocId={parseInt(props.match.params.sipocId)} />;
                        } else {
                            Auth0Client.signIn();
                            return null;
                        }
                    }}
                />

                <Route
                    exact
                    path="/sipoc/:sipocId(\d+)/edit"
                    render={props => {
                        if (Auth0Client.isAuthenticated()) {
                            return <SipocEditForm {...props} sipocId={parseInt(props.match.params.sipocId)} />;
                        } else {
                            Auth0Client.signIn();
                            return null;
                        }
                    }}
                />

                <Route
                    exact
                    path="/supplier/new"
                    render={props => {
                        if (Auth0Client.isAuthenticated()) {
                            return <SupplierForm {...props}  />;
                        } else {
                            Auth0Client.signIn();
                            return null;
                        }
                    }}
                />
                <Route exact path="/callback" component={Callback} />


            </React.Fragment>



            //             <Route
            //                 exact
            //                 path="/animals"
            //                 render={props => {
            //                     if (Auth0Client.isAuthenticated()) {
            //                         return <AnimalList {...props} animals={this.state.animals} />;
            //                     } else {
            //                         Auth0Client.signIn();
            //                         return null;
            //                     }
            //                 }}
            //             />

            //             <Route exact path="/animals/:animalId(\d+)" render={(props) => {
            //                 // Pass the animalId to the AnimalDetail Component
            //                 return this.isAuthenticated() ? <AnimalDetail {...props} animalId={parseInt(props.match.params.animalId)} /> : <Redirect to="/login" />
            //             }} />

            //             <Route exact path="/animals/new" render={(props) => {
            //                 return this.isAuthenticated() ? <AnimalForm {...props} /> : <Redirect to="/login" />
            //             }} />

            //             <Route
            //                 path="/animals/:animalId(\d+)/edit" render={props => {
            //                     return <AnimalEditForm {...props} />
            //                 }}
            //             />




            //             <Route exact path="/locations" render={(props) => {
            //                 return this.isAuthenticated() ? <LocationList {...props} /> : <Redirect to="/login" />
            //             }} />
            //             <Route exact path="/locations/:locationId(\d+)" render={(props) => {
            //                 // Pass the locationId to the LocationDetail Component
            //                 return this.isAuthenticated() ? <LocationDetail {...props} locationId={parseInt(props.match.params.locationId)} /> : <Redirect to="/login" />
            //             }} />
            //             <Route
            //                 path="/locations/:locationId(\d+)/edit" render={props => {
            //                     return <LocationEditForm {...props} />
            //                 }}
            //             />



            //             <Route exact path="/locations/new" render={(props) => {
            //                 return this.isAuthenticated() ? <LocationForm {...props} /> : <Redirect to="/login" />
            //             }} />
            //             {/* <Route exact path="/locations/:locationsId(\d+)" render={(props) => {
            //                 return <EmployeeWithLocations {...props} />
            //             }} /> */}




            //             <Route exact path="/employees" render={(props) => {
            //                 return this.isAuthenticated() ? <EmployeeList {...props} /> : <Redirect to="/login" />
            //             }} />

            //             <Route path="/employees/new" render={(props) => {
            //                 return this.isAuthenticated() ? <EmployeeForm {...props} /> : <Redirect to="/login" />
            //             }} />

            //             <Route path="/employees/:employeeId(\d+)/edit" render={props => {
            //                 return <EmployeeEditForm {...props} />
            //             }}
            //             />
            //             <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
            //                 return <LocationWithEmployee {...props} />
            //             }} />






            //             <Route exact path="/owners" render={(props) => {
            //                 return this.isAuthenticated() ? <OwnerList {...props} /> : <Redirect to="/login" />
            //             }} />

            //             <Route exact path="/owners/new" render={(props) => {
            //                 return this.isAuthenticated() ? <OwnerForm {...props} /> : <Redirect to="/login" />
            //             }} />
            //             <Route
            //                 path="/owners/:ownerId(\d+)/edit" render={props => {
            //                     return <OwnerEditForm {...props} />
            //                 }}
            //             />



            //             <Route exact path="/callback" component={Callback} />




            //             <Route path="/login" component={Login} />
            //         </React.Fragment>
        )
    }
}

export default ApplicationViews

