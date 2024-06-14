'use client';

import { motion } from "framer-motion";
import { slide, opacity, perspective } from "../_components/resume/anim";
import { projectsData, resumeData } from "../_components/resume/constants";
import Badge from "../_components/resume/badge";

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
  return (
    <div className='absolute w-full h-[calc(100vh-100px)] top-[100px] flex justify-center z-40'>
      <motion.div className='slide' {...anim(slide)}/>
      <motion.div className='page' {...anim(perspective)}>
        <motion.div {...anim(opacity)}>
          <div className="px-6 font-bold mb-4">Experience</div>
          {resumeData.map((data, index) => (
            <div key={index} className="group mb-4">
              <a
                className="group-hover:shadow-lg group-hover:backdrop-blur-3xl bg-transparent transition flex px-6 py-4 gap-x-6 max-w-[700px] hover:cursor-pointer rounded-md"
                href={data.link}
                target="_blank"
                rel="noreferrer"
              >
                <header className="text-sm text-slate-500 line-clamp-1 min-w-[95px]">{data.period}</header>
                <div className="flex flex-col">
                  <div className="inline-flex gap-x-2 duration-200">
                    <h2 className="text-slate-800 group-hover:text-cyan-500 group-hover:ease-in-out transition-colors font-bold">{data.title}</h2>
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
          <div className="px-6 font-bold mb-4">Projects</div>
          {projectsData.map((data, index) => (
            <div key={index} className="group mb-4">
              <a
                className="group-hover:shadow-lg group-hover:backdrop-blur-3xl bg-transparent transition flex px-6 py-4 gap-x-6 max-w-[700px] hover:cursor-pointer rounded-md"
                href={data.link}
                target="_blank"
                rel="noreferrer"
              >
                <header className="text-sm text-slate-500 line-clamp-1 min-w-[95px]">{data.period}</header>
                <div className="flex flex-col">
                  <div className="inline-flex gap-x-2 duration-200">
                    <h2 className="text-slate-800 group-hover:text-cyan-500 group-hover:ease-in-out transition-colors font-bold">{data.title}</h2>
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
          <div className="group px-6 font-bold mb-4 hover:cursor-pointer">
            <a className="inline-flex gap-x-2 text-slate-800 group-hover:text-cyan-500 group-hover:ease-in-out transition-colors">
              <span>View Full Resume</span>
              <span className="duration-200 group-hover:text-cyan-500 group-hover:translate-x-1 font-medium">&#8594;</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}