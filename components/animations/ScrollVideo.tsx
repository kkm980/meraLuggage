import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assets } from '@/constants/assets';

gsap.registerPlugin(ScrollTrigger);

const ScrollVideo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    const target = targetRef.current;
    const inner = innerRef.current;

    if (!video || !container || !target || !inner) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=95%',
        pin: true,
        scrub: 1,
      },
    });

    // Padding animation
    tl.to(inner, {
      paddingRight: 0,
      duration: 0.2,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'center center+=10',
        end: 'center center+=20',
        scrub: 1,
      },
    })
    // Opacity animation for video
      .to(video, {
        opacity: 1, // Set to full opacity
        duration: 0.5, // Duration of opacity transition within timeline
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: container,
          start: 'center center',
          end: 'center center+=50%', // Scroll through 50% to reach full opacity
          scrub: 1,
        },
      })
      // Scale up video
      .to(video, {
        width: video.clientWidth * 3.5,
        height: video.clientHeight * 5.0,
        duration: 1,
        ease: 'power2.inOut',
      })
      // Position video
      .to(video, {
        x: window.innerWidth * 0.9,
        y: window.innerHeight * 0.2,
        duration: 1,
        ease: 'power2.inOut',
      });

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
    <div className="bg-transparent text-white absolute overflow-hidden">
      <div ref={containerRef} className="bg-transparent h-[450px] w-[100vw] top-[50px] absolute overflow-hidden">
        <div ref={innerRef} className="bg-transparent absolute inset-0 flex items-start justify-end pt-[0px] pr-[330px] overflow-hidden">
          <video
            ref={videoRef}
            className="w-[125px] h-[60px] mt-[20px] object-cover rounded-lg transform-gpu bg-transparent z-2 overflow-hidden"
            autoPlay
            muted
            loop
            playsInline
            style={{ opacity: 0.4 }} // Initial opacity set to 0.3
            onClick={toggleMute} // Add onClick handler
          >
            <source
              src={assets.video}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div ref={targetRef} className="bg-transparent min-h-[100vh] flex items-center justify-end p-8 overflow-hidden">
        <div className="bg-transparent w-[100vw] overflow-hidden"></div>
      </div>
    </div>
  );
};

export default ScrollVideo;
