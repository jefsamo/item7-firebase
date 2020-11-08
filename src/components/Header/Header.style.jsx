import styled from "styled-components"
import { Link } from "react-router-dom"


export const SidebarContainer = styled.div`
  display:none;

  @media screen and (max-width: 1200px) {
    display:block;
    position:absolute;
    top:0;
    width:250px;
    height:100vh;
    background-color: #fff;
    transition: 850ms;
    left: ${({ click }) => (click ? 0 : '-100%')};
  }
`

export const SidebarMenu = styled.ul`

`
export const SidebarItem = styled.li`
  padding:20px 10px;
  list-style:none;
  display:flex;
  justify-content:flex-start;
  align-items:center;
`
export const SidebarLink = styled(Link)`
  text-decoration:none;
  color:#0e213b;
  text-align:center;
  margin-left:5px;
`

export const Logo = styled.img`
  width:120px;
   
  @media screen and (max-width: 960px) {
    width:100px;
  }

`

export const NavContainer = styled.div`
    background-color: #222222;
    height: 70px;
    min-height: 70px;
    width:100%; 
    display:flex;
    position:fixed;
    top:0;
    z-index:999;
`

export const Container = styled.div`
  max-width:1200px;
  display:flex;
  justify-content:space-between;
  width:80%;
  margin:0 auto;
  align-items:center;
`

export const CartContainer = styled.div`
  display:flex;
  text-decoration:none;
`
export const MobileIcon = styled.div`
  display:none;

  @media screen and (max-width: 700px) {
    display: block;
    position: absolute;
    margin:0;
    padding:0;
    top:17px;
    left: 40px;
    transform: translate(-100%, 10%);
    font-size: 1.8rem;
    cursor: pointer;
    display:flex;
    align-items:center;
  }
`

export const CartCounter = styled.div`
  background-color: red;
  height: 20px;
  width:20px;
  border-radius: 50%;
  text-decoration:none;
  text-align:center;
  margin-left: -15px;
  color:#fff;
`

export const SearchContainer = styled.div`

    
  @media screen and (max-width: 960px) {
      width:100%
  }
`

export const SearchInput = styled.input`
    width:500px;
    height:35px;
    padding:0 10px;
    outline:none;
    @media screen and (max-width: 960px) { 
      width:90%;
      height:30px;
      outline:none;
      margin:0 auto;
    }
`
export const ProfileContainer = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;

  @media screen and (max-width: 960px) { 
    display:none;
  }
`
export const ProfileInitials = styled.div`
  background-color:#fff;
  height: 40px;
  width:40px;
  border-radius: 50%;
  text-align:center;
  margin-left: -15px;
  color:black;
`

export const LoginContainer = styled.div`

`


export const LoginButton = styled(Link)`
    background-color:red;
    padding:5px 20px;
    border:none;
    outline:none;
    color:#fff;
    text-decoration:none;
`

export const ProfileDiv = styled.div`
  display:flex;
  justify-content:center; 
  align-items:center;
`