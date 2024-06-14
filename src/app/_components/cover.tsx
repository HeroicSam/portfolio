'use client';

import { kaisei } from "@/styles/fonts";
import { gsap } from "gsap";
import { useEffect, useState } from "react";

export default function Cover() {
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    gsap.to(".bar", 1.5, {
      delay: 0,
      height: 0,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
      onComplete: () => setTransition(true),
    });
  }, [])


  return (
    <>
      {!transition && (
        <div className="w-screen h-screen fixed z-50 flex">
          <div className="bar w-[10vw] h-[105vh] bg-[#252525]"/>
          <div className="bar w-[10vw] h-[105vh] bg-[#252525]"/>
          <div className="bar w-[10vw] h-[105vh] bg-[#252525]"/>
          <div className="bar w-[10vw] h-[105vh] bg-[#252525]"/>
          <div className="bar w-[10vw] h-[105vh] bg-[#252525]"/>
          <div className="bar w-[10vw] h-[105vh] bg-[#252525]"/>
          <div className="bar w-[10vw] h-[105vh] bg-[#252525]"/>
          <div className="bar w-[10vw] h-[105vh] bg-[#252525]"/>
          <div className="bar w-[10vw] h-[105vh] bg-[#252525]"/>
          <div className="bar w-[10vw] h-[105vh] bg-[#252525]"/>
        </div>
      )}
    </>
  )
}