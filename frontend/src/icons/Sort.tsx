import SVGIcon from './SVGIcon'
import { IIconProps } from '@models/iconModel'

const Sort: React.FC<IIconProps> = props => (
  <SVGIcon {...props}>
    <path d="M12.067,17.445c.582,.589,.577,1.539-.012,2.121l-3.793,3.75c-.484,.483-1.121,.726-1.759,.726s-1.282-.243-1.77-.731l-3.787-3.744c-.589-.582-.594-1.532-.012-2.121,.582-.59,1.533-.594,2.122-.012l1.945,1.923V1.5c0-.828,.671-1.5,1.5-1.5s1.5,.672,1.5,1.5V19.357l1.945-1.923c.59-.582,1.539-.578,2.122,.012ZM23.055,4.477l-3.787-3.744c-.974-.975-2.56-.975-3.529-.006l-3.793,3.75c-.589,.582-.594,1.532-.012,2.121,.582,.59,1.533,.594,2.122,.012l1.945-1.923V22.5c0,.828,.671,1.5,1.5,1.5s1.5-.672,1.5-1.5V4.686l1.945,1.923c.292,.289,.674,.434,1.055,.434,.387,0,.773-.148,1.067-.445,.582-.589,.577-1.539-.012-2.121Z" />
  </SVGIcon>
)

export default Sort
