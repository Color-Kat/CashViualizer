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
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if(!canvas || !ctx) return;
        //
        const image = new Image();
        image.src = banknote.image.src as string;
        console.log(image);
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

                ctx.setTransform(
                    1, // Horizontal scale
                    -0.1, // Vertical skew
                    -0.5, // Horizontal skew
                    1, // Vertical scale
                    250 + randomX, // translateX
                    150 + count*0.7 + randomY - i*0.7 // translateY
                );
                // ctx.translate(250 + randomX, 250 + randomY - i*0.5); // Перемещаем к центру холста
                ctx.rotate((randomRotation * Math.PI) / 180 + 0.33);
                ctx.drawImage(image, -150, -75, 500, 100); // Отображаем изображение купюры

                ctx.restore();
            }
        };
    }, [banknote, count]);

    return <canvas ref={canvasRef} width={700} height={count*0.7 + 300} />;
};