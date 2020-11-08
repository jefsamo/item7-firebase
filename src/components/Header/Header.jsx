import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils"
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { FaCartArrowDown, FaTimes, FaBars, FaShoppingBag, FaSignOutAlt, FaHistory, FaUser, FaLock, FaSignInAlt, FaRegAddressBook } from "react-icons/fa"
import { NavContainer, CartCounter, Container, CartContainer, MobileIcon, Logo, SearchContainer, SearchInput, ProfileContainer, ProfileInitials, SidebarContainer, SidebarMenu, SidebarItem, SidebarLink, LoginButton, LoginContainer, ProfileDiv } from "./Header.style"


const Header = ({ currentUser, itemsCount }) => {
    console.log(currentUser)
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    return (
        <NavContainer>
            <Container>
                <Link to="/">
                    <Logo src="./images/item7.png"></Logo>
                </Link>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes size={30} style={{ fill: "black" }} /> : <FaBars size={30} style={{ fill: "white" }} />}
                </MobileIcon>
                <SidebarContainer onClick={handleClick} click={click}>
                    {currentUser ?

                        <SidebarMenu>
                            <SidebarItem>
                                <FaShoppingBag size={25} style={{ fill: "#0e213b" }} />
                                <SidebarLink to="/shop">Shop</SidebarLink>
                            </SidebarItem>
                            <SidebarItem>
                                <FaUser size={25} style={{ fill: "#0e213b" }} />
                                <SidebarLink to="/profile">Profile</SidebarLink>
                            </SidebarItem>
                            <SidebarItem>
                                <FaHistory size={25} style={{ fill: "#0e213b" }} />
                                <SidebarLink to="/cart">Orders</SidebarLink>
                            </SidebarItem>
                            <SidebarItem>
                                <FaLock size={25} style={{ fill: "#0e213b" }} />
                                <SidebarLink to="/change-password">Change Password</SidebarLink>
                            </SidebarItem>
                            <SidebarItem>
                                <FaSignOutAlt size={25} style={{ fill: "#0e213b" }} />
                                <SidebarLink onClick={() => auth.signOut()}>Logout</SidebarLink>
                            </SidebarItem>
                        </SidebarMenu> :
                        <SidebarMenu>
                            <SidebarItem>
                                <FaSignInAlt size={25} style={{ fill: "#0e213b" }} />
                                <SidebarLink to="/login">Login</SidebarLink>
                            </SidebarItem>
                            <SidebarItem>
                                <FaRegAddressBook size={25} style={{ fill: "#0e213b" }} />
                                <SidebarLink to="/signup">Sign up</SidebarLink>
                            </SidebarItem>
                        </SidebarMenu>
                    }
                </SidebarContainer>

                <SearchContainer>
                    <SearchInput type="text" name="search" id="search" ></SearchInput>
                </SearchContainer>
                <ProfileContainer>
                    {currentUser ?
                        <ProfileDiv>

                            <ProfileInitials>
                                <p style={{ textAlign: "center", lineHeight: "40px" }}>OS</p>
                            </ProfileInitials>
                            <Link to="/profile" style={{ textDecoration: "none" }}>
                                <p style={{ textAlign: "center", color: "white" }}>Olawale</p>
                            </Link>
                        </ProfileDiv>
                        :
                        <div className="">
                            <LoginContainer>
                                <LoginButton to="/login">Login</LoginButton>
                            </LoginContainer>
                        </div>
                    }

                </ProfileContainer>
                <Link to="/cart" style={{textDecoration:"none"}}>
                    <CartContainer>
                        <FaCartArrowDown size={35} style={{ fill: "#fff" }} />
                        <CartCounter>
                            <span>{itemsCount}</span>
                        </CartCounter>
                    </CartContainer>
                </Link>
            </Container>
        </NavContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    itemsCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(Header);
