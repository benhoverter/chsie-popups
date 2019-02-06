import styled, {css} from 'styled-components'

const Section = styled.section`
  padding: 26px;
  background: #e7e7e7;

  &:not( :first-child ) {
    margin-top: 30px;
  }


  &::after {
    content: "";
    display: table;
    clear: both;
  }

  ${ props => props.background === "light" && css`
    background-color: transparent;
  `}

`

export default Section
