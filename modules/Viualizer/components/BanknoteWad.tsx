import React, { useEffect, useRef } from 'react';
import { WadOfMoney } from "@/modules/Viualizer/Money/WadOfMoney";

export enum ViewModeEnum {
    OneWad = 'one-wad',
    Block = 'block'
}

export const BanknoteWad = ({
    wad,
    viewMode = ViewModeEnum.OneWad,
    scale = 1,
    background = null,
    blockSize = { cols: 2, rows: 2 },
}: {
    wad: WadOfMoney,
    viewMode: ViewModeEnum,
    scale?: number,
    background?: string | null,
    blockSize?: { cols: number, rows: number },
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const banknote = wad.banknote;

    // One wad view mode
    let count, wadsCount;
    if (viewMode === ViewModeEnum.OneWad) {
        blockSize = { cols: 1, rows: 1 };
        count = Math.min(wad.count, 100);
        wadsCount = 1;
    } else {
        count = wad.count;
        wadsCount = wad.wadsCount;
    }

    const colsCount = blockSize.cols;
    const rowsCount = blockSize.rows;
    const wadsPerFloor = colsCount * rowsCount;
    const floorsCount = Math.floor(wadsCount / wadsPerFloor) + 1;

    // Get banknote size
    // Wad size depends on image scaling
    const width = 500 / 157 * banknote.realWidth * scale;
    const height = 90 / 69 * banknote.realHeight * scale;
    const thickness = 0.7 / 0.125 * banknote.realThickness * scale;

    const draw = async () => {
        // Create canvas context
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        // Draw a wad
        const image = new Image();
        image.src = (banknote.image as any).src;
        image.onload = async () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw background
            if (background) {
                const result = await new Promise(resolve => {
                    const texture = new Image();
                    texture.src = background;

                    texture.onload = () => {
                        ctx.drawImage(texture, 0, 0, canvas.width, canvas.height);
                        ctx.save();
                        resolve(true);
                    }

                    texture.onerror = () => resolve(false);
                });

                if (!result) ctx.clearRect(0, 0, canvas.width, canvas.height);
            }

            for (let i = 0; i < count; i++) {
                const randomRotation = Math.random() * 4 - 2; // Random rotation from -2 to 2 deg
                const randomX = Math.random() * 10 - 5;       // Random X translation from -5 to 5 px
                const randomY = Math.random() * 10 - 5;       // Random Y translation from -5 to 5 px

                // Wad position in a money block
                let currentWadNumber = Math.floor(i / 100);                                 // Increase by 1 every 100 banknotes
                let currentFloor = Math.floor(currentWadNumber / wadsPerFloor);             // Current block floor
                let currentCol = (currentWadNumber % wadsPerFloor) % colsCount;               // Current block column
                let currentRow = Math.floor((currentWadNumber % wadsPerFloor) / colsCount); // Current block row

                // Shadow
                if (i > 0 || count <= 10) {
                    ctx.shadowColor = "rgba(0, 0, 0, 0.07)";
                    ctx.shadowBlur = 6 * scale;
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 6 * scale ;
                } else if (count > 10) {
                    // Shadow for a big wad
                    ctx.shadowColor = "rgba(0, 0, 0, 0.07)";
                    ctx.shadowBlur = 15 * scale ;
                    ctx.shadowOffsetX = -23 * scale ;
                    ctx.shadowOffsetY = 20 * scale ;
                }

                let translateX, translateY;

                // Calculate the base position of the first wad depending on the block size
                const startPositionX = 120 * rowsCount + 25;
                const startPositionY = -count * thickness + 120 * thickness * (floorsCount + 1) + 35;

                translateX =
                    startPositionX       // Base position of the first wad in the block
                    + 360 * (currentCol) // Col position of the wad
                    - 120 * (currentRow) // Row position of the wad
                    + randomX            // Random banknote translation
                ;
                translateY =
                    startPositionY                // Base position of the first wad in the block
                    + count * thickness           // Wad height
                    + randomY                     // Random banknote translation
                    - (i % 100) * thickness       // Banknote Y translation in every wad

                    + 125 * (currentCol)               // Col position
                    + 100 * (currentRow)               // Row position
                    - 117 * thickness * (currentFloor) // Floor position
                ;

                ctx.save();
                ctx.setTransform(
                    1, // Horizontal scale
                    -0.078, // Vertical skew
                    -0.8, // Horizontal skew
                    1, // Vertical scale
                    translateX * scale,
                    translateY * scale
                );
                ctx.rotate((randomRotation * Math.PI) / 180 + 0.32);
                ctx.drawImage(image, -150, -75, width, height); // Draw banknote

                // Wad number
                // if (viewMode == ViewModeEnum.Block && i % 100 === 99) {
                //     ctx.fillStyle = 'white';
                //     ctx.font = 'bold 75px Verdana'
                //     ctx.fillText(`${currentWadNumber+1}`, 25, 0);
                // }

                ctx.restore();
            }

            // Add wad money multiplier
            if (viewMode == ViewModeEnum.OneWad && wad.wadsCount > 1) {
                ctx.fillStyle = '#16a12f';
                ctx.font = 'bold 75px Verdana'
                ctx.fillText(`X${wad.wadsCount}`, 1, canvas.height - 80);
            }

            // Watermark
            ctx.fillStyle = 'rgba(37,162,57,0.1)';
            ctx.font = "bold 16px Inter";
            ctx.fillText("CashVisualizer By @ColorKat", 5, canvas.height - 5);

            ctx.save();
        };
    }

    // Rerender when parameters changed
    useEffect(() => {
        draw();
    }, [banknote, count, wadsCount, viewMode, scale, background, blockSize]);


    let canvasWidth =
        120 * rowsCount + 25
        + 365 * colsCount // Last Col position
    ;

    let canvasHeight =
        35 +
        +122 * colsCount // Last Col position
        + 100 * rowsCount // Last Row position
        + 120 * thickness * floorsCount // Floor position
    ;

    return <canvas
        ref={canvasRef}
        width={canvasWidth * scale }
        height={canvasHeight * scale }
    />;
};