import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assets } from '@/constants/assets';

gsap.registerPlugin(ScrollTrigger);

const ScrollVideo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top', // Adjust the start point of the scroll trigger
        end: 'bottom center', // Adjust the end point of the scroll trigger
        pin: true,
        scrub: 1,
      },
    });

    // Animate video to occupy full screen slowly
    tl.to(video, {
      width: '100vw',
      height: '100vh',
      opacity: 1,
      duration: 5, // Slow down the transition
      ease: 'power2.inOut', // Smooth easing for the expansion
    });

    // Keep video static after scroll
    tl.to(
      video,
      {
        position: 'static',
        duration: 1,
        ease: 'none',
      },
      '+=2.5'
    );

    tl.to(
      container,
      {
        position: 'static',
        duration: 1,
        ease: 'power2.inOut',
      },
      '+=2.5'
    );

    return () => {
      tl.kill();
    };
  }, []);

  const toggleMute = () => {
    if (videoRef?.current) {
      videoRef.current.muted = !videoRef.current?.muted;
    }
  };

  return (
    <div className="bg-transparent text-white absolute left-0 top-0 overflow-hidden">
      <div
        ref={containerRef}
        className="bg-transparent h-[2250px] w-[100vw] top-[80px] overflow-hidden"
      >
        <div className="bg-transparent inset-0 flex items-start justify-center overflow-hidden">
          <video
            ref={videoRef}
            className="w-[125px] h-[60px] object-cover rounded-lg transform-gpu bg-transparent z-2"
            autoPlay
            muted
            loop
            playsInline
            style={{ opacity: 0.05 }} // Initial opacity set to 0.05
            onClick={toggleMute} // Add onClick handler
          >
            <source src={assets.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default ScrollVideo;
