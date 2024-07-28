import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  cursor: pointer;
`

export const CardBody = styled.div`
  -webkit-clip-path: var(--dent-clip-path);
  clip-path: var(--dent-clip-path);
  background: var(--secondary-color);
  color: var(--text-color-light);
  height: 64px;
  font-size: 14px;
`

export const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`

export const BodyBackgroundContainer = styled.div`
  background-color: var(--primary-color);
  width: 100%;
  height: 6px;
  transition: height 0.25s ease-in-out;

  .card-container:hover & {
    height: 100%;
  }
`

export const NameContainer = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
