import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthRoute from "./auth";

const RouteApp = () => {

    return (
        <BrowserRouter>
            <AuthRoute />
        </BrowserRouter>
    )
};

export default RouteApp;