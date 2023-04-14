import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import * as IconName from "react-icons/io5";


const UiSidebar = () => {

    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <span>Admin</span>
            </div>
            <div className="sidebar__content">
                <div className="sidebar__content-list">
                    <div className="sidebar__content-list-item">
                        <Link to={`lang`} className="sidebar__content-list-item-link">
                            <IconName.IoAppsSharp />
                            <span>Home</span>
                        </Link>
                    </div>
                    <div className="sidebar__content-list-item">
                        <span>Home</span>
                    </div>
                    <div className="sidebar__content-list-item">
                        <span>Home</span>
                    </div>
                    <div className="sidebar__content-list-item">
                        <span>Home</span>
                    </div>
                    <div className="sidebar__content-list-item">
                        <span>Home</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UiSidebar;