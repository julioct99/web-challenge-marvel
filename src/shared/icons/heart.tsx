import SvgIcon, { IconProps } from '../components/SvgIcon/SvgIcon'

const Heart: React.FunctionComponent<IconProps> = ({ size }) => {
  return (
    <SvgIcon
      width='24'
      height='22'
      viewBox='0 0 24 22'
      fill='red'
      className='heart-icon'
      size={size}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M12 3.63869L6 -0.00292969L0 3.63869V11.4422L12 21.6734L24 11.4422V3.63869L18 -0.00292969L12 3.63869Z'
      />
    </SvgIcon>
  )
}

export default Heart
