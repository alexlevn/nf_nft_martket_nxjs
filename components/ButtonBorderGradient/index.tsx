export const ButtonBorderGradient: React.FC<{
  children: any
  className?: string
}> = ({ children, className }) => (
  <div className="border-btn-gradient">
    <div
      className={
        'btn-main-inside cursor-pointer hover:opacity-95 text-white font-semibold ' +
        (className ? className : '')
      }
    >
      {children}
    </div>
  </div>
)
