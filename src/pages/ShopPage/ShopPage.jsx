import React from 'react'
// import { Link } from "react-router-dom"
import { ShopContainer, ShopItemContainer } from "./ShopPage.style"
import ShopItem from "../../components/ShopItem/ShopItem"
import SHOP_DATA from "../../Shop-data/shopData";

const bottomStyle = {
    minHeight: "100vh",
    height: "100%"
}


class ShopPage extends React.Component {
    state = {
        collections: SHOP_DATA,
    };

    render() {
        const { collections } = this.state;
        return (
            <ShopContainer>
                <div className="bottom" style={bottomStyle}>
                    <ShopItemContainer>


                        {collections.map((item) => (
                            <ShopItem key={item.id} item={item} />
                        ))}
                    </ShopItemContainer>
                </div>
            </ShopContainer>
        );
    }
}
export default ShopPage
