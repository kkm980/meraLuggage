import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { assets } from '@/constants/assets';

gsap.registerPlugin(ScrollTrigger);

const LuggageAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const luggageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const luggage = luggageRef.current;

    if (!container || !luggage) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top center',
        end: 'center center',
        scrub: 1,
        markers: false,
      },
    });

    tl.fromTo(
      luggage,
      {
        x: '12%',
        y: '0%',
        rotate: -5,
      },
      {
        x: '-60vw',
        y: '120%',
        rotate: 360,
        ease: 'power1.inOut',
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[80vh] w-full overflow-hidden bg-transparent"
    >
         <Image src={assets?.room} alt="luggage" width={600} height={600} className='absolute bottom-0 left-[0px]' />
      <div
        ref={luggageRef}
        className="absolute right-0 top-0 p-4"
      >
        <div className="">
            <Image src={assets?.trolley} alt="trolley" width={120} height={120} />
        </div>
      </div>

      {/* Travel path indicator */}
      
    </div>
  );
};

export default LuggageAnimation;
