import React, {memo} from 'react';
import {FaAngleRight} from "react-icons/fa";
import {twMerge} from "tailwind-merge";
import { ILinkProps } from "@/UI/Links/types";
import Link from "next/link";

export const FilledArrowLink: React.FC<ILinkProps> = memo(({
                                                          children,
                                                          to,
                                                          className,
                                                          ...props
                                                      }) => {
        return (
            <Link
                href={to}
                className={twMerge(
                    "flex items-center justify-center gap-1 py-2 px-4 text-white font-medium bg-app-accent duration-150 hover:bg-app-primary active:bg-gray-900 rounded-full md:inline-flex text-lg",
                    className
                )}
                {...props}
            >
                {children}
                <FaAngleRight/>
            </Link>
        );
});