import React from "react";
import "./styles.scss";
import { NavLink } from "react-router-dom";

const UiHeader = () => {
    return (
        <div className="header__container">
            <div className="header__content">
                <div className="header__content-logo">
                    <span>Logo</span>
                </div>
                <div className="header__content-nav">
                    <NavLink to={''} className="header__content-nav-link">
                        <span>Home</span>
                    </NavLink>
                    <NavLink to={''} className="header__content-nav-link">
                        <span>Home</span>
                    </NavLink>
                    <NavLink to={''} className="header__content-nav-link">
                        <span>Home</span>
                    </NavLink>
                    <NavLink to={''} className="header__content-nav-link">
                        <span>Home</span>
                    </NavLink>
                    <NavLink to={''} className="header__content-nav-link">
                        <span>Home</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
};

export default UiHeader;