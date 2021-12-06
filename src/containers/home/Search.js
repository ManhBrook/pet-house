import React from "react";
import styled from "styled-components";
import Container from "../../components/container";
import iconSearch from "../../assets/icon-search.png";
import iconAddress from "../../assets/icon-address.png";
import iconCheckin from "../../assets/icon-checkin.png";
import iconCheckout from "../../assets/icon-checkout.png";
import iconRoom from "../../assets/icon-room.png";
const Wrapper = styled.div`
    transform: translateY(-50%);
    & > div {
        background: #ffffff;
        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.15);
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 75px;
    }
`;
const Content = styled.div`
    display: flex;
    width: 80%;
    gap: 90px;
`;
const ContentItem = styled.div`
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #121212;
        margin-bottom: 24px;
    }
`;
const Select = styled.div`
    width: 100%;
    text-align: center;
    cursor: pointer;
    font-weight: 500;
    font-size: 10px;
    line-height: 15px;
    color: #b9b4b4;
    position: relative;
    &:before {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 1px;
        background: #000000;
    }
    &:after {
        content: "";
        position: absolute;
        right: 5px;
        top: 30%;
        transform: translateY(-50%) rotate(225deg);
        width: 5px;
        height: 5px;
        border-top: 1px solid #000000;
        border-left: 1px solid #000000;
    }
`;
const Button = styled.button`
    cursor: pointer;
    background: #f48136;
    border-radius: 10px;
    padding: 8px;
    border: none;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
`;
export default function Search() {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <ContentItem>
                        <img src={iconAddress} alt="Address" />
                        <h3>Địa chỉ</h3>
                        <Select>Thanh Xuân / Hà Nội</Select>
                    </ContentItem>
                    <ContentItem>
                        <img src={iconCheckin} alt="Address" />
                        <h3>Đăng kí</h3>
                        <Select>19 - 10- 2021</Select>
                    </ContentItem>
                    <ContentItem>
                        <img src={iconCheckout} alt="Address" />
                        <h3>Trả phòng</h3>
                        <Select>22 - 10- 2021</Select>
                    </ContentItem>
                    <ContentItem>
                        <img src={iconRoom} alt="Address" />
                        <h3>Phòng</h3>
                        <Select>Phòng thú cưng</Select>
                    </ContentItem>
                </Content>
                <Button>
                    <img src={iconSearch} alt="icon search" />
                    Tìm kiếm
                </Button>
            </Container>
        </Wrapper>
    );
}
