import { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  additionalStyles?: string
}

const Button = ({ children, additionalStyles, ...rest }: ButtonProps) => {
  return (
    <button className={twMerge('rounded-xl px-5 py-3', additionalStyles)} {...rest}>
      {children}
    </button>
  )
}

export default Button
