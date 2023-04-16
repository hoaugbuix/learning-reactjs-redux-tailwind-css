import React, { ReactNode } from "react";
import "./styles.scss";
import UiHeader from "../../components/UiHeader";
import UiSidebarCate from "../../components/UiSidebarCate";

interface Props {
    children: ReactNode
}

const MainLayout = ({ children }: Props) => {
    return (
        <>
            <div className="main__layout">
                {/* <header className="main__layout-header">
                    <UiHeader />
                </header>
                <aside className="main__layout-aside">
                    <UiSidebarCate />
                </aside> */}
                <main className="main__layout-main">
                    {children}
                </main>
                <footer className="main__layout-footer">
                    <span>@Coppy Right {new Date().getFullYear()}</span>
                </footer>
            </div>
        </>
    )
};

export default MainLayout;