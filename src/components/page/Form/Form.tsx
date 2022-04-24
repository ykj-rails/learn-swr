import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { Input } from '@/components/common/Form'

export type InputValue = {
  name: string
  tel: string
}

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputValue>()
  const onSubmit: SubmitHandler<InputValue> = (data) => console.log(data)

  console.log(watch())

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="お名前"
        type="text"
        name="name"
        register={register}
        required
      />
      {errors.name && <span>お名前を入力してください</span>}
      <Input label="電話番号" type="tel" name="tel" register={register} />
      {/* <input
        type="text"
        placeholder="名字"
        {...register('example', { required: true })}
      />
      {errors.exampleRequired && <span>必須項目を入力してください</span>} */}
      <button type="submit">送信する</button>
    </form>
  )
}
