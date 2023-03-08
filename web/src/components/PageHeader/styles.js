import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 24px;

  a {
    text-decoration: none;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.primary.main};
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;

    img {
      transform: rotate(-90deg);
    }
  }

  h1 {
    font-size: 24px;
    line-height: 30px;
  }
`;
