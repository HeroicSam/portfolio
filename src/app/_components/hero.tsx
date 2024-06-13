'use client';

import Image from "next/image";
import { kaisei } from "../layout";

export default function Hero() {
  return (
    <div className="absolute w-full h-[calc(100vh-100px)] top-[100px] flex justify-center z-40">
    <div className="w-full max-w-[900px] flex flex-col md:flex-row px-6">  
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col items-center md:justify-center md:items-start pt-10 md:pt-0">
        <h1 className="text-5xl font-bold">Heya! I&apos;m <span className="text-[#7CBD65]">Conor</span>.</h1>
        <p className="font-light mt-4">I&apos;m a full-stack developer based in Brooklyn, NY</p>
        <p className="font-light">Currently working on payments at <span className="text-[#0172DA] font-medium">Hotswaps.io</span></p>
        <div className="flex items-center gap-x-4 mt-4" >
          <div className="flex items-center gap-x-2 text-sm">
            <Image
              src="/arrow.png"
              alt="arrow"
              width={24}
              height={24}
            />
            <p className={`${kaisei.className} mb-0.5 hover:underline hover:cursor-pointer hover:transition-transform hover:duration-200 hover:ease-in-out hover:translate-x-0.5 hover:-translate-y-0.5 hover:text-blue-600`}>check out my resume</p>
          </div>
          <div className="flex items-center gap-x-2 text-sm">
            <Image
              src="/arrow.png"
              alt="arrow"
              width={24}
              height={24}
            />
            <p className={`${kaisei.className} mb-0.5 hover:underline hover:cursor-pointer hover:transition-transform hover:duration-200 hover:ease-in-out hover:translate-x-0.5 hover:-translate-y-0.5 hover:text-blue-600`}>about me</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full flex flex-col items-center md:justify-center md:items-start">
        <Image
          src="/me.png"
          alt="me"
          width={424}
          height={557}
          className="w-full max-w-[424px] h-full max-h-[400px] md:max-h-[557px] object-cover rounded-xl md:rounded-[40px]"
        />
      </div>
    </div>
  </div>
  )
}