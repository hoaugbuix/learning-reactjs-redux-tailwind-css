import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn";

const AuthRoute = () => {

    return (
        <Routes>
            <Route path="/login" element={<SignIn />} />
        </Routes>
    )
};

export default AuthRoute;