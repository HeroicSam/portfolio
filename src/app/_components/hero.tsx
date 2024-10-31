'use client';

import { kaisei } from "@/styles/fonts";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { perspective, slide, opacity, anim } from "./common/anim";

export default function Hero() {
  const { theme } = useTheme()
  const [isMounted , setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="absolute w-full top-[100px] flex justify-center z-40 overflow-hidden">
      <motion.div className='slide' {...anim(slide)}/>
      <motion.div className='page' {...anim(perspective)}>
        <motion.div {...anim(opacity)}>
          <div className="w-full h-[calc(100vh-100px)] flex justify-center">
            <div className="w-full max-w-[900px] flex flex-col md:flex-row px-6"> 
              <div className="pr-2 w-full md:w-1/2 h-1/2 md:h-full flex flex-col items-center md:justify-center md:items-start pt-10 md:pt-0">
                <h1 className="hello text-5xl font-bold">Heya! I&apos;m <span className="text-cyan-500">Conor</span></h1>
                <p className="font-light mt-4">I&apos;m a full-stack developer based in Brooklyn, NY.</p>
                <p className="font-light">Currently working on a marketplace for keyboards at <span className="text-[#0172DA] font-medium">Hotswaps</span>.</p>
                <div className="flex items-center gap-x-4 mt-4" >
                  <div className="flex items-center gap-x-2 text-sm">
                    <Image
                      src={theme === 'dark' ? '/arrow-slate-100.png' : '/arrow.png'}
                      alt="arrow"
                      width={24}
                      height={24}
                    />
                    <Link href="/resume" className={`${kaisei.className} mb-0.5 hover:underline hover:cursor-pointer hover:transition-transform hover:ease-in-out hover:translate-x-0.5 hover:-translate-y-0.5 hover:text-cyan-500`}>check out my resume</Link>
                  </div>
                  <div className="flex items-center gap-x-2 text-sm">
                    <Image
                      src={theme === 'dark' ? '/arrow-slate-100.png' : '/arrow.png'}
                      alt="arrow"
                      width={24}
                      height={24}
                    />
                    <Link href="/contact-me" className={`${kaisei.className} mb-0.5 hover:underline hover:cursor-pointer hover:transition-transform hover:ease-in-out hover:translate-x-0.5 hover:-translate-y-0.5 hover:text-cyan-500`}>say hi!</Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 h-full flex flex-col items-center md:justify-center md:items-start">
                <Image
                  src="/me.jpg"
                  alt="me"
                  width={424}
                  height={557}
                  className="w-full max-w-[424px] h-full max-h-[400px] md:max-h-[557px] object-cover rounded-xl shadow-lg md:rounded-[40px]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}