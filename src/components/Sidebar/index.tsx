import React from "react";
import "./styles.css";


const Sidebar = () => {
    return (
        <>
            <section className="sidebar">
                <div className="sidebar__brand">
                    <span>Admin</span>
                </div>
                <ul className="sidebar__menu">
                    <li className="active">
                        <a href="_">
                            <i className="icon">{'<A>'}</i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="_">
                            <i className="icon">{'<A>'}</i>
                            <span>Dashboard</span>
                        </a>
                    </li>

                </ul>
            </section>
        </>
    )
};

export default Sidebar;