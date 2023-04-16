import React, { useState } from "react";
import "./styles.scss";
import * as  IconName from "react-icons/io5";
import { useForm } from "react-hook-form";



const AuthSignIn = () => {
    const [showPass, setShowPass] = useState(false);
    const { register, handleSubmit } = useForm();

    const onSubmit = () => {

    }


    return (
        <>
            <div className="auth__wrapper">
                <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="auth__form-group">
                        <input type="text" className="auth__form-group-input" required {...register('usernameOrEmail')} />
                        <label className="auth__form-group-label">Username</label>
                    </div>
                    <div className="auth__form-group">
                        <input type={showPass ? 'text' : 'password'} className="auth__form-group-input" required {...register('password')} />
                        <label className="auth__form-group-label">Password</label>
                        <span onClick={() => setShowPass(!showPass)}>
                            {!showPass ? <IconName.IoEyeOff className="icon-show" /> : <IconName.IoEye className="icon-show" />}
                        </span>
                    </div>
                    <div className="auth__form-group">
                        <input type="submit" className="auth__form-group-input input-submit" required />
                    </div>
                </form>
            </div>
        </>
    )
};
export default AuthSignIn;