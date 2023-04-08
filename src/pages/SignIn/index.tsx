import React, { useEffect, useState } from "react";
import { UserSignIn } from "../../@types/user";
import requestUtils from "../../utils/requestUtils";

const SignIn = () => {

    const [user, setUser] = useState<UserSignIn>({
        usernameOrEmail: '',
        password: ''
    });

    const handleChangeInput = (field: string) => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            setUser((prev: UserSignIn) => ({
                ...prev,
                [field]: e.target.value
            }));
        };
    }

    const handleSubmit = () => {
        requestUtils.post('/user/login', user)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    const getAll = () => {
        requestUtils.get('/role/findAll').then(res => {
            console.log(res.data)
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        getAll();
    }, [])

    return (
        <>
            <div className="auth__wrapper">
                <h4>Login Form</h4>
                <form className="form__group" onSubmit={handleSubmit}>
                    <div className="form__group-field">
                        <input type="text" className="form__group-filed-input" placeholder="Enter Username Or Email" value={user?.usernameOrEmail} onChange={handleChangeInput('usernameOrEmail')} />
                    </div>
                    <div className="form__group-field">
                        <input type="password" className="form__group-filed-input" placeholder="Enter Password" value={user?.password} onChange={handleChangeInput('password')} />
                    </div>
                    <div className="form__group-field">
                        <button className="form__group-filed-button">Sign In</button>
                    </div>
                </form>
            </div>

        </>
    )
};

export default SignIn;