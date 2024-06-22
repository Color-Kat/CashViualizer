import React, { memo } from "react";

import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import { FilledArrowLink } from "@/UI/Links";

import millionIllustration from "@/public/million.png";
import { H1 } from "@/UI/Typography";

import { Roboto } from 'next/font/google'
import { Section } from "@/UI/Section/Section";

const roboto = Roboto({
    weight: ['400', '500', '700', '900'],
    subsets: ['cyrillic'],
})

export const Viualizer: React.FC = memo(({}) => {
    return (
        <Section className="md:mt-16 md:mb-10 sm:my-20 mt-8 mb-16 ">
            12
        </Section>
    );
});