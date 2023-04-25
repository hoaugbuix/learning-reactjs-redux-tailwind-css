import React from "react";
import "./styles.scss";

const UiFooter = () => {
    return (
        <>
            <footer className="footer__wrap">
                <span>@Coppy Right {new Date().getFullYear()}</span>
            </footer>
        </>
    )
};

export default UiFooter;