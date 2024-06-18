'use client'

import { useForm, Controller } from "react-hook-form";
import FloatingLabelInput from "./floating-label-input";
import FloatingLabelTextArea from "./floating-label-text-area";
import { kaisei } from "@/styles/fonts";
import { motion } from "framer-motion";
import { slide, opacity, perspective, anim } from "../common/anim";
import { api } from "@/trpc/react";
import { useState } from "react";
import { BeatLoader } from "react-spinners";

export default function ContactMe() {
  const { register, control, handleSubmit } = useForm();
  const sendMessage = api.message.send.useMutation();
  const [isLoading, setIsLoading] = useState(false);

  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function onSubmit(data: any) {
    setIsLoading(true);
    try {
      const response = await sendMessage.mutateAsync(data)
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }

  return (
    <div className='absolute w-full h-[calc(100vh-100px)] top-[100px] px-6 md:px-0 flex justify-center items-center z-40 text-[#252525] dark:text-slate-100'>
      <motion.div className='slide' {...anim(slide)}/>
      <motion.div className='page' {...anim(perspective)}>
        <motion.div {...anim(opacity)}>
          <form onSubmit={(handleSubmit(onSubmit))} className="flex flex-col gap-y-2 max-w-[500px]">
            <h1 className={`${kaisei.className} text-5xl md:text-7xl font-bold mb-2`}>Let&apos;s work together!</h1>
            <p className={`font-light mb-4`}>Email me at <a href="mailto:yuenc2@tcnj.edu" target="_blank" rel="noreferrer" className="underline hover:cursor-pointer">yuenc2@tcnj.edu</a> or drop a message below.</p>
            <div className="flex gap-x-2">
              <Controller
                name="name" 
                control={control}
                render={({ field }) => (
                  <FloatingLabelInput
                    type="text"
                    id="name"
                    label="Name"
                    register={register('name', { required: true })}
                    field={field}
                    fieldState={{
                      isTouched: false,
                      error: false,
                    }}
                    disabled={false}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <FloatingLabelInput
                    type="email"
                    id="email"
                    label="Email"
                    register={register('email', { required: true })}
                    field={field}
                    fieldState={{
                      isTouched: false,
                      error: false,
                    }}
                    disabled={false}
                  />
                )}
              />
            </div>
            <Controller
              name="message"
              control={control}
              render={({ field, fieldState }) => (
                <FloatingLabelTextArea
                  field={field}
                  fieldState={fieldState}
                  id="message"
                  placeholder="Yerrrrrr."
                />
              )}
            />
            <div className="w-full flex justify-end">
              <button type="submit" className="text-sm py-1.5 px-4 border border-slate-200 dark:border-slate-700 dark:bg-slate-800 rounded-md">
                {isLoading ? <BeatLoader loading={isLoading} color="#06b6d4" size={4} /> : 'Send'}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  )
}