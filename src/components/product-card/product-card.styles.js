import styled from "styled-components"

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`

export const Price = styled.span`
  width: 10%;
`

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 22rem;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
    overflow: hidden;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 75%;
    display: none;

    @media screen and (max-width: 800px) {
      display: block;
      min-width: unset;
      padding: 0;
    }
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: block;
    }
  }

  @media screen and (max-width: 800px) {
    width: 90%;
    margin: 0 auto;
    &:hover {
      img {
        opacity: unset;
      }
  
      button {
        opacity: unset;
      }
    }
  }

  .footer {

  }
`