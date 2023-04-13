import React, { ElementType } from 'react';
// import { Route, Navigate } from 'react-router-dom';

// interface Props<P = {}> {
//     element: ElementType<P>;
//     roles?: string[];
//     path?: string;
// }

// const AuthenticationGuard: React.FC<Props> = ({ element: Element, roles = undefined, ...rest }) => {
//     const setComponent = (props: any) => {
//         const isAuthGuardActive = true;
//         if (isAuthGuardActive) {
//             const currentUser = { role: 'user' };
//             if (currentUser) {
//                 if (roles) {
//                     if (roles.includes(currentUser.role)) {
//                         return <Element {...props} />;
//                     }
//                     return () => <Navigate to="/unauthorized" />;
//                 }
//                 return <Element {...props} />;
//             }
//             return () => <Navigate to="/user/login" />;
//         }
//         return <Element {...props} />;
//     };

//     return <Route {...rest} element={setComponent} />;
// };

// export default AuthenticationGuard;
