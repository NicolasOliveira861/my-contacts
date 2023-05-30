import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
  position: relative;
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    border-radius: 25px;
    height: 50px;
    border: none;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    padding: 0 16px;
    outline: 0;

    &::placeholder {
      color: #bcbcbc;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;

  strong {
    font-size: 24px;
  }

  a {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    padding: 8px 16px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListHeader = styled.header`
  margin: 24px 0 0;

  margin-bottom: 8px;

  .sort-button {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary.main};
    border: none;
    background: transparent;

    img {
      transform: rotate(0);
      transition: all 0.3s ease-in;

      &.active {
        transform: rotate(180deg);
      }
    }
  }
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;
