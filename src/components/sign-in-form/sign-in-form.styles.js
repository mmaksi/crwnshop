import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5%;

  @media screen and (max-width: 800px) {
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 24rem;

  @media screen and (max-width: 800px) {
    width: 100%;
  }

  h2 {
    margin: 10px 0;
  }
`;
