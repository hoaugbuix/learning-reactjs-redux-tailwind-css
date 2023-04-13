import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <>
            <h4>Dashboard</h4>
            <Outlet />
        </>
    )
};

export default DashboardLayout;