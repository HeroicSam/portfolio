'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { slide, opacity, perspective } from "../_components/anim";

const anim = (variants: any) => {
  return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants
  }
}

export default function Resume() {
  return (
    <div className='absolute w-full h-[calc(100vh-100px)] top-[100px] flex justify-center z-40'>
      <motion.div className='slide' {...anim(slide)}/>
      <motion.div className='page' {...anim(perspective)}>
          <motion.div {...anim(opacity)}>
              <div className='header'>
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                  <Link href="/contact">Contact</Link>
              </div>
          </motion.div>
      </motion.div>
    </div>
  );
}