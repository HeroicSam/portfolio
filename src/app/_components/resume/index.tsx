'use client';

import { motion } from "framer-motion";
import { slide, opacity, perspective, anim } from "../common/anim";
import { projectsData, resumeData } from "./constants";
import Badge from "./badge";
import gsap from "gsap";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { StringChunk } from "drizzle-orm";

export default function Resume() {
  const { theme, setTheme }  = useTheme()
  const [isMounted , setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const [scroll, setScroll] = useState<LocomotiveScroll | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("locomotive-scroll").then((LocomotiveScroll) => {
        setScroll(
          new LocomotiveScroll.default()
        );
      }).catch((err) => {
        console.error(err);
      })
    }
  }, [])


  function handleMouseEnter({ number }: { number: string }) {
    gsap.to(`.nav${number}`, {
      duration: 0.1,
      x: 4,
      ease: "power2.inOut",
    })

    gsap.to(`.bullet${number}`, {
      duration: 0.1,
      opacity: 1,
      display: 'block',
    })
  }

  function handleMouseOut({ number }: { number: string }) {
    gsap.to(`.nav${number}`, {
      duration: 0.1,
      x: 0,
      ease: "power2.inOut",
    })

    gsap.to(`.bullet${number}`, {
      duration: 0.1,
      opacity: 0,
      display: 'none',
    })
  }

  function handleSectionEnter({ number }: { number: number }) {
    const anchorToExclude = `.a${number}`
    const anchorsToAnimate = [".a0", ".a1", ".a2", ".a3", ".a4", ".a5"].filter((a) => a !== anchorToExclude)

    gsap.to(anchorsToAnimate, {
      duration: 0.1,
      opacity: 0.3,
    })
  }

  function handleSectionExit() {
    gsap.to("a", {
      duration: 0.1,
      opacity: 1,
    })
  }

  if (!isMounted) return null

  return (
    <div className='absolute w-full h-[calc(100vh-100px)] flex justify-center z-40 text-[#252525] dark:text-slate-100'>
      <motion.div className='slide' {...anim(slide)}/>
      <motion.div className='page' {...anim(perspective)}>
        <motion.div {...anim(opacity)}>
          <div className="w-full px-6 md:px-20 lg:px-0 lg:min-w-[1000px] flex justify-between h-full">
            {scroll && (
              <div className="sticky mt-[100px] h-[calc(100vh-120px)] hidden lg:flex flex-col justify-between pr-20 border-r border-[#252525] dark:border-slate-200">
                <nav className="flex flex-col gap-y-2 text-sm font-bold">
                  <div className="inline-flex items-center">
                    <div className="bullet1 hidden opacity-0 w-1 h-1 bg-black dark:bg-slate-100 rounded-[50%]"/>
                    <a onClick = {() => scroll.scrollTo("#experience")} href="#experience" className="nav1 hover:cursor-pointer" onMouseEnter={() => handleMouseEnter({ number: "1"})} onMouseLeave={() => handleMouseOut({ number: "1"})}>Experience</a>
                  </div>
                  <div className="inline-flex items-center">
                    <div className="bullet2 hidden opacity-0 w-1 h-1 bg-black dark:bg-slate-100 rounded-[50%]"/>
                    <a onClick = {() => scroll.scrollTo("#projects")} href="#projects" className="nav2 hover:cursor-pointer" onMouseEnter={() => handleMouseEnter({ number: "2"})} onMouseLeave={() => handleMouseOut({ number: "2"})}>Projects</a>
                  </div>
                  <div className="inline-flex items-center">
                    <div className="bullet3 hidden opacity-0 w-1 h-1 bg-black dark:bg-slate-100 rounded-[50%]"/>
                    <a className="nav3 hover:cursor-pointer" onMouseEnter={() => handleMouseEnter({ number: "3"})} onMouseLeave={() => handleMouseOut({ number: "3"})}>Education</a>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <div className="font-medium flex items-center gap-x-1 text-xs mt-2" onClick={() => setTheme('light')}>
                      <div className="grid place-items-center">
                        <input type="radio" id="light-radio" value="light" defaultChecked className="col-start-1 row-start-1 appearance-none h-2 w-2 border border-[#252525] dark:border-slate-200 checked:before:bg-black hover:cursor-pointer"/>
                        {theme === 'light' && (
                          <div className="col-start-1 row-start-1 w-1 h-1 bg-[#252525]"/> 
                        )}
                      </div>
                      <label htmlFor="checkbox" className="flex items-center gap-x-1 hover:cursor-pointer">Light</label>
                    </div>
                    <div className="font-medium flex items-center gap-x-1 text-xs mt-2" onClick={() => setTheme('dark')}>
                      <div className="grid place-items-center">
                        <input type="radio" id="dark-radio" value="dark" defaultChecked className="col-start-1 row-start-1 appearance-none h-2 w-2 border border-[#252525] dark:border-slate-200 checked:before:bg-black hover:cursor-pointer"/>
                        {theme === 'dark' && (
                          <div className="col-start-1 row-start-1 w-1 h-1 bg-slate-200"/>
                        )}
                      </div>
                      <label htmlFor="checkbox" className="flex items-center gap-x-1 hover:cursor-pointer">Dark</label>
                    </div>
                  </div>
                </nav>
                <div className="w-full max-w-[120px] text-xs font-bold dark:text-white pb-12">
                  <p>Born and raised in New Jersey, USA.</p>
                  <p className="whitespace-pre-line">On the weekend you can find me in de_dust2 and sometimes de_mirage.</p>
                  <p className="whitespace-pre-line">Currently typing on a Paragon75 with Cherry MX Blacks.</p>
                  <div className="flex mt-4 gap-x-2">
                    <Link
                      href="https://github.com/heroicsam"
                      target="_blank"
                      referrerPolicy="no-referrer"
                    >
                      <Image  
                        src={theme === 'dark' ? 'github-slate-100.svg' : 'github.svg'}
                        alt="github"
                        width={24}
                        height={24}
                      />
                    </Link>
                    <Link
                      href="https://www.instagram.com/conoryuen/"
                      target="_blank"
                      referrerPolicy="no-referrer"
                    >
                      <Image
                        src={theme === 'dark' ? 'linkedin-slate-100.svg' : 'linkedin.svg'}
                        alt="linkedin"
                        width={24}
                        height={24}
                      />
                    </Link>
                    <Link
                      href="https://www.instagram.com/conoryuen/"
                      target="_blank"
                      referrerPolicy="no-referrer"
                    >
                      <Image
                        src={theme === 'dark' ? 'instagram-slate-100.svg' : 'instagram.svg'}
                        alt="instagram"
                        width={24}
                        height={24}
                      />
                    </Link>

                  </div>
                </div>
              </div>
            )}
            <div>
              <div id="experience" className="font-bold lg:px-6 pt-[100px] mb-8">Experience</div>
              {resumeData.map((data, index) => (
                <div key={index} className="group mb-4">
                  <a
                    className={`a${index} group-hover:shadow-lg group-hover:backdrop-blur-3xl bg-transparent transition flex lg:px-6 py-4 gap-x-6 lg:max-w-[700px] hover:cursor-pointer rounded-md`}
                    href={data.link}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() =>handleSectionEnter({ number: index })}
                    onMouseLeave={() => handleSectionExit()}
                  >
                    <header className="text-slate-500 dark:text-slate-300 text-sm line-clamp-1 min-w-[95px] mt-0.5">{data.period}</header>
                    <div className="flex flex-col">
                      <div className="inline-flex gap-x-2 duration-200">
                        <h2 className="text-slate-800 dark:text-slate-100 group-hover:text-cyan-500 group-hover:ease-in-out transition-colors font-bold">{data.title}</h2>
                        <h2 className="text-slate-800 dark:text-slate-100 group-hover:text-cyan-500 group-hover:ease-in-out transition-colors font-bold">&#183;</h2>
                        <h2 className="text-slate-800 dark:text-slate-100 group-hover:text-cyan-500 group-hover:ease-in-out transition-colors font-bold">{data.company}</h2>
                        <div className={`duration-200 group-hover:text-cyan-500 group-hover:translate-x-1`}>&#8594;</div>
                      </div>
                      <p className={`font-light text-sm mt-1`}>{data.description}</p>
                      <div className="flex flex-wrap gap-y-2 mt-4">
                        {data?.technologies.map((tech, index) => (
                          <Badge key={index} text={tech} />
                        ))}
                      </div>
                    </div>
                  </a>
                </div>
              ))}
              <div id="projects" className="font-bold lg:px-6 mb-8">Projects</div>
              {projectsData.map((data, index) => (
                <div key={index + 2} className="group mb-4">
                  <a
                    className={`a${index + 2} group-hover:shadow-lg group-hover:backdrop-blur-3xl bg-transparent transition flex lg:px-6 py-4 gap-x-6 lg:max-w-[700px] hover:cursor-pointer rounded-md`}
                    href={data.link}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => handleSectionEnter({ number: index + 2 })}
                    onMouseLeave={() => handleSectionExit()}
                  >
                    <header className="text-slate-500 dark:text-slate-300 text-sm line-clamp-1 min-w-[95px] mt-0.5">{data.period}</header>
                    <div className="flex flex-col">
                      <div className="inline-flex gap-x-2 duration-200">
                        <h2 className="text-slate-800 dark:text-slate-100 group-hover:text-cyan-500 group-hover:ease-in-out transition-colors font-bold">{data.company}</h2>
                        <div className="duration-200 group-hover:text-cyan-500 group-hover:translate-x-1">&#8594;</div>
                      </div>
                      <p className="font-light text-sm mt-1">{data.description}</p>
                      <div className="flex flex-wrap gap-y-2 mt-4">
                        {data?.technologies.map((tech, index) => (
                          <Badge key={index} text={tech} />
                        ))}
                      </div>
                    </div>
                  </a>
                </div>
              ))}
              <div className="group px-6 font-bold pb-20 hover:cursor-pointer">
                <a className="inline-flex gap-x-2 text-slate-800 dark:text-slate-100 group-hover:text-cyan-500 group-hover:ease-in-out transition-colors">
                  <span>View full resume</span>
                  <span className="duration-200 group-hover:text-cyan-500 group-hover:translate-x-1 font-medium">&#8594;</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}