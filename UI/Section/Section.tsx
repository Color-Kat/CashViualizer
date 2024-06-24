import React, {ReactNode} from "react";
import { twJoin, twMerge } from "tailwind-merge";

export const Section: React.FC<{
    className?: string,
    children: ReactNode
}>
    = React.memo(({children, className = ""}) => {
    return (
        <div className={twMerge(
            "md:p-7 p-5 rounded-3xl text-gray-600",
            // "bg-lime-50/80",
            "bg-gradient-to-br from-lime-50/90 to-lime-200/50",
            "shadow-2xl shadow-lime-900/30",
            className
        )}>
            {children}
        </div>
    );
});