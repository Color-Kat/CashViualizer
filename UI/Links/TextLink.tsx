import React, {memo} from 'react';
import {twMerge} from "tailwind-merge";
import { ILinkProps } from "@/UI/Links/types";
import Link from "next/link";

export const TextLink: React.FC<ILinkProps> = memo(({
                                                        children,
                                                        to,
                                                        className,
                                                        ...props
                                                    }) => {

    return (
        <Link
            href={to}
            className={twMerge(
                "text-gray-500 hover:text-gray-800 py-2 px-4 font-medium duration-150",
                className
            )}
            {...props}
        >
            {children}
        </Link>
    );
});