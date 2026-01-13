import React, {memo} from 'react';
import {twMerge} from "tailwind-merge";
import { ITypographyElement } from "@/UI/Typography/types";

export const H1: React.FC<ITypographyElement> = memo(({
                                                          children,
                                                          className,
                                                          ...props
                                                      }) => {

    return (
        <h1
            className={twMerge(
                className,
                "text-3xl/[1] sm:text-5xl text-zinc-700 font-extrabold",
            )}
            {...props}
        >
            {children}
        </h1>
    );
});