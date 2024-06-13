'use client';

import Link from "next/link";
import { kaisei } from "../layout";

export default function Header() {
  return (
    <header className="absolute w-full h-[100px] flex justify-center bg-transparent px-6 sm:px-20 top-0 rounded-lg text-[#252525] z-40">
      <div className="w-full flex justify-between items-center max-w-[900px]">
        <span className={`${kaisei.className} text-2xl font-bold`}>CY</span>
        <div className="flex items-center gap-x-4 text-sm ">
          <Link
            href="/"
            className="font-bold hover:underline hover:cursor-pointer"
          >
            Home
          </Link>
          <Link
            href="/resume"
            className="font-bold hover:underline hover:cursor-pointer"
          >
            Resume/CV
          </Link>
          <Link
            href="/"  
            className="font-bold hover:underline hover:cursor-pointer"
          >
            Me
          </Link>
        </div>
      </div>
    </header>
  )
}