import SVGIcon from './SVGIcon'
import { IIconProps } from '@models/iconModel'

const AngleDown: React.FC<IIconProps> = props => (
  <SVGIcon {...props}>
    <path d="M0,8.057l9.52,9.507a3.507,3.507,0,0,0,4.948,0L24,8.046,21.879,5.929l-9.531,9.517a.5.5,0,0,1-.707,0L2.121,5.94Z" />
  </SVGIcon>
)

export default AngleDown
