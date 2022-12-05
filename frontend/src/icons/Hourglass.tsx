import SVGIcon from './SVGIcon'
import { IIconProps } from '@models/iconModel'

const Hourglass: React.FC<IIconProps> = props => (
  <SVGIcon {...props}>
    <path d="M21,24H3V20.591A11.944,11.944,0,0,1,6.986,12,11.937,11.937,0,0,1,3,3.409,3.412,3.412,0,0,1,6.409,0H17.591A3.413,3.413,0,0,1,21,3.409,11.963,11.963,0,0,1,17.028,12,11.963,11.963,0,0,1,21,20.591ZM6,21H18v-.409c0-3.384-2.271-5.9-4.177-7.417L12.348,12l1.475-1.174C15.729,9.311,18,6.793,18,3.409A.41.41,0,0,0,17.591,3H6.409A.41.41,0,0,0,6,3.409c0,3.386,2.281,5.9,4.2,7.414L11.682,12,10.2,13.176C8.281,14.691,6,17.207,6,20.591Z" />
  </SVGIcon>
)

export default Hourglass
