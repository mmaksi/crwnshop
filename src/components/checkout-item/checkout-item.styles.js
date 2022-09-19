import styled from "styled-components"

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  padding: 1rem 0;
  font-size: 20px;
  align-items: center;

  :nth-last-of-type(2),
  :nth-last-of-type(3),
  :nth-last-of-type(4) {
    text-align: center;
  }
`

export const ImageContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
`

export const Name = styled.span`
  width: 20%;
  font-size: 1rem;
  text-align: center;

  @media screen and (max-width: 800px) {
    padding: 0.5rem;
  }
`

export const Price = styled.span`
  width: 20%;
  font-size: 1rem;
  text-align: center;
`

export const RemoveButton = styled.button`
  width: 20%;
  font-size: 1rem;
  text-align: center;
  text-align: right;
  cursor: pointer;
`

export const Quantity = styled.span`
  width: 20%;
  font-size: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Arrow = styled.div`
  cursor: pointer;  
`

export const Value = styled.span`
  margin: 0 10px;
`
