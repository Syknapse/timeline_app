import SVGIcon from './SVGIcon'
import { IIconProps } from '@models/iconModel'

const Add: React.FC<IIconProps> = props => (
  <SVGIcon {...props}>
    <path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm1-11h4v2h-4v4h-2v-4h-4v-2h4v-4h2z" />
  </SVGIcon>
)

export default Add
