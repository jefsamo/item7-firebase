import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Footer from "../../components/Footer/Footer"
import { HomePageContainer, FirstSection, SecondSection, NavSection, NavMenu, NavItem, NavLinks, CenterSection, CenterWord, CenterLink, SecondSectionRow, GridRow, HeaderRow, ThirdSection, ThirdSectionRow, ThirdGridRow, InnerGridRow, FourthSection, JoinLink, MobileIcon, Logo, HeaderTitle, PTag, ImageTag } from "./HomePage.style"
import { FaDesktop, FaCartArrowDown, FaMotorcycle, FaChartLine, FaTimes, FaBars } from "react-icons/fa"


const HomePage = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <HomePageContainer>
            <FirstSection>
                <NavSection>
                    <div>
                        <Link>
                            <Logo src="./images/item7.png"></Logo>
                        </Link>
                    </div>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes size={30} style={{ fill: "white" }} /> : <FaBars size={30} style={{ fill: "white" }} />}
                    </MobileIcon>
                    <div>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to="/">Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/">Contact</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/">Login</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/shop">Signup</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </div>
                </NavSection>
                <CenterSection>
                    <CenterWord>Why settle for mediocre meals?</CenterWord>
                    <CenterLink to="/shop">Shop Now</CenterLink>
                </CenterSection>
            </FirstSection>

            <SecondSection>
                <HeaderTitle >How it Works</HeaderTitle>

                <SecondSectionRow>
                    <GridRow>
                        <FaDesktop size={50} style={{ fill: "red" }} />
                        <HeaderRow>Discover</HeaderRow>
                        <p>Locate our nearest check-point</p>
                    </GridRow>
                    <GridRow>
                        <FaCartArrowDown size={50} style={{ fill: "red" }} />
                        <HeaderRow>Add to cart</HeaderRow>
                        <p>Locate our nearest check-point</p>
                    </GridRow>
                    <GridRow>
                        <FaChartLine size={50} style={{ fill: "red" }} />
                        <HeaderRow>Place your Order</HeaderRow>
                        <p>Locate our nearest check-point</p>
                    </GridRow>
                    <GridRow>
                        <FaMotorcycle size={50} style={{ fill: "red" }} />
                        <HeaderRow>Get Delivered</HeaderRow>
                        <p>Locate our nearest check-point</p>
                    </GridRow>
                </SecondSectionRow>
            </SecondSection>
            <ThirdSection>
                <ThirdSectionRow>
                    <ThirdGridRow>
                        <InnerGridRow>
                            <p>Consumer App</p>
                            <p>
                                Download the
                            <b>
                                    <span className="span span__red" style={{ color: "red" }}>item</span>
                                    <span className="span span__yellow" style={{ color: "yellow" }}>7</span>
                                </b>
                            on your mobile phone
                            </p>
                            <p>Order your favorite meal from the comfort of your home</p>
                            <img src="./images/google_play.34e99894.png" alt="Play store Logo" style={{ marginLeft: "-20px" }} />
                        </InnerGridRow>
                    </ThirdGridRow>
                    <GridRow>
                        <ImageTag src="./images/item 7 app.jpg" alt=""></ImageTag>
                    </GridRow>
                </ThirdSectionRow>
            </ThirdSection>
            <FourthSection>
                <h3 style={{ marginBottom: "20px" }}>Join our DISPATCH TEAM</h3>
                <p style={{ marginBottom: "30px" }}>
                    We are constantly looking to recruit smart, honest and diligent
                    personnel to our delivery team.
                </p>
                <JoinLink to="/" className="btn-join">Join Us</JoinLink>
            </FourthSection>
            <ThirdSection>
                <ThirdSectionRow>
                    <ThirdGridRow>
                        <InnerGridRow>

                            <PTag>Worried about your meal? <br /> Track your order with ease</PTag>

                        </InnerGridRow>
                    </ThirdGridRow>
                    <GridRow>
                        <ImageTag src="./images/mobile-3.gif" alt=""></ImageTag>
                    </GridRow>
                </ThirdSectionRow>
            </ThirdSection>

            <Footer />
        </HomePageContainer>
    )
}

export default HomePage
