import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
// import ViewSignIn from "../pages/Auth/AuthSignIn"
// import ViewSignUp from "../pages/Auth/AuthSignUp"
// import ViewHomePage from "../pages/Home"
const ViewHomePage = React.lazy(() => import("../pages/Home"));
const ViewNotFound = React.lazy(() => import("../pages/NotFound"));

// Auth
const ViewSignIn = React.lazy(() => import("../pages/Auth/AuthSignIn"));
const ViewSignUp = React.lazy(() => import("../pages/Auth/AuthSignUp"));

// Dashboard
const ViewLang = React.lazy(() => import("../pages/Dashboard/Lang"));
const ViewCategory = React.lazy(() => import("../pages/Dashboard/Category"));


const AppRoutes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>

                        <Route path='' element={

                            <ViewHomePage />

                        }
                        />
                        <Route path='*' element={

                            <ViewNotFound />

                        }
                        />
                        <Route path="">
                            <Route path='sign-in' element={

                                <ViewSignIn />

                            }
                            />
                            <Route path='sign-up' element={

                                <ViewSignUp />

                            }
                            />
                        </Route>

                        <Route path="dashboard" element={<DashboardLayout />}>
                            <Route path='lang' element={

                                <ViewLang />

                            }
                            />
                            <Route path='category' element={

                                <ViewCategory />

                            }
                            />
                        </Route>

                    </Routes>
                </Suspense>
            </BrowserRouter>
        </Suspense>
    )
};

export default AppRoutes;