import React from "react";
import styled from "styled-components";
import Container from "../../components/container";
import BackgroundPromo from "../../assets/Promo.png";
import Button from "../../components/button";
const Wrapper = styled.div`
    margin: 140px 0;
    & > div {
        background-image: url(${BackgroundPromo});
        padding: 70px 0 60px 10%;
        h1 {
            font-weight: 600;
            font-size: 70px;
            line-height: 80px;
        }
        h2 {
            font-weight: 900;
            font-size: 30px;
            line-height: 36px;
            margin-bottom: 10px;
        }
        p {
            font-size: 14px;
            line-height: 20px;
            margin-bottom: 40px;
        }
    }
`;

export default function Promo() {
    return (
        <Wrapper>
            <Container>
                <h1>MIỄN PHÍ</h1>
                <h2>Ngày thứ 7 hàng tuần</h2>
                <p>
                    Khuyến mại có hiệu lực khi đặt Phòng "Phòng 5" và "Phòng 6"
                </p>
                <Button>Đặt phòng</Button>
            </Container>
        </Wrapper>
    );
}
