
import styled, {css} from 'styled-components'

const Button = styled.button`
  display: inline-block;
  margin-left: 20px;
  border: 2px solid transparent;
  transition: 0.2s ease-out;

  &:hover, &:focus {
    border: 2px solid black;
  }

  ${ props => props.disabled && css`
    pointer-events: none;
    opacity: 0.6;
  ` }

  ${ props => props.width && css`
    width: ${props.width};
  ` }

  ${ props => props.float && css`
    float: ${props.float};
  ` }

  ${ props => props.primary && css`
    background-color: blue;
    color: white;
  ` }

`

export default Button
