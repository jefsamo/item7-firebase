import styled from "styled-components"
import { Link } from "react-router-dom"

export const HomePageContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
`

export const Logo = styled.img`
  width:130px;

  @media screen and (max-width: 960px) {
    width:100px;
  }

`
export const FirstSection = styled.div`
    width:100%;
    height: 100vh;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
    url("./images/background.jpeg") center no-repeat;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);

    @media screen and (max-width: 960px) {
    width:100%;
    height: 350px;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
  }
`

export const NavSection = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:60px;
    margin:0 auto;
    width:80%
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 350px;
    position: absolute;
    top: 0px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #222222;
    z-index:999;
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  }
`;


export const NavItem = styled.li`
  height: 80px;


`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding: 0px 15px;
  margin:0 10px;
  font-weight: 900;
  letter-spacing: 1px;

  &:hover{
    color: orangered;
    transition: 0.3s ease-out;
  }
`

export const CenterSection = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color:white;

  @media screen and (max-width: 960px) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color:white;
  }
 
`

export const CenterWord = styled.h3`
  font-family: "Lato", sans-serif;
  color: white;
  font-size: 2.5rem;
  letter-spacing: 3px;
  margin-bottom: 10px;
  @media screen and (max-width: 960px) {
   font-size:22px;
   letter-spacing: 1px;
  }
`

export const CenterLink = styled(Link)`
  text-align: center;
  align-items: center;
  text-transform: uppercase;
  display: inline-block;
  text-decoration: none;
  color: #777;
  background-color:#fff;
  margin-top: 10px;
  padding: 15px 45px;
  border-radius: 100px;

  @media screen and (max-width: 960px) {
  padding: 7px 20px;
  border-radius: 50px;
  }
`

export const HeaderTitle = styled.h3`
    text-align:center;
    font-size: 3rem;
    color:#777;
    margin-bottom: 20px;

    @media screen and (max-width: 960px) {
      text-align:center;
      font-size: 2rem;
      color:#777;
      margin-bottom: 20px;
  }
`

export const SecondSection = styled.div`
  margin-top: 40px;
  color:#777;
  `
export const SecondSectionRow = styled.div`
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  margin:0 auto;
  width:80%;

  @media screen and (max-width: 960px) {
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  margin:0 auto;
  }
`
export const GridRow = styled.div`
  margin:0 10px;
  text-align:center;
  `

export const HeaderRow = styled.h4`
  margin:10px 0;
`

export const ThirdSection = styled.div`
  height: 33rem;
  margin-top: 100px;
  background-color: #f7f7f7;
  overflow: hidden;
  `

export const ThirdSectionRow = styled.div`
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  margin:0 auto;
  width:80%;
  @media screen and (max-width: 960px) {
  display:grid;
  grid-template-columns: 1fr;
  margin:0 auto;
  grid-gap:15px;
  }
`
export const ThirdGridRow = styled.div`
  position:relative;
`

export const InnerGridRow = styled.div`
  position:absolute;
  top: 37%;
  font-size:25px;
  color:#777;
  @media screen and (max-width: 960px) {
    display:none;
 
  }

  `

export const FourthSection = styled.div`
  height:50px;
  margin-top:40px;
  text-align:center;
  color:#777;
`

export const JoinLink = styled(Link)`
  text-decoration: none;
  border: none;
  background-color: orangered;
  padding: 15px 45px;
  border-radius: 50px;
  margin-top: 40px;
  color: #fff;
`

export const FooterSection = styled.div`
  background-color: #222222;
  height: 350px;
`

export const UpperFooter = styled.div`
  display:flex;
  justify-content: flex-start;
  width:80%;
  margin:0 auto;
`

export const UpperFooterContent = styled.div`
  margin: 40px 10px;
  width:200px;
  height:200px;
  color:#777;
`

export const FooterMenu = styled.ul`
  list-style:none;
  margin-top:20px;
`
export const FooterItem = styled.li`
  margin: 0;
  padding: 12px 0px;
`
export const FooterLinks = styled(Link)`
  color:#fff;
  text-decoration:none;

  &:hover{
    color: orangered;
  transition: 0.3s ease-out;
  }
`

export const FooterBottom = styled.div`
  display:flex;
  justify-content:flex-start;
  width:80%;
  margin:0 auto;
  color:#777;
`
export const FooterBottomContent = styled.div`

`
export const FooterBottomContentLast = styled.div`
  margin-left: auto;
`

export const MobileIcon = styled.div`
  display:none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: -7px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer
  }
`
export const ImageTag = styled.img`
  width:400px;
  margin-top:50px;
  width: 100%;
  height: auto;
`

export const PTag = styled.p`
  font-size:2rem;
  margin-left:30px;
  margin-top:30px
`