import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
  margin-top:50px;

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
export const ContainerMain = styled.div`
    display:none;
    @media screen and (max-width: 1200px) {
      display:block;
      width:100%;
      height: 40px;
      background: #222222;
      transition: 850ms;
      position:absolute;
      bottom:0;
      opacity:0.8;
    }

`
export const SingleItem = styled.div`
    box-shadow: rgb(201, 201, 201) 1px 2px 5px 1px;
    height:200px;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;

    &:hover {
      ${ContainerMain}{
        display:block;
        background: #222222;
        width:100%;
        opacity:0.8;
        height: 60px;
        transition: 850ms;
        position:absolute;
        bottom:0;
      }
    }
`
export const SingleItemContainer = styled.div`
    display:block;
    position:relative;
`
export const SingleImage = styled.img`

`


export const CartButton = styled.div`
 
`

export const ItemImage = styled.img`
width: 60%;
height: auto;

@media screen and (max-width: 960px) {
  width: 80%;
}
`

export const ProductDetails = styled.div`
  position: absolute;
  top: 210px;
  color: #222222;
`

export const CartLink = styled(Link)`

  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  background-color:red;
  padding:10px 20px;
  color:#fff;
  text-decoration:none;
  opacity:1;

  @media screen and (max-width: 1200px) {
    top:50%;
    left:50%;
    width:80%;
    transform:translate(-50%, -50%);
    background-color:red;
    padding:5px 10px;
    color:#fff;
    text-decoration:none;
    text-align:center;
    
  }
`