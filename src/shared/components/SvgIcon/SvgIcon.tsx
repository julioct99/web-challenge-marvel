import styled from 'styled-components'

export interface IconProps {
  size?: number
}

interface SvgIconProps extends IconProps, React.SVGProps<SVGSVGElement> {
  children: React.ReactNode
}

interface IconContainerProps {
  size?: number
}

const IconContainer = styled.svg<IconContainerProps>`
  transition: all 0.25s ease-in-out;
  width: ${(props) => (props.size ? `${props.size}px` : '16px')};
`

const SvgIcon: React.FunctionComponent<SvgIconProps> = ({ size, children, ...props }) => {
  return (
    <IconContainer xmlns='http://www.w3.org/2000/svg' {...props} size={size}>
      {children}
    </IconContainer>
  )
}

export default SvgIcon
