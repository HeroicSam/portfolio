'use client';

import { motion } from "framer-motion";
import { slide, opacity, perspective } from "../_components/resume/anim";
import { projectsData, resumeData } from "../_components/resume/constants";
import Badge from "../_components/resume/badge";
import gsap from "gsap";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const anim = (variants: any) => {
  return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      variants
  }
}

export default function Resume() {
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

  return (
    <div className='absolute w-full h-[calc(100vh-100px)] top-[100px] flex justify-center z-40'>
      <motion.div className='slide' {...anim(slide)}/>
      <motion.div className='page' {...anim(perspective)}>
        <motion.div {...anim(opacity)}>
          <div className="w-full lg:min-w-[900px] flex justify-between h-full">
            {scroll && (
              <div className="sticky top-[100px] h-[calc(100vh-120px)] hidden lg:flex flex-col justify-between pr-10 border-r">
                <nav className="flex flex-col gap-y-2 text-sm font-bold">
                  <div className="inline-flex items-center">
                    <div className="bullet1 hidden opacity-0 w-1 h-1 bg-black rounded-[50%]"/>
                    <a onClick = {() => scroll.scrollTo("#experience")} href="#experience" className="nav1 hover:cursor-pointer" onMouseEnter={() => handleMouseEnter({ number: "1"})} onMouseLeave={() => handleMouseOut({ number: "1"})}>Experience</a>
                  </div>
                  <div className="inline-flex items-center">
                    <div className="bullet2 hidden opacity-0 w-1 h-1 bg-black rounded-[50%]"/>
                    <a onClick = {() => scroll.scrollTo("#projects")} href="#projects" className="nav2 hover:cursor-pointer" onMouseEnter={() => handleMouseEnter({ number: "2"})} onMouseLeave={() => handleMouseOut({ number: "2"})}>Projects</a>
                  </div>
                  <div className="inline-flex items-center">
                    <div className="bullet3 hidden opacity-0 w-1 h-1 bg-black rounded-[50%]"/>
                    <a className="nav3 hover:cursor-pointer" onMouseEnter={() => handleMouseEnter({ number: "3"})} onMouseLeave={() => handleMouseOut({ number: "3"})}>Education</a>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <div className="font-medium flex items-center gap-x-1 text-xs mt-2">
                      <input type="radio" id="light-radio" value="light" defaultChecked onClick={() => console.log('running')} className="appearance-none h-2 w-2 border border-[#252525] checked:border-[#252525] checked:before:bg-black hover:cursor-pointer"/>
                      <label htmlFor="checkbox" className="flex items-center gap-x-1 hover:cursor-pointer">Light</label>
                    </div>
                    <div className="font-medium flex items-center gap-x-1 text-xs mt-2">
                      <input type="radio" id="dark-radio" value="light" defaultChecked onClick={() => console.log('running')} className="appearance-none h-2 w-2 border border-[#252525] checked:border-[#252525] checked:before:bg-black hover:cursor-pointer"/>
                      <label htmlFor="checkbox" className="flex items-center gap-x-1 hover:cursor-pointer">Dark</label>
                    </div>
                  </div>
                </nav>
                <div className="w-full max-w-[100px] text-xs font-bold">
                  <p>Born and raised in New Jersey, USA.</p>
                  <p className="whitespace-pre-line">On holidays you can find me at de_dust2 and sometimes de_mirage.</p>
                  <p className="whitespace-pre-line">Currently typing on a Paragon75 with Cherry MX Blacks.</p>
                  <div className="flex mt-4 gap-x-2">
                    <Link
                      href="https://github.com/heroicsam"
                      target="_blank"
                      referrerPolicy="no-referrer"
                    >
                      <Image  
                        src="/github.svg"
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
                        src="/linkedin.svg"
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
                        src="/instagram.svg"
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
              <div id="experience" className="px-6 font-bold mb-8">Experience</div>
              {resumeData.map((data, index) => (
                <div key={index} className="group mb-4">
                  <a
                    className="group-hover:shadow-lg group-hover:backdrop-blur-3xl bg-transparent transition flex px-6 py-4 gap-x-6 max-w-[700px] hover:cursor-pointer rounded-md"
                    href={data.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <header className="text-sm text-slate-500 line-clamp-1 min-w-[95px] mt-0.5">{data.period}</header>
                    <div className="flex flex-col">
                      <div className="inline-flex gap-x-2 duration-200">
                        <h2 className="text-slate-800 group-hover:text-cyan-500 group-hover:ease-in-out transition-colors font-bold">{data.title}</h2>
                        <h2 className="text-slate-800 group-hover:text-cyan-500 group-hover:ease-in-out transition-colors font-bold">&#183;</h2>
                        <h2 className="text-slate-800 group-hover:text-cyan-500 group-hover:ease-in-out transition-colors font-bold">{data.company}</h2>
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
              <div id="projects" className="px-6 font-bold mb-8">Projects</div>
              {projectsData.map((data, index) => (
                <div key={index} className="group mb-4">
                  <a
                    className="group-hover:shadow-lg group-hover:backdrop-blur-3xl bg-transparent transition flex px-6 py-4 gap-x-6 max-w-[700px] hover:cursor-pointer rounded-md"
                    href={data.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <header className="text-sm text-slate-500 line-clamp-1 min-w-[95px] mt-0.5">{data.period}</header>
                    <div className="flex flex-col">
                      <div className="inline-flex gap-x-2 duration-200">
                        <h2 className="text-slate-800 group-hover:text-cyan-500 group-hover:ease-in-out transition-colors font-bold">{data.company}</h2>
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
                <a className="inline-flex gap-x-2 text-slate-800 group-hover:text-cyan-500 group-hover:ease-in-out transition-colors">
                  <span>View Full Resume</span>
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