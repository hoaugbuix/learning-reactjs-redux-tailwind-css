import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthRoute from "./AuthRoutes";
import BlogRoutes from "./BlogRoutes";
import HomeRoutes from "./HomeRoutes";

const RouteApp = () => {

    return (
        <BrowserRouter>
            <HomeRoutes />
            <AuthRoute />
            <BlogRoutes />
        </BrowserRouter>
    )
};

export default RouteApp;