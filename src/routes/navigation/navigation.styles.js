import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
  height: 3.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
`;

export const LogoContainer = styled.header`
  height: 100%;
  width: 10px;
  padding: 0;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const NavLinksContainer = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const NavLink = styled(Link)`
  padding: 0.6rem 1.5rem 0.6rem 0;
  cursor: pointer;
`;
