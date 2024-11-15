"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Luggage } from "lucide-react";

export default function Logo() {
    const luggageRef = useRef(null);

    useEffect(() => {
        // Animation for the luggage icon moving from left to its final position
        gsap.fromTo(
            luggageRef.current,
            { x: 0, opacity: 0.7, rotation: 45 },  // Starting position with a slight tilt
            {
                x: 190,
                opacity: 1,
                rotation: 0,  // Final position aligned at 0 degrees
                duration: 5,
                ease: "power2.out"
            }
        );
    }, []);

    return (
        <div className="flex items-center mr-8 cursor-pointer">
            <Luggage ref={luggageRef} className="h-8 w-8 text-textColor-light dark:text-textColor-dark" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-teal-400">
                MeraLuggage
            </span>

        </div>
    );
}
