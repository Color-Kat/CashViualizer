import React, {memo} from 'react';
import {twMerge} from "tailwind-merge";
import Link from "next/link";
import { ILinkProps } from "@/UI/Links/types";

export const SecondaryTextLink: React.FC<ILinkProps> = memo(({
                                                        children,
                                                        to,
                                                        className,
                                                        ...props
                                                    }) => {

    return (
        <Link
            href={to}
            className={twMerge(
                "text-indigo-600 hover:text-indigo-500 hover:underline py-2 px-4 font-medium duration-150",
                className
            )}
            {...props}
        >
            {children}
        </Link>
    );
});