
import styled, {css} from 'styled-components'

const Button = styled.button`
  display: inline-block;
  height: 28px;
  margin: ${ props => props.margin || '0 20px 0 0' };
  border: 1px solid #c0c0c0;
  background-color: #f7f7f7;
  color: ${ props => props.color || '#00a0d2' };
  font-weight: 600;
  transition: 0.15s ease-out;

  &:hover, &:focus {
    border: 1px solid #fff;
    background-color: ${ props => props.color || '#00a0d2' };
    color: #fff;
  }

  ${ props => props.disabled && css`
    pointer-events: none;
    opacity: 0.6;
    color: #acacac;
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
