"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { config } from "@/constants/config";

export default function Logo() {
    const luggageRef = useRef(null);

    useEffect(() => {
        // Animation for the luggage icon moving from left to its final position
        gsap.fromTo(
            luggageRef.current,
            { x: 0, opacity: 0.7, rotation: 45 },  // Starting position with a slight tilt
            {
                x: 198,
                opacity: 1,
                rotation: 0,  // Final position aligned at 0 degrees
                duration: 5,
                ease: "power2.out"
            }
        );
    }, []);

    return (
        <div className="flex items-center mr-8 cursor-pointer">
            <span className="text-2xl font-bold bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-teal-400">
               {config?.logo?.name}
</span>


        </div>
    );
}
