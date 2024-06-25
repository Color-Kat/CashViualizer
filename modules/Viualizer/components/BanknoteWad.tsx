import React, { useEffect, useRef } from 'react';
import { WadOfMoney } from "@/modules/Viualizer/Money/WadOfMoney";

export enum ViewModeEnum {
    Wad = 'wad',
    All = 'all',
    Block = 'block'
}

export const BanknoteWad = ({
    wad,
    viewMode = ViewModeEnum.Wad,
    scale = 1,
    background = null,
    wadSize = 100
}: {
    wad: WadOfMoney,
    viewMode: ViewModeEnum,
    scale?: number,
    background?: string | null,
    wadSize?: number
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const banknote = wad.banknote;
    const wadsCount = wad.wadsCount;

    // Divide plenty of banknotes into small wads
    let count = viewMode === ViewModeEnum.Wad ? Math.min(wad.count, 100) : wad.count;

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
            if(background) {
                const result = await new Promise(resolve =>  {
                    const texture = new Image();
                    texture.src = background;

                    texture.onload = () => {
                        ctx.drawImage(texture, 0, 0, canvas.width, canvas.height);
                        ctx.save();
                        resolve(true);
                    }

                    texture.onerror = () => resolve(false);
                });

                if(!result) ctx.clearRect(0, 0, canvas.width, canvas.height);
            }

            for (let i = 0; i < count; i++) {
                const randomRotation = Math.random() * 4 - 2; // Random rotation from -2 to 2 deg
                const randomX = Math.random() * 10 - 5; // Random X translation from -5 to 5 px
                const randomY = Math.random() * 10 - 5; // Random Y translation from -5 to 5 px

                // Wad size depends on image scaling
                const width = 500 / 157 * banknote.realWidth * scale;
                const height = 90 / 69 * banknote.realHeight * scale;
                const thickness = 0.7 / 0.125 * banknote.realThickness * scale;

                let bigWadLength = 2;
                let currentWadNumber = Math.max(Math.ceil(i / 100), 1) - 1;
                let currentFloor = Math.max(Math.ceil(currentWadNumber / (bigWadLength*bigWadLength)), 1) - 1;
                let currentCol = (currentWadNumber) % bigWadLength;
                let currentRow = Math.ceil(currentWadNumber / bigWadLength) % bigWadLength;
                console.log(`Wad number ${currentWadNumber}, floor ${currentFloor}, col ${currentCol}, row ${currentRow}`);

                // currentFloor = 0;
                // currentCol = 0;
                // currentRow = currentWadNumber % 2 == 0 ? 1 : 0;

                ctx.save();

                // Shadow
                if (i > 0 || count <= 10) {
                    ctx.shadowColor = "rgba(0, 0, 0, 0.07)";
                    ctx.shadowBlur = 6;
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 6;
                } else if (count > 10) {
                    ctx.shadowColor = "rgba(0, 0, 0, 0.07)";
                    ctx.shadowBlur = 15;
                    ctx.shadowOffsetX = -23;
                    ctx.shadowOffsetY = 20;
                }

                let translateX, translateY = 0;

                if(viewMode === ViewModeEnum.Block) {
                    translateX =
                        155 + (bigWadLength-1) * width + // Base position
                        randomX // Random banknote translation

                        // Next wad
                        + 115 * (currentCol) // Col position
                        - 340 * (currentRow) // Row position
                    ;
                    translateY =
                        150 + (bigWadLength) * height + // Base position
                        count * thickness +  // Wad height
                        randomY - i * thickness // Random banknote translation

                        // Next wad
                        - 170 * (currentCol) // Col position
                        - 195 * (currentRow)

                        + 15 *thickness*(currentFloor)
                    ;

                } else {
                    translateX =
                            (scale == 1 ? 155 : 130) * scale + // Base position
                            randomX // Random banknote translation
                    ;
                    translateY =
                            140 * scale + // Base position
                            count * thickness +  // Wad height
                            randomY - i * thickness // Random banknote translation
                    ;
                }

                // ctx.translate(250 + randomX, 250 + randomY - i*0.5); // Перемещаем к центру холста
                ctx.setTransform(
                    1, // Horizontal scale
                    -0.078, // Vertical skew
                    -0.8, // Horizontal skew
                    1, // Vertical scale
                    translateX,
                    translateY
                );
                ctx.rotate((randomRotation * Math.PI) / 180 + 0.32);
                ctx.drawImage(image, -150, -75, width, height); // Draw banknote

                ctx.restore();
            }

            // Add wad money multiplier
            if (viewMode == ViewModeEnum.Wad && wadsCount > 1) {
                ctx.fillStyle = '#16a12f';
                ctx.font = 'bold 75px Verdana'
                ctx.fillText(`X${wadsCount}`, 1, canvas.height - 80);
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
    }, [banknote, count, wadsCount, viewMode, scale, background]);

    return <canvas
        ref={canvasRef}
        width={500 * scale}
        height={(count * 0.7 + 300) * scale}
    />;
};