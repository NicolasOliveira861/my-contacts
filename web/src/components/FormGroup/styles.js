import styled from 'styled-components';

export const Container = styled.div`
  small {
    color: ${({ theme }) => theme.colors.danger.main};
    margin-top: 8px;
    font-size: 12px;
    display: block;
  }
`;
