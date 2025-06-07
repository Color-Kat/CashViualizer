'use client';

import {useEffect} from "react";

// Insert ad to yandex RTB blocks
export function useYaRTB(id: number) {
    useEffect(() => {
        (window as any).yaContextCb.push(()=>{
            // @ts-ignore
            Ya.Context.AdvManager.render({
                renderTo: 'yandex_rtb_R-A-9640825-' + id,
                blockId: 'R-A-9640825-' + id
            });
        });
    }, []);
}

export function useYaRTBFeed(id: number) {
    useEffect(() => {
        (window as any).yaContextCb.push(() => {
            // @ts-ignore
            Ya.Context.AdvManager.render({
                "blockId": "R-A-9640825-"  + id,
                "renderTo": "yandex_rtb_R-A-9640825-"  + id,
                "type": "feed"
            })
        })
    }, []);
}