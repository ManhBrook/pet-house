import React from "react";
import styled from "styled-components";
import Button from "../button";
const Wrapper = styled.div``;

export default function User(props) {
    return (
        <Wrapper>
            {props.isLogin ? (
                <Button onClick={() => props.handleLogin(false)} variant={"primary"}>
                    Giỏ hàng
                </Button>
            ) : (
                <Button onClick={() => props.handleLogin(true)} variant={"primary"}>
                    Đăng nhập
                </Button>
            )}
        </Wrapper>
    );
}
