import React, { ReactNode } from "react";
import UiHeader from "../../components/UiHeader";

interface Props {
    children: ReactNode
}

const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <div>
                <UiHeader />
                <main>
                    {children}
                </main>
            </div>
        </>
    )
};

export default MainLayout;