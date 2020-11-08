import React from 'react'
import { FaTimes, FaPlus, FaMinus } from "react-icons/fa"
import { CartItemContainerLarge, CartContent, ItemImage, ItemName, IncDec, ItemPrice, MinusContainer, PlusContainer, CounterContainer } from "./CartItem.style"
import { connect } from "react-redux";

import {
    clearItemFromCart,
    addItem,
    removeItem,
} from "../../redux/cart/cart-actions";

const CartItem = ({ item, clearItem, removeItem, addItem }) => {
    const { name, imageUrl, price, quantity } = item;
    return (
        <CartItemContainerLarge>
            <CartContent>
                <FaTimes size={17} style={{ fill: "black", position: "absolute", right: "10px", top: "10px", cursor: "pointer" }} onClick={() => clearItem(item)} />
                <ItemImage>
                    <img src={`${imageUrl}`} alt="" style={{ width: "100px", height: "auto" }} />
                </ItemImage>
                <ItemName>
                    <p>{name}</p>
                </ItemName>
                <IncDec>
                    <MinusContainer onClick={() => removeItem(item)}>
                        <FaMinus size={12} />
                    </MinusContainer>
                    <CounterContainer>
                        {quantity}
                    </CounterContainer>
                    <PlusContainer onClick={() => addItem(item)}>
                        <FaPlus size={12} />
                    </PlusContainer>
                </IncDec>
                <ItemPrice>&#8358;{price}</ItemPrice>
            </CartContent>
        </CartItemContainerLarge>


    )
}

const mapDispatchToProps = (dispatch) => ({
    clearItem: (item) => dispatch(clearItemFromCart(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
