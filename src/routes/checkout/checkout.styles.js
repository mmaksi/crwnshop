import styled from "styled-components";

export const Total = styled.span`
  margin-top: 2rem;
  margin-left: auto;
  font-size: 2rem;
`;

export const HeaderBlock = styled.span`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    text-align: right;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  padding-bottom: 1.5rem;

  :nth-last-of-type(2),
  :nth-last-of-type(3),
  :nth-last-of-type(4) {
    text-align: center;
  }
`;

export const Container = styled.div`
  width: 60%;
  min-height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media screen and (max-width: 800px) {
    width: 90%;
    margin: 0 auto;
  }
`;
