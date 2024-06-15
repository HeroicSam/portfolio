'use client'

import { HTMLInputTypeAttribute, useEffect, useState } from 'react';
import { ControllerRenderProps, FieldValues, UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  type: HTMLInputTypeAttribute;
  id: string;
  label: string;
  register: UseFormRegisterReturn;
  isError?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field?: ControllerRenderProps<FieldValues, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fieldState?: any;
  disabled?: boolean;
}

export default function FloatingLabelInput({ type, id, label, register, isError, field, fieldState, disabled=false }: Props) {
  const [isFormError, setIsFormError] = useState(false);

  useEffect(() => {
    if (disabled) {
      setIsFormError(false);
    } else {
      if (field && fieldState) {
        if (
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          fieldState.error ||
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          (fieldState.isTouched && (
          field.value === "" 
          || field.value === null 
          || field.value === undefined)
          || (Array.isArray(field.value) && field.value.length === 0))
        ) {
          setIsFormError(true);
        } else {
          setIsFormError(false);
        }
      }
    }
  }, [disabled, field, fieldState]);

  return (
    <div>
      <label
        htmlFor={id}
        className={`relative block rounded-md border border-slate-200 dark:border-slate-700 shadow-sm ${(isError || isFormError) ? 'border-red-600 dark:border-red-600' : '' }`}
      >
        <input
          type={type}
          id={id}
          className={`peer border-none placeholder-transparent rounded-md focus:ring-1 focus:border-transparent focus:outline-none focus:ring-0 w-full h-12 p-2 ${disabled ? 'cursor-not-allowed' : 'bg-transparent'}`}
          placeholder={label}
          {...register}
          {...field}
          disabled={disabled}
        />

        <span
          className={`
            pointer-events-none absolute start-2.5 top-0 z-50
            peer-placeholder-shown:bg-transparent -translate-y-1/2 p-0.5 text-xs text-[#252525] dark:text-slate-200
            transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs
          `}
        >
          {label}
        </span>
      </label>
    </div>
  );
}
