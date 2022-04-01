import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.5rem;
  padding: 0 4rem;
  border-bottom: 1px solid #ddd;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TitleContainer = styled.div``;

export const ButtonContainer = styled.div`
  > button {
    width: 130px;
    height: 2.5rem;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.blue};
    border-radius: 4px;
    padding: 8px 0;
    border: 1px solid ${({ theme }) => theme.colors.blue};

    > svg {
      margin-right: 8px;
    }
  }
`;

export const MainContainer = styled.main`
  padding: 2rem 4rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`;

export const Card = styled.div`
  width: 270px;
  height: 220px;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #ddd;

  > .cardTitle {
    border-top-left-radius: 3px;
    border-left: 5px solid blue;
    padding: 1rem 0;
    margin-bottom: 1rem;

    > h1 {
      padding: 0 1rem;
      font-size: 1.2rem;
    }
  }

  > p {
    padding: 0 1.5rem;
    font-size: 13px;
  }

  > .first-card {
    border-left: 5px solid ${({ theme }) => theme.colors.green};
  }

  > .second-card {
    border-left: 5px solid ${({ theme }) => theme.colors.yellow};
  }

  > .third-card {
    border-left: 5px solid ${({ theme }) => theme.colors.blue};
  }

  > .four-card {
    border-left: 5px solid ${({ theme }) => theme.colors.red};
  }

  > .last-card {
    border-left: 5px solid ${({ theme }) => theme.colors.purple};
  }
`;
