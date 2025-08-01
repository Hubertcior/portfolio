"use client"

import {motion, useCycle} from "framer-motion";
import {useEffect, ReactNode, FC} from "react";

interface AnimatedStatusBorderProps {
    children: ReactNode;
    status: "available" | "busy";
    duration?: number;
}

const AnimatedStatusBorder :FC<AnimatedStatusBorderProps> = ({children, duration=2, status}) => {

    const [direction, cycleDirection] = useCycle(1, -1);

    useEffect(() => {
        const interval = setInterval(() => {
            cycleDirection();
        }, duration * 1000);
        return () => clearInterval(interval);
    }, [cycleDirection, duration]);

    const lineWidth = "40%";

    return (
        <div className="relative w-fit">
            <div className="flex items-center gap-2">{children}</div>
            <div className="absolute left-0 right-0 top-full translate-y-px h-1 pointer-events-none overflow-hidden">
                <motion.div
                    className={`h-full rounded-full absolute ${status === "available" ? "bg-green-500" : "bg-red-500"}`}
                    style={{
                        width: lineWidth,
                        left: 0,
                        willChange: "transform",
                    }}
                    animate={{
                        x: direction === 1 ? "150%" : "0%",
                    }}
                    transition={{
                        x: {
                            duration,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse",
                        },
                    }}
                />
            </div>
        </div>
    );
}
export default AnimatedStatusBorder
