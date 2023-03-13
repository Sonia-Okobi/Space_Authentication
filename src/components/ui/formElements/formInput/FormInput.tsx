import React from 'react'

type InputProps = {
    label: string
    placeholder: string
    className?: string
}

function FormInput({label, placeholder, className}: InputProps) {
  return (
    <label className={`${className} flex flex-col gap-0.5 text-base font-medium text-space_black flex-1`}><span>{label}</span><input className='py-4 px-5 rounded-md border placeholder:text-space_black/[.2] w-full' type="text" placeholder={placeholder}/></label>
  )
}

export default FormInput
