import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import { StandardButton } from "@/UI/Buttons";
import { Loader } from "@/UI/Loaders";

interface LoadingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    ButtonComponent?: any;
    isLoading?: boolean;
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({
                                                  children,
                                                  ButtonComponent = StandardButton,
                                                  isLoading = false,
                                                  ...props
                                              }) => {

    if(isLoading) {
        props.className += ' pointer-events-none'
        props.disabled = true;
    }

    // props.className += ' relative';

    return (
        <ButtonComponent
            {...props}
        >
            {isLoading && <><Loader />Загрузка</>}
            {!isLoading && children}
        </ButtonComponent>
    );
}