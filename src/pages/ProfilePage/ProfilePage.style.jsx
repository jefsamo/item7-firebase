import styled from "styled-components"
import { Link } from "react-router-dom"

export const ProfileContainer = styled.div`
    margin-top:100px;
`
export const ProfileSection = styled.div`
    width:70%;
    display:grid;
    grid-template-columns:30% 70%;
    max-width: 1200px;
    column-gap: 30px;
    margin:0 auto;
    height:500px;
    max-width:1000px;

    @media screen and (max-width: 960px) {
        grid-template-columns:1fr;
        width:90%;
    }
`
export const ProfileSmall = styled.div`
    box-shadow: rgb(201, 201, 201) 1px 2px 5px 1px;

    @media screen and (max-width: 960px) {
        display:none;
    }

`
export const ProfileLarge = styled.div`
    box-shadow: rgb(201, 201, 201) 1px 2px 5px 1px;

    @media screen and (max-width: 960px) {
        display:grid;
        grid-template-columns:1fr;
    }


`
export const DetailContainer = styled.div`
    display:flex;
    margin:10px 10px;
    align-items:center;

`
export const InitialContainer = styled.div`
    background-color:#0e213b;
    height:50px;
    width:50px;
    border-radius:50%;
    text-align:center;
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const ProfileMenu = styled.ul`


`
export const ProfileItem = styled.li`
    list-style:none;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    padding: 15px 10px;
    border: 1px solid #222222;
    border-color: #f1f1f1;
    border-collapse: collapse;

`
export const ProfileLink = styled(Link)`
    text-decoration:none;
    margin-left:5px;

        
    &:hover{
        color: #0e213b;
        font-weight: bolder;
        transition: 0.3s ease-out;
    }

`

export const ProfileInner = styled.div`
    width: 70%;
    margin:0 auto;
`

export const ProfileInput = styled.input`
    width: 100%; 
    height: 40px;
    outline: none; 
    margin: "10px 0 20px 0";
`

export const FormContainer = styled.form`


`