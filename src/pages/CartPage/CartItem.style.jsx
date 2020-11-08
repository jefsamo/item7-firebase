import styled from "styled-components"

export const Container = styled.div`
    margin-top:100px;
`
export const ContainerContent = styled.div`
    width: 70%;
    max-width:1000px;
    display:grid;
    grid-template-columns: 3fr 1fr;
    margin:0 auto;
    column-gap:20px;
    row-gap:20px;
    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
        row-gap: 70px;
        column-gap: 25px;
        width: 80%;
    }
`
export const CartItemContainerLarge = styled.div`
    display:grid;
    row-gap:50px;
`
export const CartItemContainerSmall = styled.div`
    width:100%;
    height: 170px;
    box-shadow: rgb(201, 201, 201) 1px 2px 5px 1px;
    margin-bottom:20px;

    @media screen and (max-width: 480px) {
        height: 180px;
    }
`
export const CartContent = styled.div`
    width:100%;
    height: 150px;
    box-shadow: rgb(201, 201, 201) 1px 2px 5px 1px;
    position:relative;
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content:center;
    align-items:center;
    padding:0 15px;
    margin: 0 0 15px 0;
`

export const ItemImage = styled.div`

`
export const IncDec = styled.div`
    display:flex;
`
export const ItemPrice = styled.div`

`
export const ItemName = styled.div`

`

export const MinusContainer = styled.div`
    background-color:#EFEFEF;
    height:20px;
    width:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    border:1px solid #707070;
`

export const PlusContainer = styled.div`
    background-color:#EFEFEF;
    height:20px;
    width:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    border:1px solid #707070;
`
export const CounterContainer = styled.div`
border:1px solid #707070;
padding:0 10px;
`

export const DescDetails = styled.div`
    display:flex;
    justify-content:space-between;
    padding: 5px 10px
`
export const DescNum = styled.div`

`
export const DescTitle = styled.div`

`