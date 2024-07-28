import styled from 'styled-components'

interface IconContainerProps {
  size?: number
}

export const IconContainer = styled.svg<IconContainerProps>`
  transition: all 0.25s ease-in-out;
  width: ${(props) => (props.size ? `${props.size}px` : '16px')};
`
