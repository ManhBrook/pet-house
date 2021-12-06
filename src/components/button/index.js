import React from "react";
import styled from "styled-components";
import paw from "../../assets/paw.png";
import pawSecondary from "../../assets/paw-secondary.png";

const theme = {
    color:{
        primary: "#FFFEFD",
        secondary: "#F48136",
    },
    background:{
        primary: "#F48136",
        secondary: "#FFFEFD",   
    }
}

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    background: ${(props) => props.variant==="primary"? theme.background.primary : theme.background.secondary};
    box-shadow: 0px 5px 25px rgba(26, 33, 47, 0.1);
    border-radius: 25px;
    padding: 7px;
    border: none;
    cursor: pointer;
`;
const Content = styled.div`
    font-weight: ${(props) => (props.theme === "bold" ? "bold" : "600")};
    font-size: ${(props) => (props.theme === "bold" ? "18px" : "14px")};
    line-height: ${(props) => (props.theme === "bold" ? "22px" : "17px")};
    text-align: center;
    padding: 0 10px;
    color: ${(props) => props.variant==="primary"? theme.color.primary : theme.color.secondary};
    width: 100%;
    a{
        color: ${(props) => props.variant==="primary"? theme.color.primary : theme.color.secondary};
    }
`;

export default function Button({ children, ...props }) {
    return (
        <StyledButton {...props} variant={props.variant} onClick={props.onClick}>
            <Content theme={props.theme} variant={props.variant}>{children}</Content>
            <img src={props.variant==="primary"? paw : pawSecondary} alt="paw" />
        </StyledButton>
    );
}
