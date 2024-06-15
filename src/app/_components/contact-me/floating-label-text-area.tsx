import { useState, useEffect } from "react";
import { ControllerFieldState, ControllerRenderProps, FieldValues } from "react-hook-form";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field?: ControllerRenderProps<FieldValues, any>;
  fieldState?: ControllerFieldState;
  id: string;
  placeholder: string;
}

export default function FloatingLabelTextArea({ field, fieldState, id, placeholder }: Props) {
  const [isFormError, setIsFormError] = useState(false);

  useEffect(() => {
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
  }, [field, fieldState]);

  return (
    <textarea
      id={id}
      className={`mt-2 w-full max-h-4xl rounded-md bg-transparent border border-slate-200 dark:border-slate-700 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-neutral-200 p-2 align-top shadow-sm sm:text-sm focus:ring-1 focus:outline-none ${isFormError ? 'border-red-600 dark:border-red-600' : ''}`}
      rows={6}
      placeholder={placeholder}
      autoComplete="off"
      {...field}
    />
  )
}