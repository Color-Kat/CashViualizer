import React, { useCallback } from 'react';
import { twMerge } from "tailwind-merge";
import { SimpleInputProps } from "@/components/Inputs/Input/types";

// Maskable input https://github.com/Color-Kat/victory-park-order/blob/master/resources/js/UI/Form/Input.tsx

export const SimpleInput: React.FC<SimpleInputProps> = ({
    data,
    setData,
    name,

    onChange,

    isError,

    className,
    ...props
}) => {


    const changeHandler = onChange
        ? onChange
        : useCallback(
            (e: any) => setData((prev: any) => ({
                ...prev,
                [name]: e.target.value
            })),
            []
        );

    return (
        <input
            {...props}

            id={props.id ?? name}
            name={name}
            value={data[name]}
            onChange={changeHandler}

            className={twMerge(
                "w-full border border-gray-300 block p-2.5",
                "focus:outline-none focus:ring-2 focus:ring-app-accent/50",
                "bg-white/70 backdrop-blur-sm text-gray-900 text-xl rounded-2xl shadow-md",
                "placeholder-gray-400",

                isError && "border-red-500 shadow-red-300 shadow-sm",
                className
            )}
        />
    );
}