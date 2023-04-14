import React from "react";
import "./styles.scss";
import { Outlet } from "react-router-dom";
import UiNavbar from "../../components/UiNavbar";
import UiSidebar from "../../components/UiSidebar";

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