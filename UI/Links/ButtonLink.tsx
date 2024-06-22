import React, {memo} from 'react';
import {twMerge} from "tailwind-merge";
import Link from "next/link";
import { ILinkProps } from "@/UI/Links/types";

export const ButtonLink: React.FC<ILinkProps> = memo(({
                                                        children,
                                                        to,
                                                        className,
                                                        ...props
                                                    }) => {

    return (
        <Link
            href={to}
            className={twMerge(
                "inline-block py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none duration-150",
                className
            )}
            {...props}
        >
            {children}
        </Link>
    );
});