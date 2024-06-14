'use client';

import Link from "next/link";
import gsap from "gsap";
import { kaisei } from "@/styles/fonts";

export default function Header() {

  function handleMouseEnter({ number }: { number: string }) {
    gsap.to(`.link${number}`, {
      duration: 0.1,
      y: -4,
      ease: "power2.inOut",
    })

    gsap.to(`.dot${number}`, {
      duration: 0.1,
      opacity: 1,
      display: 'block',
    })
  }

  function handleMouseOut({ number }: { number: string }) {
    gsap.to(`.link${number}`, {
      duration: 0.1,
      y: 0,
      ease: "power2.inOut",
    })

    gsap.to(`.dot${number}`, {
      duration: 0.1,
      opacity: 0,
      display: 'none',
    })
  }

  return (
    <header className="absolute w-full h-[100px] flex justify-center bg-transparent px-6 sm:px-20 top-0 rounded-lg text-[#252525] z-40">
      <div className="w-full flex justify-between items-center max-w-[900px]">
        <Link href="/" className={`${kaisei.className} text-2xl font-bold`}>Conor Lee Yuen</Link>
        <div className="flex items-center text-sm ">
          <Link
            href="/"
            className="flex flex-col justify-center items-center hover:cursor-pointer p-4"
            onMouseEnter={() => handleMouseEnter({number: '1'})}
            onMouseLeave={() => handleMouseOut({number: '1'})}
          >
            <span
              className="link1 font-bold">Home</span>
            <div className="dot1 hidden opacity-0 w-1 h-1 bg-black rounded-[50%]" /> 
          </Link>
          <Link
            href="/resume"
            className="flex flex-col justify-center items-center hover:cursor-pointer p-4"
            onMouseEnter={() => handleMouseEnter({number: '2'})}
            onMouseLeave={() => handleMouseOut({number: '2'})}
          >
            <span
              className="link2 font-bold">Resume/CV</span>
            <div className="dot2 hidden opacity-0 w-1 h-1 bg-black rounded-[50%]" /> 
          </Link>
          <Link
            href="/"
            className="flex flex-col justify-center items-center hover:cursor-pointer p-4"
            onMouseEnter={() => handleMouseEnter({number: '3'})}
            onMouseLeave={() => handleMouseOut({number: '3'})}
          >
            <span
              className="link3 font-bold">Me</span>
            <div className="dot3 hidden opacity-0 w-1 h-1 bg-black rounded-[50%]" /> 
          </Link>
        </div>
      </div>
    </header>
  )
}