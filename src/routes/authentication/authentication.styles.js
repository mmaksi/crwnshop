import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: auto;
  justify-content: center;
  gap: 100px;
  margin: 30px 10px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 2rem;
    width: auto;
  }
`;
