import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Container from "../container";
import Logo from "../../assets/Logo.png";
import User from "./User";
const HeaderWrapper = styled.header`
    position: fixed;
    background: #fff;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    z-index: 100;
    & > div {
        display: flex;
        align-items: center;
    }
    nav {
        width: 60%;
        ul {
            display: flex;
            gap: 40px;
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
        }
    }
`;

export default function Header() {
    const [isLogin, setIsLogin] = React.useState(false);
    return (
        <HeaderWrapper>
            <Container>
                <Link to="/">
                    <img
                        src={Logo}
                        alt="logo"
                        style={{ marginRight: "100px" }}
                    />
                </Link>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Trang chủ</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products">Dịch vụ</NavLink>
                        </li>
                        <li>
                            <NavLink to="/review">Nhận xét</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Liên hệ</NavLink>
                        </li>
                    </ul>
                </nav>
                <User isLogin={isLogin} handleLogin={setIsLogin} />
            </Container>
        </HeaderWrapper>
    );
}
