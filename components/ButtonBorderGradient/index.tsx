import { MouseEventHandler } from 'react'

export const ButtonBorderGradient: React.FC<{
  children: any
  className?: string
  onClick?: MouseEventHandler<any> | undefined
}> = ({ children, className, onClick }) => (
  <div className="border-btn-gradient" onClick={onClick}>
    <div
      className={
        'btn-main-inside cursor-pointer hover:opacity-95 text-white font-semibold' +
        ' ' +
        (className ? className : '')
      }
    >
      {children}
    </div>
  </div>
)
