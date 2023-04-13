import React from "react";
import "./styles.scss";


const AuthSignIn = () => {

    return (
        <>
            <div className="auth__wrapper">
                <form className="auth__form">
                    <div className="auth__form-group">
                        <input type="text" placeholder="Email or Username" />
                    </div>
                </form>
            </div>
        </>
    )
};
export default AuthSignIn;