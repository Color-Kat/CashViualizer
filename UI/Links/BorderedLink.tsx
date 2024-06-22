import React, {memo} from 'react';
import {twMerge} from "tailwind-merge";
import { ILinkProps } from "@/UI/Links/types";
import Link from "next/link";

export const BorderedLink: React.FC<ILinkProps> = memo(({
                                                        children,
                                                        to,
                                                        className,
                                                        ...props
                                                    }) => {

    return (
        <Link
            href={to}
            className={twMerge(
                "inline-block py-2 px-4 text-gray-800 font-medium duration-150 border hover:bg-gray-50 active:bg-gray-100 rounded-lg",
                className
            )}
            {...props}
        >
            {children}
        </Link>
    );
});