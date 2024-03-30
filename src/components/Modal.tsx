import { ReactNode } from 'react'

const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center z-40">
      <div className="absolute inset-0 w-full h-full bg-[#00000080] backdrop-blur-[2px]"></div>
      <div className="relative w-80 bg-slate-950 border shadow-Block px-5 py-8 rounded-xl">
        {children}
      </div>
    </div>
  )
}

export default Modal
