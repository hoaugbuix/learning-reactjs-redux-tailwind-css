import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthenticatedGuard from "../guards/AuthenticatedGuard";
import Blog from "../pages/Blog";

const BlogRoutes = () => {

    return (
        <Routes>
            <Route
                path="/blog"
                element={
                    <AuthenticatedGuard
                        component={() => <Blog />}
                    />
                }
            />
        </Routes>
    )
};

export default BlogRoutes;