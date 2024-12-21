import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loader = () => {
  const logoRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    // Animate the individual letters
    timeline
      .fromTo(
        '.C',
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power4.out' }
      )
      .fromTo(
        '.T',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power4.out' },
        '-=0.8'
      )
      .to('.logo', {
        scale: 1.1,
        duration: 1.2,
        ease: 'elastic.out(1, 0.75)',
        onComplete: () => {
          // Fade out the logo after animations
          gsap.to('.logo', { opacity: 0, duration: 0.5, delay: 0.5 });
        },
      });

    // Background gradient animation
    gsap.to(bgRef.current, {
      background: 'linear-gradient(270deg, #234D90, #1E3A78, #13294F)',
      backgroundSize: '300% 300%',
      duration: 4,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true,
    });

    // Particle animation
    gsap.to('.particle', {
      y: '-50vh',
      opacity: 0,
      duration: 5,
      stagger: 0.2,
      repeat: -1,
      ease: 'power2.out',
    });
  }, []);

  return (
    <div
      ref={bgRef}
      className="w-screen h-screen flex justify-center items-center relative bg-gradient-to-r from-blue-500 to-blue-700"
    >
      {/* Particles for subtle background effect */}
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className="particle w-2 h-2 bg-white rounded-full absolute"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            opacity: 0.5,
          }}
        ></div>
      ))}

      {/* Logo */}
      <div
        className="logo flex space-x-4 justify-center items-center z-10"
        ref={logoRef}
      >
        <div className="C bg-[#234D90] text-white w-32 h-32 flex justify-center items-center font-bold text-[100px] rounded-sm shadow-md">
          C
        </div>
        <div className="T bg-[#234D90] text-white w-32 h-32 flex justify-center items-center font-bold text-[100px] rounded-sm shadow-md">
          T
        </div>
      </div>
    </div>
  );
};

export default Loader;
