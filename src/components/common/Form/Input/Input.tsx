import React from 'react'
import { Path, UseFormRegister } from 'react-hook-form'

import type { InputValue } from '@/components/page/Form/Form'

type InputProps = {
  label: string
  type: string
  name: Path<InputValue>
  placeholder?: string
  required?: boolean
  register: UseFormRegister<InputValue>
}

export const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  required,
  register,
}) => {
  return (
    <>
      <label>{label}</label>
      <input type={type} {...register(name, { required })} />
    </>
  )
}
