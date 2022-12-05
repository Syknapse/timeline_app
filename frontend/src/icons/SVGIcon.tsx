interface ISVGIconProps {
  children: React.ReactNode
  className?: string
  [propName: string]: any
}

const SVGIcon: React.FC<ISVGIconProps> = ({ children, className, ...props }) => (
  <svg className={className} viewBox="0 0 24 24" height="40" width="40" {...props}>
    {children}
  </svg>
)

export default SVGIcon
