import React, {ReactNode} from "react";

export interface ILinkProps extends Omit<any, 'to'>{
    children: ReactNode;
    to: string;
    className?: string;
}