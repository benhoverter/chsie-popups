import { PropTypes } from 'prop-types'

import styled, {css} from 'styled-components'

const Column = styled.div`
  position: relative;
  float: left;

  @media screen and (max-width: 980px) {
    width: 100%;
    margin-right: 0%;
    margin-bottom: 30px;
  }


  ${ props => props.side === "left" && css`
    width: 60.5%;
    margin-right: 2%;
  `}

  ${ props => props.side === "right" && css`
    width: 37.2%;
    margin-right: 0%;
  `}

  ${ props => props.select === "true" && css`
    padding: 13px;
    background-color: #d9d9d9;
  `}

`

//////////////////////////////////////////
Column.propTypes = {
  side: PropTypes.string.isRequired,
}
//////////////////////////////////////////

export default Column
