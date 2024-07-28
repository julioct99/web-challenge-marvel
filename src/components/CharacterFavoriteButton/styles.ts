import styled from 'styled-components'

export const ButtonContainer = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  .card-container: hover & {
    .heart-icon {
      fill: var(--text-color-light);
    }

    .heart-icon-empty {
      fill: var(--text-color-dark);
    }
  }
`
