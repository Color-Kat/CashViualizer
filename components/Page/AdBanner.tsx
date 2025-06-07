'use client';

import React, {memo} from 'react';
import { useYaRTBFeed } from "@/hooks/useYaRTB";

interface AdBannerProps {
    yandexRTBId?: number,

    className?: string,
    showForGuests?: boolean
}

const AdBanner: React.FC<AdBannerProps> = ({
    yandexRTBId,

    className = '',
}) => {


    // Show Yandex RTB ad
    if(yandexRTBId !== undefined)
        useYaRTBFeed(yandexRTBId);

        return (
            <div
                id={"yandex_rtb_R-A-9640825-" + yandexRTBId}
                className={className}
            ></div>
        );
    }

    return null;
}

export default memo(AdBanner);