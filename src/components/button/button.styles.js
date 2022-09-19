import styled from "styled-components";

export const BaseButton = styled.button`
  width: auto;
  height: 3rem;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 0.5rem 0 0.5rem;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const PaymentButton = styled(InvertedButton)`
  margin-left: auto;
  margin-top: 30px;
  padding: 0 calc(2rem - 1px); // 2rem is the width of the total button, 1px border for inverted button
`
