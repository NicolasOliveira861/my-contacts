import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary.main};
  color: #fff;
  height: 52px;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  border: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  width: 100%;
  transition: background 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #cccccc;
    cursor: default;
  }
`;
