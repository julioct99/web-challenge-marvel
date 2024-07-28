import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  width: 100%;
  padding-bottom: 5px;
`

export const SearchIcon = styled.span`
  margin-right: 10px;
  font-size: 18px;
`

export const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 16px;

  ::placeholder {
    color: #999;
  }
`
