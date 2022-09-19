import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1.2rem;
  grid-row-gap: 1.6rem;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0rem;
    grid-row-gap: 1.6rem;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin: 0;
  margin-bottom: 25px;
  text-align: center;
`;
