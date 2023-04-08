import React, { useEffect } from "react";
import "./styles.css";

const ScrollLoading = () => {
    const onScroll = () => {
        let pixelsFromTop = window.scrollY;
        let documentHeight = document.body.clientHeight;
        let windowHeight = window.innerHeight;
        let difference = documentHeight - windowHeight;
        let percentage = (100 * pixelsFromTop) / difference;
        document.getElementById("bar")!.style.width = `${percentage}%`;
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    });

    return (
        <>
            <div className="progress_wrapper">
                <div className="progress_bar" id="bar"></div>
            </div>
        </>
    )
};

export default ScrollLoading;