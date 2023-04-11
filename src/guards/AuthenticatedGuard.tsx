import { FunctionComponent } from 'react';
import { Navigate } from 'react-router-dom';
import { getCookie } from '../utils/cookies';

export type AppRoutesType = {
    component: FunctionComponent;
    isPublic?: boolean;
};

const AuthenticationGuard: React.FC<AppRoutesType> = ({ component: Component, isPublic = false, ...rest }) => {

    const isAuth = getCookie('JWT_TOKEN');

    return (!isAuth ? <Navigate to={isPublic ? "/" : "/login"} /> : <Component {...rest} />);
}

export default AuthenticationGuard;