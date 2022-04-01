/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FiBell, FiGrid, FiSearch, FiSettings } from "react-icons/fi";
import {
  Avatar,
  AvatarContainer,
  Container,
  IconContainer,
  LogoContainer,
  Menucontainer,
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <h1>eadBox</h1>
      </LogoContainer>

      <Menucontainer>
        <IconContainer>
          <button>
            <FiSearch size={20} color="#555" />
          </button>

          <button>
            <FiBell size={20} color="#555" />
          </button>

          <button>
            <FiGrid size={20} color="#555" />
          </button>

          <button>
            <FiSettings size={20} color="#555" />
          </button>
        </IconContainer>

        <AvatarContainer>
          <div>
            <span>Edvaldo Afonso</span>
            <p>eadafonso@gmail.com</p>
          </div>

          <Avatar
            src="https://avatars.githubusercontent.com/u/22629779?v=4"
            alt="User"
          />
        </AvatarContainer>
      </Menucontainer>
    </Container>
  );
};

export default Header;
