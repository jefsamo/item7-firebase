import styled from "styled-components"
import { Link } from "react-router-dom"

export const FooterSection = styled.div`
  background-color: #222222;
  width:100%;
  height: 350px;
`

export const UpperFooter = styled.div`
  display:flex;
  justify-content: flex-start;
  width:80%;
  margin:0 auto;
  max-width:1200px;
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
  max-width:1200px;

`
export const FooterBottomContent = styled.div`

`
export const FooterBottomContentLast = styled.div`
  margin-left: auto;
`
