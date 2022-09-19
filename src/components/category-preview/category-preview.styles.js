import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.2rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0rem;
    grid-row-gap: 1.6rem;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin: 0;
  margin-bottom: 25px;
  text-align: left;
  cursor: pointer;
  position: relative;
  left: 14px;
`;
