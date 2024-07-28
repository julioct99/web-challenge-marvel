import { IconContainer } from './styles'

export interface IconProps {
  size?: number
}

interface SvgIconProps extends IconProps, React.SVGProps<SVGSVGElement> {
  children: React.ReactNode
}

const SvgIcon: React.FunctionComponent<SvgIconProps> = ({ size, children, ...props }) => {
  return (
    <IconContainer xmlns='http://www.w3.org/2000/svg' {...props} size={size}>
      {children}
    </IconContainer>
  )
}

export default SvgIcon
