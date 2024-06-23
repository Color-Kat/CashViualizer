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
            for (let i = 0; i < count; i++) {
                const randomRotation = Math.random() * 4 - 2; // Случайное вращение от -2 до 2 градусов
                const randomX = Math.random() * 10 - 5; // Случайное смещение по X от -5 до 5 пикселей
                const randomY = Math.random() * 10 - 5; // Случайное смещение по Y от -5 до 5 пикселей

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
                ctx.drawImage(image, -150, -75, 500, 90); // Отображаем изображение купюры

                ctx.restore();
            }

            ctx.fillStyle = 'rgba(37,162,57,0.1)';
            ctx.font = "bold 16px Inter";
            ctx.fillText("CashVisualizer By @ColorKat", 5, canvas.height-5);
            ctx.save();
        };
    }, [banknote, count]);

    return <canvas ref={canvasRef} width={500} height={count*0.7 + 300} />;
};