import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px;
  background-color: #65888e;
  border-radius: 30px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #565656;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
