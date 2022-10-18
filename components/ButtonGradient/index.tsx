import { MouseEventHandler } from 'react'

export const ButtonGradient: React.FC<{
  children: any
  className?: string
  onClick?: MouseEventHandler<any> | undefined
}> = ({ children, className, onClick }) => (
  <div
    className={
      `btn-gradient rounded-lg text-white  font-semibold
      flex justify-center items-center` +
      ' ' +
      (className ? className : '')
    }
    onClick={onClick}
  >
    {children}
  </div>
)
