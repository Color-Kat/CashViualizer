import React, {memo} from 'react';
import {FaAngleRight} from "react-icons/fa";
import {twMerge} from "tailwind-merge";
import { ILinkProps } from "@/UI/Links/types";
import Link from "next/link";

export const TextArrowLink: React.FC<ILinkProps> = memo(({
                                                        children,
                                                        to,
                                                        className,
                                                        ...props
                                                    }) => {

    return (
        <Link
            href={to}
            className={twMerge(
                "flex items-center justify-center gap-x-1 py-2 px-4 text-gray-700 hover:text-gray-900 font-medium duration-150 md:inline-flex",
                className
            )}
            {...props}
        >
            {children}
            <FaAngleRight/>
        </Link>
    );
});