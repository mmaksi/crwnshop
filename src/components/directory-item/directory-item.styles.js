import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})` }
`;

export const Body = styled.div`
  height: 13%;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  &:hover {
    opacity: 0.9;
  }

  h2 {
    font-weight: bold;
    font-size: 22px;
    color: #4a4a4a;
    margin: 0;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
    margin: 0;
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 36vh;
  flex: 1 1 auto;
  display: flex;
  align-items: center; /* cross axis */
  justify-content: center; /* main axis */
  border: 1px solid black;
  overflow: hidden; /* whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area */

  @media screen and (max-width: 800px) {
    height: 24vh;
  }

  &:hover {
    cursor: pointer;

  & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s ease-out;
    }
  }
`;
