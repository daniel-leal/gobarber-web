import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  // Deixa a borda vermelha em casos de erros
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  // Deixa laranja o input quando estiver com foco
  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  // Deixa o icon laranja quando estiver sem o foco
  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  /* Override Autofill CSS */
  input:-webkit-autofill {
    box-shadow: 0 0 0 30px #f4ede8 inset !important;
    -webkit-box-shadow: 0 0 0 30px #232129 inset !important;
    -webkit-text-fill-color: #f4ede8 !important;
  }
  input:-webkit-autofill:active {
    box-shadow: 0 0 0 30px #f4ede8 inset !important;
    -webkit-box-shadow: 0 0 0 30px #f4ede8 inset !important;
    -webkit-text-fill-color: #666360 !important;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
