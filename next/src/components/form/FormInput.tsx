import React from 'react'
import { FieldErrors, FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

import { generateFormFieldErrorMessage } from '~utils/generateFormFieldErrorMessage'

import { Input, InputProps } from '../shadcn/ui/input'

type Props<TFormValues extends FieldValues> = {
  label: string
  name: Path<TFormValues>
  errors: FieldErrors<TFormValues>
  register: UseFormRegister<TFormValues>
  setValue: (name: Path<TFormValues>, value: string) => void
  rules?: RegisterOptions
  inputProps?: Omit<InputProps, 'name'>
  className?: string
}

export const FormInput = <TFormValues extends Record<string, unknown>>({
  label,
  name,
  register,
  setValue,
  errors,
  rules,
  inputProps,
  className,
}: Props<TFormValues>) => {
  const inputErrorMessage = generateFormFieldErrorMessage(name, errors)
  const errorClassName = !inputProps?.disabled && inputErrorMessage ? 'border border-red-500' : ''
  const disabledClassName = inputProps?.disabled ? 'opacity-60' : ''

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(name, e.target.value.trim())
  }

  return (
    <div className={twMerge('relative mb-5 flex flex-col text-sm', disabledClassName, className)}>
      <div className="mb-1 mt-0.5 flex items-center justify-between">
        <div>
          {rules?.required && <span className="mr-1 text-red-600">*</span>}
          <span>{label}</span>
        </div>
      </div>
      <Input
        {...register(name, rules)}
        {...inputProps}
        className={twMerge(errorClassName, inputProps?.className)}
        onBlur={handleBlur}
      />
      <span className="absolute -bottom-4 mr-0.5 text-xs text-red-600">
        {(!inputProps?.disabled && inputErrorMessage) || ''}
      </span>
    </div>
  )
}
