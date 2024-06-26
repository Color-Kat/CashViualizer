import React, { Fragment, useCallback, useId } from 'react';
import { Listbox, Transition } from "@headlessui/react";
import { HiChevronUpDown } from "react-icons/hi2";
import { BsCheck2 } from "react-icons/bs";
import { twJoin, twMerge } from "tailwind-merge";

interface SelectProps {
    data: { [key: string]: any };
    setData: React.Dispatch<React.SetStateAction<any>>;
    name: string;
    options: string[];

    label?: string;

    containerClassName?: string;
    buttonClassName?: string;
}

export const Select: React.FC<SelectProps> = ({
    data,
    setData,
    name,
    options,

    label,

    buttonClassName,
    containerClassName
}) => {
    const id = useId();

    const onChangeHandler = useCallback((value: string) => {
        setData((prev: any) => ({ ...prev, [name]: value }));
    }, [name]);

    return (
        <div
            className={twMerge(
                "w-56",
                containerClassName
            )}
        >
            {label && <label
                htmlFor={id}
                className="block text-lg font-medium text-gray-600 mb-1.5"
            >
                {label}
            </label>}

            <Listbox
                value={data[name]}
                onChange={onChangeHandler}
            >
                <div className="relative">

                    <Listbox.Button
                        className={twMerge(
                            "relative w-full cursor-default py-2.5 pl-3 pr-10 text-left z-0",
                            "border border-gray-300",
                            "focus:outline-none focus:ring-2 focus:ring-app-accent/50",
                            "rounded-2xl bg-white/70 shadow-md text-xl",
                            buttonClassName
                        )}
                    >
                        <span className="block truncate text-gray-900">{data[name]}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <HiChevronUpDown
                                className="h-5 w-5 text-app-primary" // text-gray-400
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>

                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >

                        <Listbox.Options
                            id={id}
                            className={twJoin(
                                "absolute mt-1 max-h-60 w-full overflow-auto ring-1 ring-black ring-opacity-5 focus:outline-none",
                                "rounded-lg bg-white/50 backdrop-blur-sm py-1 text-sm shadow-lg text-left",
                                "z-[1]"
                            )}
                        >
                            {options.map((option, i) => (
                                <Listbox.Option
                                    key={i}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active ? 'bg-lime-600/20 text-green-900' : 'text-gray-900'
                                        }`
                                    }
                                    value={option}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={twJoin(
                                                    "block truncate",
                                                    selected ? 'font-medium' : 'font-normal'
                                                )}
                                            >
                                                {option}
                                            </span>

                                            {selected ? (
                                                <span
                                                    className="text-app-primary absolute inset-y-0 left-0 flex items-center pl-3"
                                                >
                                                    <BsCheck2
                                                        className="h-5 w-5"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>

                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}