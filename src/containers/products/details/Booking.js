import React, { useState } from "react";
import styled from "styled-components";
import BackgroundBooking from "../../../assets/background-booking.png";
import Button from "../../../components/button";
const Wrapper = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    background: rgba(247, 207, 147, 0.8);
    backdrop-filter: blur(8px);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Content = styled.div`
    position: relative;
    background: url(${BackgroundBooking}), #fffefd;
    background-size: 140px 140px;
    background-repeat: no-repeat;
    box-shadow: 0px 0px 25px rgba(208, 208, 208, 0.25);
    border-radius: 10px;
    padding: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-weight: bold;
        font-size: 28px;
        line-height: 33px;
        text-align: center;
        margin-bottom: 50px;
    }
    & > p {
        margin: -35px 0 25px;
    }
    & > input {
        width: 430px;
        border: 1px solid #d7d7d7;
        border-radius: 25px;
        padding: 15px 30px;
        margin-bottom: 20px;
        font-size: 16px;
        line-height: 19px;
        &::placeholder {
            color: #1a212f;
        }
    }
    & > button {
        width: fit-content;
    }
`;
const Date = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 50px;
    & > * {
        flex: 1 1 100%;
    }
    div {
        display: flex;
        align-items: center;
        gap: 5px;
        input {
            width: 130px;
            border: 1px solid #d7d7d7;
            border-radius: 25px;
            padding: 10px;
            font-size: 16px;
            line-height: 19px;
            &::placeholder {
                color: #1a212f;
            }
        }
    }
`;
const Close = styled.div`
    position: absolute;
    top: 40px;
    right: 40px;
    cursor: pointer;
`;
export default function Booking(props) {
    const [confirm, setConfirm] = useState(false);
    return (
        <Wrapper>
            {confirm ? (
                <Content>
                    <Close onClick={() => props.onClose()}>X</Close>
                    <h1>Cảm ơn bạn đã sử dụng dịch vụ!</h1>
                    <p>Chúng tôi sẽ sớm liên lạc lại với bạn</p>
                    <Button variant="primary" onClick={() => props.onClose()}>
                        OK
                    </Button>
                </Content>
            ) : (
                <Content>
                    <Close onClick={() => props.onClose()}>X</Close>
                    <h1>Booking</h1>
                    <input placeholder="Họ và tên" />
                    <input placeholder="Tên thú cưng" />
                    <input placeholder="Số điện thoại" />
                    <input placeholder="E-mail" />
                    <Date>
                        <h2>Đặt ngày</h2>
                        <div>
                            Từ
                            <input type="date" placeholder="26.09.2021" />
                        </div>
                        <div>
                            Đến
                            <input type="date" placeholder="26.10.2021" />
                        </div>
                    </Date>
                    <Button variant="primary" onClick={() => setConfirm(true)}>
                        Gửi yêu cầu
                    </Button>
                </Content>
            )}
        </Wrapper>
    );
}
