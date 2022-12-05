import SVGIcon from './SVGIcon'
import { IIconProps } from '@models/iconModel'

const List: React.FC<IIconProps> = props => (
  <SVGIcon {...props}>
    <path d="M8,7H22.5a1.5,1.5,0,0,0,0-3H8A1.5,1.5,0,0,0,8,7Z" />
    <path d="M22.5,11H8a1.5,1.5,0,0,0,0,3H22.5a1.5,1.5,0,0,0,0-3Z" />
    <path d="M22.5,18H8a1.5,1.5,0,0,0,0,3H22.5a1.5,1.5,0,0,0,0-3Z" />
    <circle cx="2.5" cy="5.5" r="2.5" />
    <circle cx="2.5" cy="12" r="2.5" />
    <circle cx="2.5" cy="19" r="2.5" />
  </SVGIcon>
)

export default List
