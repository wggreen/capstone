import React from "react"
import { Route } from "react-router-dom"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

export default () => (
    <>
        <Route render={props => <NavBar {...props} />} />
        <Route render={props => <ApplicationViews {...props} />} />
    </>
)