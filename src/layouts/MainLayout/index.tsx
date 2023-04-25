import React, { ReactNode } from "react";
import "./styles.scss";
import UiHeader from "../../components/UiHeader";
import UiSidebarCate from "../../components/UiSidebarCate";
import UiFooter from "../../components/UiFooter";
// import UiHeader from "../../components/UiHeader";
// import UiSidebarCate from "../../components/UiSidebarCate";
// import UiFooter from "../../components/UiFooter";

interface Props {
    children: ReactNode
}

const MainLayout = ({ children }: Props) => {


    return (
        <>
            <div className="main-layout__wrap">
                <div className="main-layout">
                    <div className="main-layout__header">
                        <UiHeader />
                    </div>
                    <div className="main-layout__content">
                        <div className="main-layout__content-nav">
                            <UiSidebarCate />
                        </div>
                        <div className="main-layout__content-main">
                            <div className="main-layout__content-main-wrap">
                                {children}
                            </div>
                        </div>
                    </div>
                    <div className="main-layout__footer">
                        <UiFooter />
                    </div>
                </div>
            </div>
        </>
    )
};

export default MainLayout;