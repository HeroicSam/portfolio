'use client'

import { useForm, Controller } from "react-hook-form";
import FloatingLabelInput from "../_components/contact-me/floating-label-input";
import FloatingLabelTextArea from "../_components/contact-me/floating-label-text-area";
import { kaisei } from "@/styles/fonts";

export default function ContactMePage() {
  const { register, control, handleSubmit } = useForm();

  async function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <div className='absolute w-full h-[calc(100vh-100px)] top-[100px] flex justify-center items-center z-40 text-[#252525] dark:text-slate-100'>
      <form onSubmit={(handleSubmit(onSubmit))} className="flex flex-col gap-y-2">
        <h1 className={`${kaisei.className} text-5xl font-bold mb-2`}>Let&apos;s work together!</h1>
        <p className={`font-light mb-4`}>Email me at <a href="mailto:yuenc2@tcnj.edu" className="underline hover:cursor-pointer">yuenc2@tcnj.edu</a> or drop a message below.</p>
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
          render={({ field }) => (
            <FloatingLabelTextArea
              field={field}
              fieldState={{
                isTouched: false,
                error: false,
              }}
              id="message"
              placeholder="Yerrrrrr."
            />
          )}
        />
        <div className="w-full flex justify-end">
          <button type="submit" className="text-sm py-1.5 px-4 border border-slate-200 dark:border-slate-700 dark:bg-slate-800 rounded-md">Send</button>
        </div>
      </form>
    </div>
  )
}