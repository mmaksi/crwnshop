import styled from "styled-components";
import { BaseButton, GoogleSignInButton, InvertedButton } from "../button/button.styles";

export const DropdownContainer = styled.div`
  position: absolute;
  width: 15rem;
  height: 21rem;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 5rem;
  right: 2.5rem;
  z-index: 5;

  @media screen and (max-width: 800px) {
    right: 1rem;
  }

  ${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
    margin-top: auto
  }
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

