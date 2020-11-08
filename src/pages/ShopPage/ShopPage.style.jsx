import styled from "styled-components"

export const ShopContainer = styled.div`

`
export const ShopItemContainer = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 50px auto;
  display: grid;
  grid-template-rows: 250px 250px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(200px, auto);
  row-gap: 30px;
  column-gap: 25px;
  

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 190px 190px 190px 190px;
    row-gap: 70px;
    column-gap: 25px;
  }

`

export const MobileIcon = styled.div`
  display:none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    margin:0;
    padding:0;
    left: 40px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer
  }
`

