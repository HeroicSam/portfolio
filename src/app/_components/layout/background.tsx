'use client';

import gsap from "gsap";
import { useEffect, useState } from "react";

export default function Background() {
  const [blobDimension, setBlobDimension] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBlobDimension(window.innerWidth * 0.3);
    }

    window.addEventListener('resize', () => {
      if (typeof window !== "undefined") {
        setBlobDimension(window.innerWidth * 0.3);
      }
    })

    return () => {
      window.removeEventListener('resize', () => {
        if (typeof window !== "undefined") {
          setBlobDimension(window.innerWidth * 0.3);
        }
      })
    }

  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    if (typeof window !== "undefined") {
      const percentX = (e.clientX / window.innerWidth) * 100;
      const percentY = (e.clientY / window.innerHeight) * 100;

      gsap.to(".blob", {
        left: `${percentX}%`,
        top: `${percentY}%`,
        duration: 4,
      });
    } else {
      return;
    }
  };

  useEffect(() => {
    gsap.set(".blob", {
      width: `${blobDimension}px`,
      height: `${blobDimension}px`,
    });

    window.addEventListener('mousemove', handleMouseMove);

    () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };

  },[ blobDimension ]);

  return (
    <>
      <div className="fixed top-0 w-full h-full z-10">
        <div className="absolute w-full h-full overlay z-10">
        </div>
        <div className="fixed w-full h-full flex justify-center items-center overflow-hidden z-0">
          <div className="hidden md:block blob absolute rounded-full bg-cyan-200 translate-x-[-50%] translate-y-[-50%]" />
        </div>
        <svg>
          <filter id='noiseFilter'>
            <feTurbulence 
              baseFrequency='.76' 
              stitchTiles='stitch'/>
            <feColorMatrix in="colorNoise" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
            <feComposite operator="in" in2="SourceGraphic" result="monoNoise"/>
            <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
          </filter>
        </svg>
      </div>
    </>
  )
}