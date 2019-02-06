import styled from 'styled-components'

const Row = styled.div`
  position: relative;
  padding: 13px 2px;
  z-index: ${ props => props.zIndex };

  &::after {
    content: "";
    display: table;
    clear: both;
  }

`

export default Row
