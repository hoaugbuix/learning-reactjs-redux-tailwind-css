import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
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
        <BrowserRouter>
            <Routes>
                <Route path='' element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <ViewHomePage />
                    </Suspense>
                }
                />
                <Route path='*' element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <ViewNotFound />
                    </Suspense>
                }
                />
                <Route path="">
                    <Route path='sign-in' element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <ViewSignIn />
                        </Suspense>
                    }
                    />
                    <Route path='sign-up' element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <ViewSignUp />
                        </Suspense>
                    }
                    />
                </Route>

                <Route path="dashboard" element={<DashboardLayout />}>
                    <Route path='lang' element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <ViewLang />
                        </Suspense>
                    }
                    />
                    <Route path='category' element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <ViewCategory />
                        </Suspense>
                    }
                    />
                </Route>

            </Routes>
        </BrowserRouter>
    )
};

export default AppRoutes;