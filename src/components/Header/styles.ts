import styled from "styled-components";

export const Container = styled.header`
  height: 4.5rem;
  display: flex;
  padding: 0 4rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid #eee;
`;

export const LogoContainer = styled.div``;

export const Menucontainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled.div`
  > button {
    background-color: transparent;
    border: 0;
    margin-right: 2rem;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 2rem;

  > div {
    span {
      font-family: "Roboto";
      font-weight: 400;
    }
    p {
      font-size: 12px;
      color: #555;
      font-weight: 200;
    }
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  line-height: 40px;
  object-fit: contain;
  //border: 1px solid #ddd;
  border-radius: 25px;
  margin-left: 1rem;
`;
