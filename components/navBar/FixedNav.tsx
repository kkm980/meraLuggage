"use client";

import React, { useState, useEffect } from 'react';
import { navConstants } from "../../constants/navConstants.tsx";
import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "./logo";

/**
 * FixedNav Component
 * 
 * This component renders a fixed navigation bar that appears when the user scrolls up 
 * by a certain threshold and hides when the user scrolls down.
 * 
 * @returns {JSX.Element} The FixedNav component.
 */
const FixedNav: React.FC = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollThreshold = 15; // Define a threshold for the scroll up distance

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if ((lastScrollY - currentScrollY > scrollThreshold) && (window.scrollY > 100)) {
        // User has scrolled up by more than the threshold
        setShowNavBar(true);
      } else if ((currentScrollY > lastScrollY) || (window.scrollY <= 100)) {
        // User is scrolling down HERE
        setShowNavBar(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    showNavBar && (
      
      <div className={`w-[70%] max-w-[896px] h-[60px] bg-backgroundColor-light-foreground dark:bg-backgroundColor-dark-foreground shadow-[#034441] shadow-lg rounded-[60px] fixed top-[10px] z-[999] flex items-center`}>
       <div className="w-full flex items-center justify-between">
        <Logo />

        {/* Left Side Links */}
        <div className="flex-1">
          <div className="hidden md:flex items-center space-x-6 ml-6">
            {navConstants.left.map((item, index) => (
              <Link key={index} href={item.href} className="text-md font-semibold transition-colors text-textColor-light dark:text-textColor-dark">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side Components */}
        <div className="flex items-center justify-end mr-8 space-x-2">
          {navConstants.right.map((item, index) => {
            if (item.type === "button") {
              return (
                <Button key={index} variant={item.variant || "default"}>
                  {item.label}
                </Button>
              );
            } else if (item.type === "component") {
              return <div key={index}>{item.component}</div>;
            }
            return null;
          })}
        </div>
       </div>
      </div>
    )
  );
};

export default FixedNav;
