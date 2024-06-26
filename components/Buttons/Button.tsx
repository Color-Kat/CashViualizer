import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import { StandardButton } from "@/UI/Buttons";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    ButtonComponent?: any;
}

export const Button: React.FC<ButtonProps> = ({
                                                  children,
                                                  ButtonComponent = StandardButton,
                                                  ...props
                                              }) => {
    return (
        <ButtonComponent
            {...props}
        >
            {children}
        </ButtonComponent>
    );
}