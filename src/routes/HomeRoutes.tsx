import { Routes, Route } from "react-router-dom";
import HomePages from "../pages/HomePages";
import AuthenticatedGuard from "../guards/AuthenticatedGuard";

const HomeRoutes = () => {

    return (
        <Routes>
            {/* <Route path="/" element={<HomePages />} /> */}
            <Route path="/"
                element={
                    <AuthenticatedGuard
                        component={() => <HomePages />}
                    />
                }
            />
        </Routes>
    )
};

export default HomeRoutes;