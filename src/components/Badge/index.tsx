import React from "react";

interface Props {
    type?: string;
    children: JSX.Element;
    onClick?: () => void;
}

const Badge: React.FC<Props> = (props: Props) => {
    const { children } = props;
    return (
        <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded-full" >
            {children}
        </span >
    )
};

export default Badge;