import React from "react";
import "./styles.scss";
import { NavLink } from "react-router-dom";

const UiHeader = () => {
    return (
        <header className="header__container">
            <div className="header__content">
                <div className="header__content-logo">
                    <span>Logo</span>
                </div>
                <div className="header__content-link">
                    <NavLink to={''}>
                        <span>Home</span>
                    </NavLink>
                </div>
            </div>
        </header>
    )
};

export default UiHeader;