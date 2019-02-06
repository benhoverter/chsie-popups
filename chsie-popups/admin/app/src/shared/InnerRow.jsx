import styled from 'styled-components'

const InnerRow = styled.div`
  position: relative;

  &:not( :last-child ) {
    padding-bottom: 30px;
  }

  &::after {
    content: "";
    display: table;
    clear: both;
  }

`

export default InnerRow
