import React, { useEffect } from "react";
import { UserSignIn } from "../../@types/user";
import requestUtils from "../../utils/requestUtils";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import { useForm } from "react-hook-form";




const SignIn = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<UserSignIn>()
    const navigate = useNavigate()

    // const [user, setUser] = useState<UserSignIn>({
    //     usernameOrEmail: '',
    //     password: ''
    // });

    // const handleChangeInput = (field: string) => {
    //     return (e: React.ChangeEvent<HTMLInputElement>) => {
    //         setUser((prev: UserSignIn) => ({
    //             ...prev,
    //             [field]: e.target.value
    //         }));
    //     };
    // }

    const submitSignIn = (data: UserSignIn) => {
        // if (data.rememberMe) {
        //     localStorage.setItem("username", data.usernameOrEmail);
        //     localStorage.setItem("password", data.password);
        // }
        requestUtils.post('/user/login', { ...data })
            .then(res => {
                console.log(res.data.data)
                navigate("/")
                localStorage.setItem('user', res.data.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");
        if (storedUsername && storedPassword) {
            setValue("usernameOrEmail", storedUsername);
            setValue("password", storedPassword);
            // setValue("rememberMe", true)
        }
    })

    return (
        <>
            <div className="auth__wrapper">
                <div className="auth__group">
                    <h4>Login Form</h4>
                    <form className="form__group" onSubmit={handleSubmit(submitSignIn)}>
                        {errors.usernameOrEmail && <p style={{ color: 'red' }}>Please check Username Or Email</p>}
                        <div className="form__group-field">
                            <input type="text" className="form__group-filed-input" placeholder="Enter Username Or Email"
                                {...register("usernameOrEmail", { required: "Username or email is required" })}
                            />
                        </div>
                        {errors.password && <p style={{ color: 'red' }}>Please check Password</p>}
                        <div className="form__group-field">
                            <input type="password" className="form__group-filed-input" placeholder="Enter Password"
                                {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })} />
                        </div>
                        <div className="form__group-field">
                            <label>
                                <input type="checkbox" {...register("rememberMe")} />
                                Remember me
                            </label>
                        </div>
                        <div className="form__group-field">
                            <button className="form__group-filed-button" type="submit">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};

export default SignIn;