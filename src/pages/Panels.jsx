import React, { useEffect } from 'react';
import './Panels.css';
import { gsap } from 'gsap';

const Panels = ({ section }) => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".panel:first-child, .panel:last-child", {
      scaleY: 1,
      duration: 1,
    })
      .to(".panel:not(:first-child):not(:last-child)", { scaleY: 1 }, "-=0.5")
      .to(".panel", {
        scaleY: 0,
        duration: 0.3,
        stagger: 0.05,
      })
      .to(".panels", {
        clipPath: "circle(0%)",
        skewX: 0,
        duration: 1,
      })
      .to(
        ".page-main",
        {
          clipPath: "circle(100%)",
          duration: 1,
        },
        "-=0.3"
      );
  }, [section]); // Re-run animation when the section changes.

  return (
    <ul className="panels">
      <li className="panel"></li>
      <li className="panel"></li>
      <li className="panel"></li>
      <li className="panel"></li>
      <li className="panel"></li>
      <li className="panel"></li>
      
    </ul>
  );
};

export default Panels;
