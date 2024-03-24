import { ReactNode } from 'react'

const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center z-40">
      <div className="absolute inset-0 w-full h-full bg-[#00000080] backdrop-blur-[2px]"></div>
      <div className="relative bg-white p-5 rounded-xl shadow-md">{children}</div>
    </div>
  )
}

export default Modal
