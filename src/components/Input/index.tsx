import React from "react";


interface Props {
    onInputChange: (newInput: string | any) => void;
    value: string;
    type?: string;
    placeholder: string;
}

const Input: React.FC<Props> = ({ value, onInputChange, type = 'string', placeholder }: Props) => {
    return (
        <>
            <input
                defaultValue={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e.target.value)}
                placeholder={placeholder}
                type={type}
            />
        </>
    )
};

export default Input;