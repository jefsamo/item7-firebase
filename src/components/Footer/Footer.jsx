import React from 'react'
import { FaHeart } from "react-icons/fa"
import { FooterSection, UpperFooter, UpperFooterContent, FooterMenu, FooterLinks, FooterItem, FooterBottom, FooterBottomContent, FooterBottomContentLast } from "./Footer.style"

const getYear = new Date().getFullYear();

const Footer = () => {
    return (
        <FooterSection>
            <UpperFooter>
                <UpperFooterContent>
                    <h3>For Company</h3>
                    <FooterMenu>
                        <FooterItem>
                            <FooterLinks>About Us</FooterLinks>
                        </FooterItem>
                        <FooterItem>
                            <FooterLinks>Privacy</FooterLinks>
                        </FooterItem>
                        <FooterItem>
                            <FooterLinks>Terms &amp; Conditions</FooterLinks>
                        </FooterItem>
                    </FooterMenu>
                </UpperFooterContent>
                <UpperFooterContent>
                    <h3>For Customers</h3>
                    <FooterMenu>
                        <FooterItem>
                            <FooterLinks>Login</FooterLinks>
                        </FooterItem>
                        <FooterItem>
                            <FooterLinks>Signup</FooterLinks>
                        </FooterItem>
                    </FooterMenu>
                </UpperFooterContent>
                <UpperFooterContent>
                    <h3>For Consumers</h3>
                    <FooterMenu>
                        <FooterItem>
                            <FooterLinks>Login</FooterLinks>
                        </FooterItem>
                        <FooterItem>
                            <FooterLinks>Signup</FooterLinks>
                        </FooterItem>
                    </FooterMenu>
                </UpperFooterContent>
            </UpperFooter>
            <hr style={{ width: "85%", margin: "0 auto" }} />

            <FooterBottom>
                <FooterBottomContent>
                    <p>Copyright &copy; {getYear} All rights reserved |</p>
                </FooterBottomContent>
                <FooterBottomContent>
                    <img src="./images/item7.png" alt="" style={{ width: "100px", marginTop: "-35px" }} />
                </FooterBottomContent>
                <FooterBottomContentLast>
                    <p>Made by <FaHeart /> Butterfly Inc</p>
                </FooterBottomContentLast>
            </FooterBottom>
        </FooterSection>
    )
}

export default Footer
