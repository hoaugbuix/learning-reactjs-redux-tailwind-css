import React from "react";
import "./styles.scss";
import { Outlet } from "react-router-dom";
import UiSidebar from "../../components/UiDashboard/UiSidebar";
import UiNavbar from "../../components/UiDashboard/UiNavbar";

const DashboardLayout = () => {
    return (
        <>
            <div className="dashboard__layout">
                <UiSidebar />
                <div className="dashoard__layout-content">
                    <UiNavbar />
                    <main className="dashboard__layout-main">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
};

export default DashboardLayout;