import styled from "styled-components"

export const LoginContainer = styled.div`
    margin-top:100px;

`
export const LoginSection = styled.div`
    width: 500px;
    margin:0 auto;
    height:400px;
    box-shadow: rgb(201, 201, 201) 1px 2px 5px 1px;
    @media screen and (max-width: 960px) {
        grid-template-columns:1fr;
        width:90%;
        height:400px;
    }

`

export const LoginInput = styled.input`
    width: 100%; 
    height: 40px;
    outline: none; 
    margin: "10px 0 20px 0";
`