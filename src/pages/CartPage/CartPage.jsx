import React from 'react'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
    selectCartItemsCount,
    selectCartTotal,
    selectCartItems,
} from "../../redux/cart/cart-selectors";
import { Container, ContainerContent, CartItemContainerSmall, DescDetails, DescTitle, DescNum } from "./CartItem.style"

import { CartContainer } from "./CartPage.style"
import CartItem from "./CartItem"



const bottomStyle = {
    minHeight: "90vh",
    height: "80%"
}


const CartPage = ({ itemCount, total, cartItems }) => {
    return (
        <CartContainer>
            <Container>


                <ContainerContent>
                    <div className="bottom" style={bottomStyle}>
                        {cartItems.length ? (
                            cartItems.map((item) => <CartItem key={item.id} item={item} />)
                        ) : (
                                <h1>Your cart is empty</h1>
                            )}
                    </div>
                    <CartItemContainerSmall>
                        <DescDetails>
                            <DescTitle>Total Items</DescTitle>
                            <DescNum>{itemCount}</DescNum>
                        </DescDetails>
                        <DescDetails>
                            <DescTitle>Subtotal</DescTitle>
                            <DescNum>&#8358;{total}</DescNum>
                        </DescDetails>
                        <DescDetails>
                            <DescTitle>Delivery Charges</DescTitle>
                            <DescNum>&#8358;1000</DescNum>
                        </DescDetails>
                        <DescDetails>
                            <DescTitle>Total</DescTitle>
                            <DescNum>&#8358;{total + 1000}</DescNum>
                        </DescDetails>
                        <hr style={{ width: "90%", margin: "5px auto" }} />
                        <input type="submit" value="Checkout" style={{ margin: "0 auto", width: "90%", background: "red", color: "#fff", border: "none", outline: "none", padding: "10px 20px", display: "flex", justifyContent: "center", cursor: "pointer" }} />
                    </CartItemContainerSmall>
                </ContainerContent>
            </Container>
        </CartContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
    total: selectCartTotal,
    cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartPage);
