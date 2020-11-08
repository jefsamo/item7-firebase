import React from 'react'
import { Container, SingleItem, ContainerMain, SingleItemContainer, ItemImage, ProductDetails, CartLink } from "./ShopItem.style"
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-actions";

const ShopItem = ({ item, addItem }) => {
    const { name, imageUrl, price } = item;
    return (
        <Container>

            <SingleItemContainer>
                <SingleItem>
                    <ItemImage src={`${imageUrl}`} alt={`${name}`}></ItemImage>
                    <ContainerMain>
                        <CartLink onClick={() => addItem(item)}>Add to Cart</CartLink>
                    </ContainerMain>
                </SingleItem>
                <ProductDetails>
                    <p>{name}</p>
                    <p>&#8358;{price}</p>
                </ProductDetails>

            </SingleItemContainer>

        </Container>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ShopItem);
