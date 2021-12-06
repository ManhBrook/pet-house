import React from "react";
import styled from "styled-components";
import BannerBackground from "../../assets/Banner.png";
import Container from "../../components/container";
import Button from "../../components/button";
const Wrapper = styled.div`
    height: 500px;
    background-image: url(${BannerBackground});
    background-size: cover;
    background-position: center;
    & > div {
        display: flex;
        align-items: center;
        height: 100%;
    }
`;
const Content = styled.div`
    color: #1a212f;
    h2 {
        font-size: 18px;
        line-height: 22px;
    }
    h1 {
        font-weight: 600;
        font-size: 94px;
        line-height: 106px;
    }
    p {
        font-weight: 500;
        font-size: 22px;
        line-height: 26px;
        margin-bottom: 60px;
    }
`;

export default function Banner() {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <h2>Khách sạn thú cưng</h2>
                    <h1>PetHouse</h1>
                    <p>Thú cưng của bạn, đam mê của chúng tôi</p>
                    <Button variant="secondary" theme="bold">
                        Đặt phòng ngay
                    </Button>
                </Content>
            </Container>
        </Wrapper>
    );
}
