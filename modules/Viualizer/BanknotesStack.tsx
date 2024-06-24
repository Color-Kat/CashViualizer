import React, { useEffect, useRef } from 'react';
import { AbstractBanknote } from "@/modules/Viualizer/Banknotes/AbstractBanknote";

export const BanknoteStack = ({
    banknote,
    count
}: {
    banknote: AbstractBanknote,
    count: number
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        // Create canvas context
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if(!canvas || !ctx) return;

        const image = new Image();
        image.src = (banknote.image as any).src as string;

        image.onload = () => {
            // ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < Math.min(count, 100); i++) {
                const randomRotation = Math.random() * 4 - 2; // Random rotation from -2 to 2 deg
                const randomX = Math.random() * 10 - 5; // Random X translation from -5 to 5 px
                const randomY = Math.random() * 10 - 5; // Random Y translation from -5 to 5 px

                ctx.save();

                // Shadow
                ctx.shadowColor = "rgba(0, 0, 0, 0.07)";
                ctx.shadowBlur = 6;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 6;

                ctx.strokeStyle = 'transparent';
                ctx.strokeRect(-150, -75, 450, 120);

                // ctx.translate(250 + randomX, 250 + randomY - i*0.5); // Перемещаем к центру холста
                ctx.setTransform(
                    1, // Horizontal scale
                    -0.078, // Vertical skew
                    -0.8, // Horizontal skew
                    1, // Vertical scale
                    150 + randomX, // translateX
                    150 + count*0.7 + randomY - i*0.7 // translateY
                );
                ctx.rotate((randomRotation * Math.PI) / 180 + 0.32);
                ctx.drawImage(image, -150, -75, 500, 90); // Draw banknote

                ctx.restore();
            }

            // Add wad money multiplier
            ctx.fillStyle = '#16a12f';
            ctx.font = 'bold 75px Verdana'
            ctx.fillText(`X${(count/100).toFixed(1)}`, 1, canvas.height-80);

            // Watermark
            ctx.fillStyle = 'rgba(37,162,57,0.1)';
            ctx.font = "bold 16px Inter";
            ctx.fillText("CashVisualizer By @ColorKat", 5, canvas.height-5);

            ctx.save();
        };
    }, [banknote, count]);

    return <canvas ref={canvasRef} width={500} height={count*0.7 + 300} />;
};